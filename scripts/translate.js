import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workspaceRoot = path.resolve(__dirname, '..');
const localesDir = path.join(workspaceRoot, 'theme', 'i18n', 'locales');
const utilsPath = path.join(workspaceRoot, 'theme', 'i18n', 'utils.ts');

const BATCH_SIZE = 15;
const DELIMITER = '\n###\n';
const SPLIT_REGEX = /\s*###\s*/;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Flattens a nested object/array into a single-level object with dot-notation keys.
 * Handles arrays by treating indices as keys.
 */
function flattenObject(obj, prefix = '', res = {}) {
  if (Array.isArray(obj)) {
    obj.forEach((val, idx) => {
      const propName = prefix ? `${prefix}.${idx}` : `${idx}`;
      if (val !== null && typeof val === 'object') {
        flattenObject(val, propName, res);
      } else {
        res[propName] = val;
      }
    });
  } else if (obj !== null && typeof obj === 'object') {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const propName = prefix ? `${prefix}.${key}` : key;
        const val = obj[key];
        if (val !== null && typeof val === 'object') {
          flattenObject(val, propName, res);
        } else {
          res[propName] = val;
        }
      }
    }
  }
  return res;
}

/**
 * Unflattens a dot-notation object back into its original nested object or array structure.
 */
function unflattenObject(data) {
  const result = {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const keys = key.split('.');
      let current = result;
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];

        if (i === keys.length - 1) {
          current[k] = data[key];
        } else {
          if (current[k] === undefined) {
            current[k] = {};
          }
          current = current[k];
        }
      }
    }
  }

  // Recursively convert objects with all-integer keys to actual arrays
  function convertIntKeysToArrays(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map(convertIntKeysToArrays);
    }
    const keys = Object.keys(obj);
    if (keys.length > 0 && keys.every(k => !isNaN(Number(k)))) {
      const arr = [];
      for (const k of keys) {
        arr[Number(k)] = convertIntKeysToArrays(obj[k]);
      }
      return arr;
    }
    const newObj = {};
    for (const key in obj) {
      newObj[key] = convertIntKeysToArrays(obj[key]);
    }
    return newObj;
  }

  return convertIntKeysToArrays(result);
}

/**
 * Single item translation using Google's Client API.
 */
