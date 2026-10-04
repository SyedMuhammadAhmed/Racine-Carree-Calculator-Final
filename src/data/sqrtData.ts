// Comprehensive Square Root Reference Data
export interface SqrtRefRow {
  n: number;
  rootFormatted: string;
  simplified: string;
  isPerfect: boolean;
}

export const REFERENCE_TABLE_50: SqrtRefRow[] = [
  { n: 1, rootFormatted: "1.0000", simplified: "1", isPerfect: true },
  { n: 2, rootFormatted: "1.4142", simplified: "√2", isPerfect: false },
  { n: 3, rootFormatted: "1.7321", simplified: "√3", isPerfect: false },
  { n: 4, rootFormatted: "2.0000", simplified: "2", isPerfect: true },
  { n: 5, rootFormatted: "2.2361", simplified: "√5", isPerfect: false },
  { n: 6, rootFormatted: "2.4495", simplified: "√6", isPerfect: false },
  { n: 7, rootFormatted: "2.6458", simplified: "√7", isPerfect: false },
  { n: 8, rootFormatted: "2.8284", simplified: "2√2", isPerfect: false },
  { n: 9, rootFormatted: "3.0000", simplified: "3", isPerfect: true },
  { n: 10, rootFormatted: "3.1623", simplified: "√10", isPerfect: false },
  { n: 11, rootFormatted: "3.3166", simplified: "√11", isPerfect: false },
  { n: 12, rootFormatted: "3.4641", simplified: "2√3", isPerfect: false },
  { n: 13, rootFormatted: "3.6056", simplified: "√13", isPerfect: false },
  { n: 14, rootFormatted: "3.7417", simplified: "√14", isPerfect: false },
  { n: 15, rootFormatted: "3.8730", simplified: "√15", isPerfect: false },
  { n: 16, rootFormatted: "4.0000", simplified: "4", isPerfect: true },
  { n: 17, rootFormatted: "4.1231", simplified: "√17", isPerfect: false },
  { n: 18, rootFormatted: "4.2426", simplified: "3√2", isPerfect: false },
  { n: 19, rootFormatted: "4.3589", simplified: "√19", isPerfect: false },
  { n: 20, rootFormatted: "4.4721", simplified: "2√5", isPerfect: false },
  { n: 21, rootFormatted: "4.5826", simplified: "√21", isPerfect: false },
  { n: 22, rootFormatted: "4.6904", simplified: "√22", isPerfect: false },
  { n: 23, rootFormatted: "4.7958", simplified: "√23", isPerfect: false },
  { n: 24, rootFormatted: "4.8990", simplified: "2√6", isPerfect: false },
  { n: 25, rootFormatted: "5.0000", simplified: "5", isPerfect: true },
  { n: 26, rootFormatted: "5.0990", simplified: "√26", isPerfect: false },
  { n: 27, rootFormatted: "5.1962", simplified: "3√3", isPerfect: false },
  { n: 28, rootFormatted: "5.2915", simplified: "2√7", isPerfect: false },
  { n: 29, rootFormatted: "5.3852", simplified: "√29", isPerfect: false },
  { n: 30, rootFormatted: "5.4772", simplified: "√30", isPerfect: false },
  { n: 31, rootFormatted: "5.5678", simplified: "√31", isPerfect: false },
  { n: 32, rootFormatted: "5.6569", simplified: "4√2", isPerfect: false },
  { n: 33, rootFormatted: "5.7446", simplified: "√33", isPerfect: false },
  { n: 34, rootFormatted: "5.8310", simplified: "√34", isPerfect: false },
  { n: 35, rootFormatted: "5.9161", simplified: "√35", isPerfect: false },
  { n: 36, rootFormatted: "6.0000", simplified: "6", isPerfect: true },
  { n: 37, rootFormatted: "6.0828", simplified: "√37", isPerfect: false },
  { n: 38, rootFormatted: "6.1644", simplified: "√38", isPerfect: false },
  { n: 39, rootFormatted: "6.2450", simplified: "√39", isPerfect: false },
  { n: 40, rootFormatted: "6.3246", simplified: "2√10", isPerfect: false },
  { n: 41, rootFormatted: "6.4031", simplified: "√41", isPerfect: false },
  { n: 42, rootFormatted: "6.4807", simplified: "√42", isPerfect: false },
  { n: 43, rootFormatted: "6.5574", simplified: "√43", isPerfect: false },
  { n: 44, rootFormatted: "6.6332", simplified: "2√11", isPerfect: false },
  { n: 45, rootFormatted: "6.7082", simplified: "3√5", isPerfect: false },
  { n: 46, rootFormatted: "6.7823", simplified: "√46", isPerfect: false },
  { n: 47, rootFormatted: "6.8557", simplified: "√47", isPerfect: false },
  { n: 48, rootFormatted: "6.9282", simplified: "4√3", isPerfect: false },
  { n: 49, rootFormatted: "7.0000", simplified: "7", isPerfect: true },
  { n: 50, rootFormatted: "7.0711", simplified: "5√2", isPerfect: false }
];

export interface PerfectSquareRow {
  n: number;
  square: number;
  root: number;
}

export const PERFECT_SQUARES_20: PerfectSquareRow[] = [
  { n: 1, square: 1, root: 1 },
  { n: 2, square: 4, root: 2 },
  { n: 3, square: 9, root: 3 },
  { n: 4, square: 16, root: 4 },
  { n: 5, square: 25, root: 5 },
  { n: 6, square: 36, root: 6 },
  { n: 7, square: 49, root: 7 },
  { n: 8, square: 64, root: 8 },
  { n: 9, square: 81, root: 9 },
  { n: 10, square: 100, root: 10 },
  { n: 11, square: 121, root: 11 },
  { n: 12, square: 144, root: 12 },
  { n: 13, square: 169, root: 13 },
  { n: 14, square: 196, root: 14 },
  { n: 15, square: 225, root: 15 },
  { n: 16, square: 256, root: 16 },
  { n: 17, square: 289, root: 17 },
  { n: 18, square: 324, root: 18 },
  { n: 19, square: 361, root: 19 },
  { n: 20, square: 400, root: 20 }
];

export interface SimplificationRow {
  original: string;
  factored: string;
  simplified: string;
  why: string;
}

export const SIMPLIFICATION_11: SimplificationRow[] = [
  { original: "√8", factored: "√(4 × 2)", simplified: "2√2", why: "8 = 4 × 2, √4 = 2" },
  { original: "√12", factored: "√(4 × 3)", simplified: "2√3", why: "12 = 4 × 3, √4 = 2" },
  { original: "√18", factored: "√(9 × 2)", simplified: "3√2", why: "18 = 9 × 2, √9 = 3" },
  { original: "√20", factored: "√(4 × 5)", simplified: "2√5", why: "20 = 4 × 5, √4 = 2" },
  { original: "√32", factored: "√(16 × 2)", simplified: "4√2", why: "32 = 16 × 2, √16 = 4" },
  { original: "√45", factored: "√(9 × 5)", simplified: "3√5", why: "45 = 9 × 5, √9 = 3" },
  { original: "√50", factored: "√(25 × 2)", simplified: "5√2", why: "50 = 25 × 2, √25 = 5" },
  { original: "√72", factored: "√(36 × 2)", simplified: "6√2", why: "72 = 36 × 2, √36 = 6" },
  { original: "√75", factored: "√(25 × 3)", simplified: "5√3", why: "75 = 25 × 3, √25 = 5" },
  { original: "√98", factored: "√(49 × 2)", simplified: "7√2", why: "98 = 49 × 2, √49 = 7" },
  { original: "√200", factored: "√(100 × 2)", simplified: "10√2", why: "200 = 100 × 2, √100 = 10" }
];

export const IRRATIONAL_EXAMPLES = [
  { expr: "√2", val: "1.41421356..." },
  { expr: "√3", val: "1.73205080..." },
  { expr: "√5", val: "2.23606797..." },
  { expr: "√7", val: "2.64575131..." },
  { expr: "√10", val: "3.16227766..." }
];

export const DECIMAL_EXAMPLES = [
  { expr: "√0.25", val: "0.5", reason: "0.5 × 0.5 = 0.25" },
  { expr: "√0.49", val: "0.7", reason: "0.7 × 0.7 = 0.49" },
  { expr: "√2.25", val: "1.5", reason: "1.5 × 1.5 = 2.25" }
];

export const FRACTION_EXAMPLES = [
  { expr: "√(1/4)", step: "√1 / √4", val: "1/2" },
  { expr: "√(9/16)", step: "√9 / √16", val: "3/4" },
  { expr: "√(25/49)", step: "√25 / √49", val: "5/7" }
];

export const NEGATIVE_EXAMPLES = [
  { expr: "√(-1)", val: "i", reason: "Definition of imaginary unit i" },
  { expr: "√(-4)", val: "2i", reason: "√4 × √(-1) = 2i" },
  { expr: "√(-9)", val: "3i", reason: "√9 × √(-1) = 3i" },
  { expr: "√(-16)", val: "4i", reason: "√16 × √(-1) = 4i" },
  { expr: "√(-81)", val: "9i", reason: "√81 × √(-1) = 9i" }
];