async function translateText(text, targetLang) {
  const url = `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
  
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  };

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`Google Translate API returned status ${response.status}`);
  }
  const data = await response.json();
  if (!data || !data[0]) {
    throw new Error('Invalid response format from Google Translate API');
  }
  
  const translatedText = data[0].map(segment => segment[0]).join('');
  return translatedText;
}

/**
 * Single item translation with retry & exponential backoff.
 */
async function translateTextWithRetry(text, targetLang, retries = 3, delayMs = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await translateText(text, targetLang);
    } catch (err) {
      if (attempt === retries) {
        throw err;
      }
      console.warn(`Translation attempt ${attempt} failed for language "${targetLang}". Retrying in ${delayMs}ms... Error: ${err.message}`);
      await delay(delayMs);
      delayMs *= 2;
    }
  }
}

/**
 * Helper to determine if a string is a translation error string.
 */
function isErrorString(str) {
  if (typeof str !== 'string') return false;
  const lower = str.toLowerCase();
  return lower.includes('translation error') || lower.includes('[error]') || lower === 'error';
}

/**
 * Helper to check if a value needs translation.
 */
function needsTranslation(targetVal, sourceVal) {
  if (typeof sourceVal !== 'string') return false;
  if (targetVal === undefined || targetVal === null || targetVal === '') return true;
  if (isErrorString(targetVal)) return true;
  return false;
}

// 1. Get locales list from utils.ts dynamically
let targetLanguages = [];
try {
  const utilsContent = fs.readFileSync(utilsPath, 'utf8');
  const localesMatch = utilsContent.match(/export const LOCALES = \[(.*?)\]/s);
  if (localesMatch) {
    targetLanguages = localesMatch[1]
      .split(',')
      .map(s => s.replace(/['"\s]/g, '').trim())
      .filter(s => s && s !== 'en');
  }
} catch (err) {
  console.error('Failed to parse locales from utils.ts. Error:', err.message);
}

if (targetLanguages.length === 0) {
  // Robust fallback to current list in case of parsing errors
  targetLanguages = ['hi', 'es', 'ru', 'fr', 'de', 'it', 'pt', 'bn', 'ja', 'ko', 'ms', 'pl', 'id', 'ar', 'bg', 'tr', 'sv'];
}

console.log(`Discovered target languages to translate: ${targetLanguages.join(', ')}`);

// 2. Discover English source files in localesDir matching en*.json (but not shared.json)
const files = fs.readdirSync(localesDir);
const enFiles = files.filter(f => f.startsWith('en') && f.endsWith('.json') && f !== 'shared.json');

console.log(`Discovered source English files: ${enFiles.join(', ')}`);

// 3. Main execution loop
async function run() {
  for (const enFileName of enFiles) {
    const enFilePath = path.join(localesDir, enFileName);
    console.log(`\nProcessing source file: ${enFileName}`);
    
    let sourceData;
    try {
      sourceData = JSON.parse(fs.readFileSync(enFilePath, 'utf8'));
    } catch (err) {
      console.error(`Failed to read/parse source file ${enFileName}:`, err.message);
      continue;
    }

    const sourceFlattened = flattenObject(sourceData);

    for (const targetLang of targetLanguages) {
      const targetFileName = enFileName.replace(/^en/, targetLang);
      const targetFilePath = path.join(localesDir, targetFileName);
      
      let targetData = {};
      let targetExists = false;
      if (fs.existsSync(targetFilePath)) {
        try {
          targetData = JSON.parse(fs.readFileSync(targetFilePath, 'utf8'));
          targetExists = true;
        } catch (err) {
          console.warn(`Target file ${targetFileName} exists but couldn't be parsed. Recreating...`);
        }
      }

      const targetFlattened = targetExists ? flattenObject(targetData) : {};
      const updatedFlattened = { ...targetFlattened };
      
      const keysToTranslate = [];

      for (const key in sourceFlattened) {
        const sourceVal = sourceFlattened[key];
        const targetVal = targetFlattened[key];

        if (typeof sourceVal !== 'string') {
          // Copy non-string values directly
          updatedFlattened[key] = sourceVal;
        } else if (needsTranslation(targetVal, sourceVal)) {
          keysToTranslate.push({ key, text: sourceVal });
        } else {
          // Keep existing valid translation
          updatedFlattened[key] = targetVal;
        }
      }

      if (keysToTranslate.length === 0) {
        console.log(`[${targetLang}] No new keys to translate for ${targetFileName}.`);
        // Save anyway to ensure un-flattened integrity and copying non-strings
        const finalData = unflattenObject(updatedFlattened);
        fs.writeFileSync(targetFilePath, JSON.stringify(finalData, null, 2), 'utf8');
        continue;
      }

      console.log(`[${targetLang}] Translating ${keysToTranslate.length} keys for ${targetFileName}...`);

      // Chunk into batches of BATCH_SIZE
      const chunks = [];
      for (let i = 0; i < keysToTranslate.length; i += BATCH_SIZE) {
        chunks.push(keysToTranslate.slice(i, i + BATCH_SIZE));
      }

      for (let chunkIdx = 0; chunkIdx < chunks.length; chunkIdx++) {
        const chunk = chunks[chunkIdx];
        
        // Add random safe delay between translation calls (40ms - 100ms)
        await delay(getRandomDelay(40, 100));

        const joinedText = chunk.map(item => item.text).join(DELIMITER);
        let success = false;

        try {
          const translatedJoined = await translateTextWithRetry(joinedText, targetLang);
          const translatedItems = translatedJoined.split(SPLIT_REGEX).map(item => item.trim());

          if (translatedItems.length === chunk.length) {
            success = true;
            for (let i = 0; i < chunk.length; i++) {
              updatedFlattened[chunk[i].key] = translatedItems[i];
            }
          } else {
            console.warn(`[${targetLang}] Batch size mismatch in chunk ${chunkIdx + 1}/${chunks.length} (got ${translatedItems.length}, expected ${chunk.length}). Falling back to individual translation...`);
          }
        } catch (err) {
          console.warn(`[${targetLang}] Batch translation error in chunk ${chunkIdx + 1}/${chunks.length}: ${err.message}. Falling back to individual translation...`);
        }

        if (!success) {
          for (const item of chunk) {
            await delay(getRandomDelay(40, 100));
            try {
              const singleTranslation = await translateTextWithRetry(item.text, targetLang);
              updatedFlattened[item.key] = singleTranslation.trim();
            } catch (err) {
              console.error(`[${targetLang}] Failed to translate key "${item.key}": ${err.message}`);
              updatedFlattened[item.key] = "Translation Error";
            }
          }
        }
      }

      // Reconstruct and save
      const finalData = unflattenObject(updatedFlattened);
      fs.writeFileSync(targetFilePath, JSON.stringify(finalData, null, 2), 'utf8');
      console.log(`[${targetLang}] Successfully updated ${targetFileName}.`);
    }
  }

  console.log('\nAll localization files processed successfully!');
}

run().catch(err => {
  console.error('Fatal error during translation process:', err);
});
