import type { HomeBoilerplate } from './homeBoilerplate';

export const HOME_BOILERPLATE_PART2: Record<string, HomeBoilerplate> = {
  // 7. Russian (ru)
  ru: {
    leadTitle: "Калькулятор квадратного корня (Racine Carree) : Онлайн бесплатно",
    leadP1: "Используйте наш бесплатный калькулятор квадратного корня, чтобы мгновенно извлечь корень из любого числа. Вводите положительные числа, дроби, десятичные дроби или отрицательные числа и получайте точный результат, упрощенный корень и пошаговое решение за секунды. 100% бесплатно.",
    leadP2: "Ищете ли вы «racine carree calculator», «калькулятор квадратного корня» или «square root calculator» — вы нашли идеальный математический инструмент с полными объяснениями.",
    badgeInstant: "Точные десятичные дроби",
    badgeRadical: "Упрощенная форма корня",
    badgeSteps: "Пошаговый разбор",
    badgeFree: "100% Бесплатно и без ограничений",
    quickTryLabel: "Быстрые примеры:",

    s1Eyebrow: "Определение и смысл",
    s1Title: "Что такое квадратный корень (Racine Carrée)?",
    s1P1: "«Racine carrée» — французское обозначение квадратного корня. Это одно из фундаментальных математических понятий, ежедневно используемое школьниками, студентами и инженерами по всему миру.",
    s1P2: "Квадратный корень — это число, которое при умножении само на себя дает исходное число. Если умножить 7 на 7, получится 49. Значит, квадратный корень из 49 равен 7. Это операция, обратная возведению в квадрат.",
    s1P3: "Математически квадратным корнем из x называется число y такое, что y × y = x (или y² = x).",
    s1Cards: [
      { expr: "√4 = 2", reason: "так как 2 × 2 = 4" },
      { expr: "√9 = 3", reason: "так как 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "так как 4 × 4 = 16" },
      { expr: "√25 = 5", reason: "так как 5 × 5 = 25" },
      { expr: "√100 = 10", reason: "так как 10 × 10 = 100" }
    ],
    s1Caption: "Геометрический смысл: нахождение длины стороны квадрата по его площади",
    s1AnatomyTitle: "Анатомия выражения с корнем",
    s1RadicalSymbol: "Знак радикала (√)",
    s1RadicalSymbolDesc: "Математический символ извлечения корня",
    s1Radicand: "Подкоренное число (Радиканд)",
    s1RadicandDesc: "Число под знаком корня (например, 49 в √49)",
    s1Root: "Корень (Результат)",
    s1RootDesc: "Итоговый ответ (например, 7)",

    s2Eyebrow: "Инструкция",
    s2Title: "Как пользоваться калькулятором корней",
    s2Intro: "Получить решение можно всего за три простых шага:",
    s2Steps: [
      { title: "Введите число", text: "Укажите целое, десятичное, дробное или отрицательное число в поле ввода." },
      { title: "Нажмите «Рассчитать»", text: "Нажмите кнопку, чтобы мгновенно выполнить расчет." },
      { title: "Посмотрите ответ", text: "Калькулятор выведет точное десятичное значение, упрощенный радикал (напр. √72 = 6√2) и шаги." }
    ],
    s2Conclusion: "Вам не нужно помнить формулы наизусть: наш инструмент выполнит все вычисления за вас.",

    s3Eyebrow: "Обозначения и степени",
    s3Title: "Обозначение квадратного корня: символ √ и x^(1/2)",
    s3Intro: "Символ √ называется радикалом. Запись √36 ставит вопрос: какое число, умноженное само на себя, дает 36? Ответ: 6.",
    s3Cards: [
      { expr: "√", reason: "Знак извлечения корня" },
      { expr: "36", reason: "Подкоренное число" },
      { expr: "6", reason: "Арифметический корень" }
    ],
    s3P1: "Каждое выражение состоит из трех частей: знака радикала, подкоренного числа и корня.",
    s3P2: "Квадратный корень также можно записывать в виде дробной степени:",
    s3P3: "Обе записи математически равнозначны. В языках программирования широко используется запись x^(1/2).",
    s3Caption: "Эквивалентность радикала √x и дробной степени x^(1/2)",
    s3ToggleRadical: "Радикал (√x)",
    s3ToggleExponent: "Степень (x^½)",
    s3ToggleCode: "Код / Синтаксис",

    s4Eyebrow: "Формула",
    s4Title: "Какова формула квадратного корня?",
    s4Intro: "Квадратный корень определяется через фундаментальное математическое соотношение:",
    s4P1: "Простыми словами: полученное число при умножении само на себя обязано вернуть исходное значение.",
    s4PrincipalTitle: "Арифметический (главный) корень",
    s4PrincipalText: "Главный арифметический корень — это неотрицательное число. Хотя и 5, и -5 в квадрате дают 25, по международному стандарту √25 = 5.",

    s5Eyebrow: "Свойства корней",
    s5Title: "Пять главных свойств квадратного корня",
    s5Intro: "Эти правила позволяют быстро упрощать и преобразовывать алгебраические выражения:",
    s5Laws: [
      {
        name: "1. Правило произведения",
        subtitle: "√(a × b) = √a × √b (для a ≥ 0, b ≥ 0)",
        example: "Пример: √(4 × 9) = √4 × √9 = 2 × 3 = 6. Напрямую: √36 = 6.",
        explanation: "Позволяет выносить множители из-под корня (например, √72 = √(36 × 2) = 6√2)."
      },
      {
        name: "2. Правило частного",
        subtitle: "√(a / b) = √a / √b (для a ≥ 0, b > 0)",
        example: "Пример: √(16/4) = √16 / √4 = 4 / 2 = 2. Напрямую: √4 = 2.",
        explanation: "Позволяет извлекать корень из дроби отдельно для числителя и знаменателя."
      },
      {
        name: "3. Правило степени",
        subtitle: "√(a²) = |a| (модуль числа a)",
        example: "Пример: √(7²) = √49 = 7. Квадрат и корень взаимно уничтожаются.",
        explanation: "Возведение в квадрат и извлечение корня возвращают исходное число по модулю."
      },
      {
        name: "4. Самоумножение",
        subtitle: "√a × √a = a",
        example: "Пример: √13 × √13 = 13. √5 × √5 = 5.",
        explanation: "Умножение корня на самого себя снимает радикал. Важно для избавления от иррациональности в знаменателе (1/√5 = √5/5)."
      },
      {
        name: "5. Вложенный корень",
        subtitle: "√(√a) = a^(1/4) (корень четвертой степени)",
        example: "Пример: √(√16) = √4 = 2. И 16^(1/4) = 2.",
        explanation: "Корень из корня дает корень 4-й степени из исходного числа."
      }
    ],

    s6Eyebrow: "Методы вычисления",
    s6Title: "Как извлечь квадратный корень: 4 метода",
    s6Intro: "В зависимости от задачи используются 4 основных метода:",
    s6M1Title: "Метод 1: Наш онлайн-калькулятор (Самый быстрый)",
    s6M1Text: "Введите число вверху и нажмите кнопку для получения точного ответа.",
    s6M1Action: "Перейти к калькулятору",
    s6M2Title: "Метод 2: Разложение на простые множители",
    s6M2Intro: "Идеально подходит для точных квадратов и целых чисел.",
    s6M2ExTitle: "Примеры факторизации",
    s6M2Steps: [
      "1. Разложите число на простые множители",
      "2. Сгруппируйте одинаковые множители парами",
      "3. Вынесите по одному числу из каждой пары наружу",
      "4. Перемножьте вынесенные числа"
    ],
    s6M3Title: "Метод 3: Столбиком («Уголком»)",
    s6M3Intro: "Классический ручной алгоритм для нахождения корня с любой точностью.",
    s6M3Steps: [
      "1. Разбейте число на грани по две цифры от запятой",
      "2. Подберите наибольший квадрат для первой грани",
      "3. Вычтите, снесите следующую пару цифр и удвойте текущий корень",
      "4. Подберите следующую цифру и повторяйте шаги"
    ],
    s6M3Text: "Позволяет точно извлекать корни вручную без калькулятора.",
    s6M4Title: "Метод 4: Оценка и метод приближений",
    s6M4Intro: "Для быстрого вычисления в уме:",
    s6M4ExTitle: "Пример: Оценка √50",
    s6M4Steps: [
      "1. Найдите соседние квадраты: 49 < 50 < 64 (значит, 7 < √50 < 8)",
      "2. Число 50 очень близко к 49, поэтому ответ чуть больше 7",
      "3. Приближенный ответ: ~7,07 (точное значение: 7,0711...)"
    ],
    s6M4Note: "Этот принцип лежит в основе вавилонского метода (метод Герона / Ньютона).",

    s7Eyebrow: "Точные квадраты",
    s7Title: "Точные квадраты: определение и польза",
    s7Intro: "Точный квадрат — это целое число, квадратный корень из которого является целым числом.",
    s7ThNumber: "Число (n)",
    s7ThSquare: "Квадрат (n²)",
    s7ThRoot: "Корень (√n²)",
    s7Conclusion: "Знание первых 20 квадратов чисел значительно ускоряет устный счет.",
    s7Caption: "Геометрическая модель: площади квадратов n² со стороной n",

    s8Eyebrow: "Иррациональные числа",
    s8Title: "Неточные квадраты и иррациональные корни",
    s8Intro: "Если число не является точным квадратом, его корень — иррациональное число с бесконечной непериодической десятичной дробью.",
    s8Text: "Эти числа нельзя представить в виде обыкновенной дроби (как и число π).",
    s8CalcNote: "Наш калькулятор вычисляет их с максимальной точностью и выводит упрощенный радикал.",

    s9Eyebrow: "Дроби и десятичные числа",
    s9Title: "Квадратные корни из десятичных чисел и дробей",
    s9Intro: "Извлечение корня из дробей подчиняется стандартным алгебраическим законам:",
    s9DecimalsTitle: "Корни из десятичных дробей",
    s9DecimalsIntro: "Конечные десятичные дроби вычисляются с учетом знаков после запятой:",
    s9FractionsTitle: "Корни из обыкновенных дробей",
    s9FractionsIntro: "По правилу частного извлекайте корень отдельно из числителя и знаменателя:",
    s9Conclusion: "Проверьте любую дробь на калькуляторе выше для проверки вычислений.",

    s10Eyebrow: "Комплексные числа",
    s10Title: "Корни из отрицательных чисел и мнимая единица i",
    s10P1: "Среди действительных чисел отрицательные числа корней не имеют, так как квадрат любого действительного числа положителен.",
    s10P2: "Для этого вводится мнимая единица i (где i² = -1). Формула: √(-a) = √a × i для любого a > 0.",
    s10P3: "Эти числа образуют систему комплексных чисел (a + bi), необходимую в электротехнике, квантовой физике и обработке сигналов.",
    s10ExTitle: "Примеры с отрицательными числами",
    s10ExStep: "√(-1) = i, √(-4) = 2i, √(-9) = 3i, √(-16) = 4i, √(-81) = 9i",
    s10Conclusion: "Калькулятор автоматически выводит мнимый результат для отрицательных чисел.",

    s11Eyebrow: "Взаимно обратные действия",
    s11Title: "Разница между возведением в квадрат и извлечением корня",
    s11Intro: "Возведение в квадрат и извлечение корня — взаимно обратные действия, как сложение и вычитание.",
    s11ThOp: "Операция",
    s11ThWhat: "Что делает",
    s11ThEx: "Пример",
    s11RowSquare: "Возведение в квадрат (x²)",
    s11RowSquareDesc: "Умножает число само на себя",
    s11RowRoot: "Извлечение корня (√x)",
    s11RowRootDesc: "Находит число, которое при умножении на себя дает x",
    s11Inverse: "Одно действие отменяет другое: √(8²) = √64 = 8, и (√64)² = 8² = 64.",
    s11Absolute: "Поскольку возведение в квадрат стирает знаки, действует правило: √(a²) = |a|.",

    s12Eyebrow: "Справочные таблицы",
    s12Title: "Полная таблица квадратных корней от 1 до 50",
    s12Intro: "Удобная таблица от 1 до 50 с десятичными значениями, упрощенными радикалами и пометками точных квадратов.",
    s12ChartLinkText: "Нужна распечатка до 100 или настраиваемый диапазон? Используйте наш Генератор Таблиц.",
    s12ScrollHint: "Прокрутите вниз для просмотра всех 50 значений ↓",
    s12ColNumber: "Число (n)",
    s12ColRoot: "Десятичное (√n)",
    s12ColSimplified: "Упрощенный корень",
    s12ColType: "Тип",
    s12BadgePerfect: "Точный квадрат",
    s12BadgeIrrational: "Иррациональный",
    s12FilterAll: "Все числа (1–50)",
    s12FilterPerfect: "Только точные квадраты",
    s12FilterIrrational: "Только иррациональные",
    s12SearchPlaceholder: "Поиск числа или корня (напр. 25, √2)...",

    s13Eyebrow: "Упрощение радикалов",
    s13Title: "Примеры упрощения квадратных корней",
    s13Intro: "Упростить корень — значит вынести максимальный точный квадрат из-под знака радикала:",
    s13ThExpr: "Исходный корень",
    s13ThForm: "Упрощенная форма",
    s13ThWhy: "Разложение и обоснование",
    s13Conclusion: "Правило произведения √(a × b) = √a × √b позволяет выносить целые множители.",

    s14Eyebrow: "Практическое применение",
    s14Title: "Где применяются квадратные корни в реальной жизни",
    s14Intro: "Квадратные корни окружают нас в науке, инженерии и быту:",
    s14Apps: [
      { title: "Строительство и архитектура", text: "Теорема Пифагора (a² + b² = c²) для расчета диагоналей стен и стропил (напр. √(3² + 4²) = 5 м)." },
      { title: "Финансы и инвестиции", text: "Стандартное отклонение портфеля как мера риска и волатильности — это корень из дисперсии." },
      { title: "Физика и техника", text: "Скорость свободного падения (v = √(2gh)), колебания маятника и расчеты цепей переменного тока." },
      { title: "IT и 3D-графика", text: "Вычисление евклидова расстояния в играх, обнаружение столкновений и сложность алгоритмов √n." },
      { title: "Повседневные расчеты", text: "Определение длины комнаты по ее площади: комната 64 м² имеет стены длиной √64 = 8 м." }
    ],

    s15Eyebrow: "Частые вопросы",
    s15Title: "Часто задаваемые вопросы (FAQ)",
    s15Faqs: [
      {
        question: "Как пользоваться калькулятором квадратного корня?",
        answer: "Введите число в поле вверху и нажмите «Рассчитать». Вы моментально получите десятичный результат, упрощенный радикал и шаги решения."
      },
      {
        question: "Что означает термин «racine carrée»?",
        answer: "«Racine carrée» — французское название квадратного корня. Означает число, которое при умножении на себя дает исходное значение."
      },
      {
        question: "Калькулятор поддерживает отрицательные числа?",
        answer: "Да. Для отрицательных чисел калькулятор находит комплексный результат с мнимой единицей i (например, √(-16) = 4i)."
      },
      {
        question: "В чем разница между квадратным и кубическим корнем?",
        answer: "Квадратный корень ищет число, умножаемое дважды (степень 2). Кубический — число, умножаемое трижды (степень 3)."
      },
      {
        question: "Как извлечь корень без калькулятора?",
        answer: "Разложением на множители, методом столбиком («уголком») или методом приближений Ньютона."
      },
      {
        question: "Что такое точный квадрат?",
        answer: "Целое число, корень из которого также является целым числом (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        question: "Все ли корни являются рациональными числами?",
        answer: "Нет. Только корни из точных квадратов рациональны. Корни из остальных чисел иррациональны."
      },
      {
        question: "Калькулятор бесплатный?",
        answer: "Да, инструмент на 100% бесплатен, не требует регистрации и доступен онлайн."
      },
      {
        question: "Можно ли извлекать корни из дробей?",
        answer: "Да, вы можете вводить десятичные и обыкновенные дроби."
      },
      {
        question: "Что такое арифметический корень?",
        answer: "Это неотрицательное значение квадратного корня, принятое в качестве стандарта для символа √."
      }
    ],

    s16Eyebrow: "Итоги",
    s16Title: "Краткие выводы",
    s16BoxTitle: "Главное правило",
    s16BoxText: "Квадратный корень отвечает на один вопрос: какое число при умножении само на себя дает это значение? Используйте наш калькулятор для быстрых и точных вычислений.",

    quickCalcLabel: "Быстрый расчет",
    quickCalcSublabel: "Нажмите на число для моментального ответа"
  },

  // 8. Polish (pl)
  pl: {
    leadTitle: "Kalkulator Pierwiastka Kwadratowego (Racine Carree) : Za Darmo Online",
    leadP1: "Skorzystaj z darmowego kalkulatora pierwiastków kwadratowych, aby błyskawicznie obliczyć pierwiastek z dowolnej liczby. Wpisz liczby całkowite, dziesiętne, ułamki lub liczby ujemne i otrzymaj dokładny wynik dziesiętny, postać uproszczoną oraz kroki rozwiązania. 100% za darmo i bez limitów.",
    leadP2: "Niezależnie od tego, czy szukasz «racine carree calculator», «kalkulator pierwiastków» czy «square root calculator» — znajdziesz tu kompletne narzędzie matematyczne.",
    badgeInstant: "Dokładne miejsca dziesiętne",
    badgeRadical: "Uproszczona postać pierwiastka",
    badgeSteps: "Kroki rozwiązania",
    badgeFree: "100% Darmowy i bez limitów",
    quickTryLabel: "Szybkie przykłady:",

    s1Eyebrow: "Definicja i pojęcie",
    s1Title: "Czym jest pierwiastek kwadratowy (Racine Carrée)?",
    s1P1: "«Racine carrée» to francuskie określenie pierwiastka kwadratowego. Jest to jedno z najczęściej wyszukiwanych pojęć matematycznych na świecie.",
    s1P2: "Pierwiastek kwadratowy z danej liczby to wartość, która pomnożona przez samą siebie daje tę liczbę. Jeśli pomnożysz 7 przez 7, otrzymasz 49. Zatem pierwiastek kwadratowy z 49 to 7. Jest to operacja odwrotna do podnoszenia do kwadratu.",
    s1P3: "Matematycznie pierwiastkiem kwadratowym z x jest liczba y taka, że y × y = x (lub y² = x).",
    s1Cards: [
      { expr: "√4 = 2", reason: "ponieważ 2 × 2 = 4" },
      { expr: "√9 = 3", reason: "ponieważ 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "ponieważ 4 × 4 = 16" },
      { expr: "√25 = 5", reason: "ponieważ 5 × 5 = 25" },
      { expr: "√100 = 10", reason: "ponieważ 10 × 10 = 100" }
    ],
    s1Caption: "Wizualizacja: Znajdowanie boku kwadratu na podstawie jego pola",
    s1AnatomyTitle: "Budowa wyrażenia pierwiastkowego",
    s1RadicalSymbol: "Symbol pierwiastka (√)",
    s1RadicalSymbolDesc: "Znak operacji pierwiastkowania",
    s1Radicand: "Liczba podpierwiastkowa",
    s1RadicandDesc: "Wartość pod znakiem pierwiastka (np. 49 w √49)",
    s1Root: "Pierwiastek (Wynik)",
    s1RootDesc: "Obliczony wynik (np. 7)",

    s2Eyebrow: "Instrukcja",
    s2Title: "Jak używać kalkulatora pierwiastków",
    s2Intro: "Wystarczą trzy proste kroki:",
    s2Steps: [
      { title: "Wpisz liczbę", text: "Wprowadź liczbę całkowitą, ułamek lub liczbę ujemną w polu powyżej." },
      { title: "Kliknij Oblicz", text: "Naciśnij przycisk Oblicz, aby natychmiast przetworzyć dane." },
      { title: "Odczytaj wynik", text: "Kalkulator wyświetli wynik dziesiętny, postać uproszczoną (np. √72 = 6√2) i kroki." }
    ],
    s2Conclusion: "Nasz kalkulator wykonuje wszystkie skomplikowane operacje automatycznie.",

    s3Eyebrow: "Zapis i potęgi",
    s3Title: "Zapis pierwiastka kwadratowego: Symbol √ i x^(1/2)",
    s3Intro: "Znak √ oznacza pierwiastek kwadratowy. Zapis √36 stawia pytanie: Jaka liczba pomnożona przez samą siebie daje 36? Odpowiedź to 6.",
    s3Cards: [
      { expr: "√", reason: "Znak pierwiastka" },
      { expr: "36", reason: "Liczba podpierwiastkowa" },
      { expr: "6", reason: "Pierwiastek arytmetyczny" }
    ],
    s3P1: "Wyrażenie składa się ze znaku pierwiastka, liczby podpierwiastkowej oraz wartości pierwiastka.",
    s3P2: "Pierwiastek można zapisać również za pomocą wykładnika ułamkowego:",
    s3P3: "Oba zapisy są tożsame. Języki programowania powszechnie stosują zapis x^(1/2).",
    s3Caption: "Równoważność symbolu √x i potęgi ułamkowej x^(1/2)",
    s3ToggleRadical: "Pierwiastek (√x)",
    s3ToggleExponent: "Potęga (x^½)",
    s3ToggleCode: "Kod / Składnia",

    s4Eyebrow: "Wzór",
    s4Title: "Jaki jest wzór na pierwiastek kwadratowy?",
    s4Intro: "Pierwiastek kwadratowy definiuje relacja odwrotności:",
    s4P1: "Otrzymana liczba pomnożona przez samą siebie musi zwrócić liczbę wyjściową.",
    s4PrincipalTitle: "Pierwiastek arytmetyczny (główny)",
    s4PrincipalText: "Główny pierwiastek jest zawsze wartością nieujemną. Chociaż 5 i -5 podniesione do kwadratu dają 25, z definicji √25 = 5.",

    s5Eyebrow: "Własności pierwiastków",
    s5Title: "Pięć kluczowych własności pierwiastków kwadratowych",
    s5Intro: "Poniższe reguły ułatwiają upraszczanie wyrażeń w algebrze i geometrii:",
    s5Laws: [
      {
        name: "1. Pierwiastek z iloczynu",
        subtitle: "√(a × b) = √a × √b (dla a ≥ 0, b ≥ 0)",
        example: "Przykład: √(4 × 9) = √4 × √9 = 2 × 3 = 6. Bezpośrednio: √36 = 6.",
        explanation: "Umożliwia wyłączanie czynnika przed znak pierwiastka (np. √72 = 6√2)."
      },
      {
        name: "2. Pierwiastek z ilorazu",
        subtitle: "√(a / b) = √a / √b (dla a ≥ 0, b > 0)",
        example: "Przykład: √(16/4) = √16 / √4 = 4 / 2 = 2. Bezpośrednio: √4 = 2.",
        explanation: "Pozwala pierwiastkować licznik i mianownik ułamka osobno."
      },
      {
        name: "3. Pierwiastek z potęgi",
        subtitle: "√(a²) = |a| (wartość bezwzględna z a)",
        example: "Przykład: √(7²) = √49 = 7. Potęga i pierwiastek znoszą się.",
        explanation: "Podniesienie do kwadratu i spierwiastkowanie zwraca moduł liczby."
      },
      {
        name: "4. Samomnożenie",
        subtitle: "√a × √a = a",
        example: "Przykład: √13 × √13 = 13. √5 × √5 = 5.",
        explanation: "Mnożenie pierwiastka przez siebie usuwa znak pierwiastka (usuwanie niewymierności z mianownika: 1/√5 = √5/5)."
      },
      {
        name: "5. Pierwiastek z pierwiastka",
        subtitle: "√(√a) = a^(1/4) (pierwiastek czwartego stopnia)",
        example: "Przykład: √(√16) = √4 = 2. Oraz 16^(1/4) = 2.",
        explanation: "Daje pierwiastek czwartego stopnia z liczby podpierwiastkowej."
      }
    ],

    s6Eyebrow: "Metody obliczeń",
    s6Title: "Jak obliczyć pierwiastek kwadratowy: 4 metody",
    s6Intro: "Istnieją cztery sprawdzone sposoby wyznaczania pierwiastka:",
    s6M1Title: "Metoda 1: Nasz kalkulator online (Najszybsza)",
    s6M1Text: "Wpisz liczbę powyżej, aby natychmiast uzyskać dokładny wynik i postać uproszczoną.",
    s6M1Action: "Przejdź do kalkulatora",
    s6M2Title: "Metoda 2: Rozkład na czynniki pierwsze",
    s6M2Intro: "Świetna metoda dla liczb całkowitych i kwadratów doskonałych.",
    s6M2ExTitle: "Przykłady faktoryzacji",
    s6M2Steps: [
      "1. Rozłóż liczbę na czynniki pierwsze",
      "2. Połącz jednakowe czynniki w pary",
      "3. Wyciągnij po jednym czynniku z każdej pary przed pierwiastek",
      "4. Wymnóż czynniki wyciągnięte przed pierwiastek"
    ],
    s6M3Title: "Metoda 3: Metoda pisemna (ręczna)",
    s6M3Intro: "Systematyczny algorytm pisemny pozwalający uzyskać dowolną dokładność bez kalkulatora.",
    s6M3Steps: [
      "1. Podziel cyfry na grupy po dwie od przecinka",
      "2. Znajdź największy kwadrat mieszczący się w pierwszej grupie",
      "3. Odejmij, spisz kolejną parę i podwój dotychczasowy pierwiastek",
      "4. Dobierz kolejną cyfrę i powtarzaj kroki"
    ],
    s6M3Text: "Tradycyjny sposób ręcznego pierwiastkowania.",
    s6M4Title: "Metoda 4: Szacowanie w pamięci",
    s6M4Intro: "Przydatne do szybkiego szacowania w pamięci:",
    s6M4ExTitle: "Przykład: Szacowanie √50",
    s6M4Steps: [
      "1. Znajdź sąsiednie kwadraty: 49 < 50 < 64 (czyli 7 < √50 < 8)",
      "2. Ponieważ 50 leży blisko 49, √50 jest minimalnie powyżej 7",
      "3. Szacunek: ok. 7,07 (dokładnie: 7,0711...)"
    ],
    s6M4Note: "Podstawa metody babilońskiej (algorytmu Herona / Newtona).",

    s7Eyebrow: "Kwadraty doskonałe",
    s7Title: "Kwadraty doskonałe: czym są i dlaczego są ważne",
    s7Intro: "Kwadrat doskonały to liczba całkowita, której pierwiastek jest również liczbą całkowitą.",
    s7ThNumber: "Liczba (n)",
    s7ThSquare: "Kwadrat (n²)",
    s7ThRoot: "Pierwiastek (√n²)",
    s7Conclusion: "Zapamiętanie pierwszych 20 kwadratów znacznie ułatwia liczenie w pamięci.",
    s7Caption: "Modele geometryczne: kwadraty o boku n i powierzchni n²",

    s8Eyebrow: "Liczby niewymierne",
    s8Title: "Liczby niewymierne i pierwiastki",
    s8Intro: "Gdy liczba nie jest kwadratem doskonałym, jej pierwiastek jest liczbą niewymierną o nieskończonym rozwinięciu nieokresowym.",
    s8Text: "Nie da się ich przedstawić w postaci ułamka zwykłego (podobnie jak liczby π).",
    s8CalcNote: "Kalkulator wyświetla zarówno wartość dziesiętną, jak i uproszczony symbol pierwiastka.",

    s9Eyebrow: "Ułamki i dziesiętne",
    s9Title: "Pierwiastki z ułamków i liczb dziesiętnych",
    s9Intro: "Pierwiastkowanie działa na ułamkach zgodnie z prawami algebry:",
    s9DecimalsTitle: "Liczby dziesiętne",
    s9DecimalsIntro: "Ułamki dziesiętne oblicza się z uwzględnieniem miejsc po przecinku:",
    s9FractionsTitle: "Ułamki zwykłe",
    s9FractionsIntro: "Zgodnie z regułą ilorazu pierwiastkuj licznik i mianownik oddzielnie:",
    s9Conclusion: "Wpisz ułamek powyżej, aby zweryfikować swoje obliczenia.",

    s10Eyebrow: "Liczby zespolone",
    s10Title: "Pierwiastki z liczb ujemnych i jednostka urojona i",
    s10P1: "W zbiorze liczb rzeczywistych liczby ujemne nie mają pierwiastków kwadratowych.",
    s10P2: "W matematyce wyższej definiuje się jednostkę urojoną i (gdzie i² = -1). Wzór: √(-a) = √a × i dla a > 0.",
    s10P3: "Liczby te tworzą zbiór liczb zespolonych (a + bi), kluczowy w elektrotechnice i fizyce kwantowej.",
    s10ExTitle: "Przykłady liczb ujemnych",
    s10ExStep: "√(-1) = i, √(-4) = 2i, √(-9) = 3i, √(-16) = 4i, √(-81) = 9i",
    s10Conclusion: "Kalkulator automatycznie obsługuje liczby ujemne podając wynik urojony.",

    s11Eyebrow: "Działania odwrotne",
    s11Title: "Różnica między potęgowaniem do kwadratu a pierwiastkowaniem",
    s11Intro: "Podnoszenie do kwadratu i pierwiastkowanie to działania wzajemnie odwrotne.",
    s11ThOp: "Działanie",
    s11ThWhat: "Co robi",
    s11ThEx: "Przykład",
    s11RowSquare: "Podnoszenie do kwadratu (x²)",
    s11RowSquareDesc: "Mnoży liczbę przez samą siebie",
    s11RowRoot: "Pierwiastkowanie (√x)",
    s11RowRootDesc: "Szuka liczby, która podniesiona do kwadratu daje x",
    s11Inverse: "Działania te wzajemnie się znoszą: √(8²) = √64 = 8, oraz (√64)² = 8² = 64.",
    s11Absolute: "Wartość bezwzględna jest konieczna: √(a²) = |a|.",

    s12Eyebrow: "Tabele wartości",
    s12Title: "Kompletna tabela pierwiastków od 1 do 50",
    s12Intro: "Tabela wartości od 1 do 50 z wartościami dziesiętnymi i postaciami uproszczonymi.",
    s12ChartLinkText: "Potrzebujesz tabeli do 100 do wydruku? Sprawdź nasz Generator Tabeli.",
    s12ScrollHint: "Przewiń w dół, aby zobaczyć wszystkie 50 wartości ↓",
    s12ColNumber: "Liczba (n)",
    s12ColRoot: "Dziesiętny (√n)",
    s12ColSimplified: "Postać uproszczona",
    s12ColType: "Typ",
    s12BadgePerfect: "Kwadrat doskonały",
    s12BadgeIrrational: "Niewymierna",
    s12FilterAll: "Wszystkie liczby (1–50)",
    s12FilterPerfect: "Tylko kwadraty doskonałe",
    s12FilterIrrational: "Tylko niewymierne",
    s12SearchPlaceholder: "Szukaj liczby lub pierwiastka (np. 25, √2)...",

    s13Eyebrow: "Wyłączanie czynnika",
    s13Title: "Przykłady upraszczania pierwiastków",
    s13Intro: "Upraszczanie polega na wyłączeniu największego kwadratu doskonałego przed pierwiastek:",
    s13ThExpr: "Wyrażenie",
    s13ThForm: "Postać uproszczona",
    s13ThWhy: "Rozkład i uzasadnienie",
    s13Conclusion: "Reguła iloczynu pozwala wyciągać czynniki przed znak pierwiastka.",

    s14Eyebrow: "Zastosowania",
    s14Title: "Praktyczne zastosowania pierwiastków",
    s14Intro: "Pierwiastki kwadratowe są nieodzowne w nauce, technice i życiu:",
    s14Apps: [
      { title: "Budownictwo i architektura", text: "Twierdzenie Pitagorasa (a² + b² = c²) do wyznaczania przekątnych (np. √(3² + 4²) = 5 m)." },
      { title: "Finanse i inwestycje", text: "Odchylenie standardowe jako kluczowa miara ryzyka inwestycyjnego to pierwiastek z wariancji." },
      { title: "Fizyka i inżynieria", text: "Prędkość swobodnego spadania (v = √(2gh)), ruch wahadła i obwody prądu zmiennego." },
      { title: "Informatyka i grafika 3D", text: "Odległości euklidesowe, wykrywanie kolizji w grach i złożoność algorytmów √n." },
      { title: "Pomiary codzienne", text: "Obliczanie wymiarów pokoju z powierzchni: pokój 64 m² ma ściany o długości √64 = 8 m." }
    ],

    s15Eyebrow: "FAQ",
    s15Title: "Często zadawane pytania (FAQ)",
    s15Faqs: [
      {
        question: "Jak korzystać z kalkulatora pierwiastków?",
        answer: "Wpisz liczbę w pole u góry i kliknij Oblicz. Otrzymasz wynik dziesiętny, postać uproszczoną i rozkład na czynniki."
      },
      {
        question: "Co oznacza «racine carrée»?",
        answer: "«Racine carrée» to po francusku pierwiastek kwadratowy — liczba, która pomnożona przez siebie daje wartość początkową."
      },
      {
        question: "Czy kalkulator radzi sobie z liczbami ujemnymi?",
        answer: "Tak, zwraca wynik w liczbach zespolonych z jednostką urojoną i (np. √(-16) = 4i)."
      },
      {
        question: "Jaka jest różnica między pierwiastkiem kwadratowym a sześciennym?",
        answer: "Kwadratowy mnoży liczbę dwukrotnie (stopień 2), a sześcienny trzykrotnie (stopień 3)."
      },
      {
        question: "Jak obliczyć pierwiastek bez kalkulatora?",
        answer: "Rozkładem na czynniki pierwsze, metodą pisemną lub szacowaniem babilońskim."
      },
      {
        question: "Czym jest kwadrat doskonały?",
        answer: "Liczbą całkowitą, której pierwiastek jest liczbą całkowitą (np. 1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        question: "Czy wszystkie pierwiastki są wymierne?",
        answer: "Nie, tylko pierwiastki z kwadratów doskonałych są wymierne. Pozostałe to liczby niewymierne."
      },
      {
        question: "Czy ten kalkulator jest darmowy?",
        answer: "Tak, jest w 100% bezpłatny, bez rejestracji i limitów."
      },
      {
        question: "Czy można pierwiastkować ułamki?",
        answer: "Tak, obsługujemy liczby dziesiętne i ułamki."
      },
      {
        question: "Co to jest pierwiastek arytmetyczny?",
        answer: "Jest to nieujemna wartość pierwiastka, standardowo oznaczana symbolem √."
      }
    ],

    s16Eyebrow: "Podsumowanie",
    s16Title: "Podsumowanie i kluczowe wnioski",
    s16BoxTitle: "Główna zasada",
    s16BoxText: "Pierwiastek kwadratowy odpowiada na pytanie: jaka liczba pomnożona przez siebie daje tę wartość? Korzystaj z naszego darmowego kalkulatora, kiedy potrzebujesz szybkiego wyniku.",

    quickCalcLabel: "Szybkie obliczenie",
    quickCalcSublabel: "Kliknij liczbę, aby natychmiast zobaczyć wynik"
  },

  // 9. Swedish (sv)
  sv: {
    leadTitle: "Kvadratrotskalkylator (Racine Carree) : Gratis Online",
    leadP1: "Använd vår gratis kvadratrotskalkylator för att räkna ut kvadratroten ur vilket tal som helst direkt. Skriv in heltal, decimaltal, bråk eller negativa tal och få exakt decimalresultat, förenklad rotform och steg-för-steg-lösning på sekunder. 100% gratis utan gränser.",
    leadP2: "Oavsett om du sökte efter «racine carree calculator», «kvadratrotskalkylator» eller «square root calculator» har du kommit rätt.",
    badgeInstant: "Exakta decimaler",
    badgeRadical: "Förenklad rotform",
    badgeSteps: "Steg-för-steg-lösning",
    badgeFree: "100% Gratis och obegränsat",
    quickTryLabel: "Snabbexempel att testa:",

    s1Eyebrow: "Definition och begrepp",
    s1Title: "Vad är en kvadratrot (Racine Carrée)?",
    s1P1: "«Racine carrée» är den franska termen för kvadratrot. Det är ett grundläggande matematiskt begrepp som används flitigt av studenter och yrkesverksamma.",
    s1P2: "Kvadratroten ur ett tal är det värde som multiplicerat med sig självt ger ursprungstalet. Om du multiplicerar 7 med 7 får du 49. Kvadratroten ur 49 är alltså 7. Det är den inversa operationen till att kvadrera.",
    s1P3: "I matematiska termer är kvadratroten ur x ett tal y sådant att y × y = x (eller y² = x).",
    s1Cards: [
      { expr: "√4 = 2", reason: "eftersom 2 × 2 = 4" },
      { expr: "√9 = 3", reason: "eftersom 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "eftersom 4 × 4 = 16" },
      { expr: "√25 = 5", reason: "eftersom 5 × 5 = 25" },
      { expr: "√100 = 10", reason: "eftersom 10 × 10 = 100" }
    ],
    s1Caption: "Geometrisk tolkning: Att finna sidlängden på en kvadrat utifrån dess area",
    s1AnatomyTitle: "Ett rotuttrycks anatomi",
    s1RadicalSymbol: "Rottecken (√)",
    s1RadicalSymbolDesc: "Tecknet som visar rotutdragning",
    s1Radicand: "Radikand (Tal)",
    s1RadicandDesc: "Talet under rottecknet (t.ex. 49 i √49)",
    s1Root: "Rot (Resultat)",
    s1RootDesc: "Det beräknade svaret (t.ex. 7)",

    s2Eyebrow: "Bruksanvisning",
    s2Title: "Hur du använder kalkylatorn",
    s2Intro: "Få svaret i tre enkla steg:",
    s2Steps: [
      { title: "Skriv in talet", text: "Ange ett heltal, decimaltal, bråk eller negativt tal i fältet ovan." },
      { title: "Klicka på Beräkna", text: "Tryck på knappen för direkt matematisk uträkning." },
      { title: "Läs av svaret", text: "Kalkylatorn visar decimalvärdet, förenklad rot (t.ex. √72 = 6√2) och stegen." }
    ],
    s2Conclusion: "Det är allt. Inga krångliga formler behövs för att använda verktyget.",

    s3Eyebrow: "Notation och potenser",
    s3Title: "Notation för kvadratrötter: Tecknet √ och x^(1/2)",
    s3Intro: "Rottecknet √ är standardtecknet. √36 frågar: vilket tal multiplicerat med sig självt blir 36? Svaret är 6.",
    s3Cards: [
      { expr: "√", reason: "Rottecken (radikal)" },
      { expr: "36", reason: "Radikand under tecknet" },
      { expr: "6", reason: "Huvudrot" }
    ],
    s3P1: "Ett rotuttryck består av rottecknet, radikanden och rotvärdet.",
    s3P2: "Kvadratrötter kan också skrivas som bråktalsexponenter:",
    s3P3: "Båda formerna betyder exakt samma sak. Programmeringsspråk använder ofta x^(1/2).",
    s3Caption: "Likhet mellan rottecknet √x och bråkpotensen x^(1/2)",
    s3ToggleRadical: "Rotform (√x)",
    s3ToggleExponent: "Potensform (x^½)",
    s3ToggleCode: "Kod / Syntax",

    s4Eyebrow: "Grundformel",
    s4Title: "Vad är formeln för kvadratroten?",
    s4Intro: "Kvadratroten definieras genom ett omvänt samband:",
    s4P1: "Det tal du får som svar måste multiplicerat med sig självt återskapa starttalet.",
    s4PrincipalTitle: "Konventionen om den positiva huvudroten",
    s4PrincipalText: "Huvudroten är alltid det icke-negativa värdet. Både 5 och -5 i kvadrat är 25, men per konvention är √25 = 5.",

    s5Eyebrow: "Räkneregler",
    s5Title: "Kvadratrotens fem viktigaste räkneregler",
    s5Intro: "Dessa regler underlättar förenkling av algebraiska rotuttryck:",
    s5Laws: [
      {
        name: "1. Produktregeln",
        subtitle: "√(a × b) = √a × √b (för a ≥ 0, b ≥ 0)",
        example: "Exempel: √(4 × 9) = √4 × √9 = 2 × 3 = 6. Direkt: √36 = 6.",
        explanation: "Möjliggör faktorisering och förenkling (t.ex. √72 = 6√2)."
      },
      {
        name: "2. Kvotregeln",
        subtitle: "√(a / b) = √a / √b (för a ≥ 0, b > 0)",
        example: "Exempel: √(16/4) = √16 / √4 = 4 / 2 = 2. Direkt: √4 = 2.",
        explanation: "Beräkna täljare och nämnare separat i ett bråk."
      },
      {
        name: "3. Potensregeln",
        subtitle: "√(a²) = |a| (absolutbeloppet av a)",
        example: "Exempel: √(7²) = √49 = 7. Kvadrering och rot tar ut varandra.",
        explanation: "Återger talets positiva absolutbelopp."
      },
      {
        name: "4. Självmultiplikation",
        subtitle: "√a × √a = a",
        example: "Exempel: √13 × √13 = 13. √5 × √5 = 5.",
        explanation: "Att multiplicera en rot med sig själv tar bort rottecknet (rationalisering av nämnare: 1/√5 = √5/5)."
      },
      {
        name: "5. Rot ur rot",
        subtitle: "√(√a) = a^(1/4) (fjärderoten)",
        example: "Exempel: √(√16) = √4 = 2. Och 16^(1/4) = 2.",
        explanation: "Ger fjärderoten ur radikanden."
      }
    ],

    s6Eyebrow: "Beräkningsmetoder",
    s6Title: "Hur man räknar ut kvadratroten: 4 metoder",
    s6Intro: "Det finns fyra sätt att beräkna kvadratrötter:",
    s6M1Title: "Metod 1: Vår kalkylator online (Snabbast)",
    s6M1Text: "Skriv in talet ovan för direkt decimalresultat och förenklad form.",
    s6M1Action: "Gå till kalkylatorn",
    s6M2Title: "Metod 2: Primtalsfaktorisering (För jämna kvadrater)",
    s6M2Intro: "Utmärkt för heltal och perfekta kvadrater.",
    s6M2ExTitle: "Exempel på faktorisering",
    s6M2Steps: [
      "1. Dela upp talet i primtalsfaktorer",
      "2. Gruppera likadana faktorer i par",
      "3. Flytta ut en faktor från varje par ur rottecknet",
      "4. Multiplicera ihop faktorerna utanför"
    ],
    s6M3Title: "Metod 3: Lång division för hand",
    s6M3Intro: "Klassisk algoritm för att räkna ut rötter med valfri decimalprecision för hand.",
    s6M3Steps: [
      "1. Gruppera siffrorna i par från decimalkommat",
      "2. Hitta största kvadraten i första gruppen",
      "3. Subtrahera, dra ned nästa par och dubblera roten",
      "4. Pröva nästa siffra och upprepa"
    ],
    s6M3Text: "Klassisk manuell metod.",
    s6M4Title: "Metod 4: Uppskattning i huvudet",
    s6M4Intro: "Praktisk för snabba överslag:",
    s6M4ExTitle: "Exempel: Uppskatta √50",
    s6M4Steps: [
      "1. Hitta kända kvadrater: 49 < 50 < 64 (alltså 7 < √50 < 8)",
      "2. Eftersom 50 ligger nära 49 är svaret strax över 7",
      "3. Uppskattning: ca 7,07 (exakt: 7,0711...)"
    ],
    s6M4Note: "Grunden för babyloniska metoden (Herons metod / Newton-Raphson).",

    s7Eyebrow: "Perfekta kvadrater",
    s7Title: "Perfekta kvadrater: vad de är och varför de är viktiga",
    s7Intro: "En perfekt kvadrat är ett heltal vars kvadratrot är ett heltal.",
    s7ThNumber: "Tal (n)",
    s7ThSquare: "Kvadrat (n²)",
    s7ThRoot: "Rot (√n²)",
    s7Conclusion: "Att lära sig de 20 första kvadrattalen utantill underlättar huvudräkning avsevärt.",
    s7Caption: "Geometrisk modell av kvadrater med sidlängd n och area n²",

    s8Eyebrow: "Irrationella tal",
    s8Title: "Icke-perfekta kvadrater och irrationella rötter",
    s8Intro: "När ett tal inte är en perfekt kvadrat är dess rot ett irrationellt tal med oändligt antal decimaler utan periodicitet.",
    s8Text: "De kan inte skrivas som ett enkelt bråk (precis som talet π).",
    s8CalcNote: "Vår kalkylator ger både hög decimalprecision och exakt rotform.",

    s9Eyebrow: "Decimaler och bråk",
    s9Title: "Kvadratroten ur decimaltal och bråk",
    s9Intro: "Kvadratrötter ur decimaltal och bråk följer vanliga räkneregler:",
    s9DecimalsTitle: "Decimaltal",
    s9DecimalsIntro: "Decimaltal beräknas med hänsyn till decimalernas placering:",
    s9FractionsTitle: "Bråk",
    s9FractionsIntro: "Använd kvotregeln och beräkna täljare och nämnare var för sig:",
    s9Conclusion: "Testa valfritt bråk i kalkylatorn ovan.",

    s10Eyebrow: "Komplexa tal",
    s10Title: "Rötter ur negativa tal och den imaginära enheten i",
    s10P1: "Reella negativa tal saknar reell kvadratrot då alla reella tal i kvadrat blir positiva.",
    s10P2: "Därför definieras den imaginära enheten i (där i² = -1). Formel: √(-a) = √a × i för a > 0.",
    s10P3: "Dessa bildar komplexa tal (a + bi), oumbärliga inom elektroteknik och kvantfysik.",
    s10ExTitle: "Exempel med negativa tal",
    s10ExStep: "√(-1) = i, √(-4) = 2i, √(-9) = 3i, √(-16) = 4i, √(-81) = 9i",
    s10Conclusion: "Kalkylatorn hanterar negativa tal automatiskt och ger det imaginära svaret.",

    s11Eyebrow: "Inversa operationer",
    s11Title: "Skillnaden mellan kvadrering och kvadratrot",
    s11Intro: "Att kvadrera och att dra roten ur är motsatta räkneoperationer.",
    s11ThOp: "Operation",
    s11ThWhat: "Vad den gör",
    s11ThEx: "Exempel",
    s11RowSquare: "Kvadrering (x²)",
    s11RowSquareDesc: "Multiplicerar ett tal med sig självt",
    s11RowRoot: "Kvadratrot (√x)",
    s11RowRootDesc: "Hittar talet som i kvadrat blir x",
    s11Inverse: "Operationerna tar ut varandra: √(8²) = √64 = 8, och (√64)² = 8² = 64.",
    s11Absolute: "Eftersom minustecken försvinner vid kvadrering gäller: √(a²) = |a|.",

    s12Eyebrow: "Referenstabeller",
    s12Title: "Komplett tabell över kvadratrötter från 1 till 50",
    s12Intro: "Snabbreferenstabell från 1 till 50 med decimalvärden och förenklad rotform.",
    s12ChartLinkText: "Behöver du en utskrivbar tabell upp till 100? Kolla vår Tabellgenerator.",
    s12ScrollHint: "Scrolla nedåt för att se alla 50 värden ↓",
    s12ColNumber: "Tal (n)",
    s12ColRoot: "Decimal (√n)",
    s12ColSimplified: "Förenklad rot",
    s12ColType: "Typ",
    s12BadgePerfect: "Perfekt kvadrat",
    s12BadgeIrrational: "Irrationell",
    s12FilterAll: "Alla tal (1–50)",
    s12FilterPerfect: "Endast perfekta kvadrater",
    s12FilterIrrational: "Endast irrationella",
    s12SearchPlaceholder: "Filtrera tal eller rot (t.ex. 25, √2)...",

    s13Eyebrow: "Förenkling",
    s13Title: "Exempel på förenkling av kvadratrötter",
    s13Intro: "Att förenkla innebär att bryta ut största perfekta kvadrat ur radikanden:",
    s13ThExpr: "Ursprungligt uttryck",
    s13ThForm: "Förenklad form",
    s13ThWhy: "Faktorisering och metod",
    s13Conclusion: "Produktregeln gör det möjligt att bryta ut heltalsfaktorer.",

    s14Eyebrow: "Tillämpningar",
    s14Title: "Praktiska tillämpningar av kvadratrötter",
    s14Intro: "Kvadratrötter används överallt i vetenskap och vardag:",
    s14Apps: [
      { title: "Bygg och arkitektur", text: "Pythagoras sats (a² + b² = c²) för att beräkna diagonaler och vinklar (t.ex. √(3² + 4²) = 5 m)." },
      { title: "Finans och investeringar", text: "Standardavvikelse som mått på risk och volatilitet i aktieportföljer är roten ur variansen." },
      { title: "Fysik och teknik", text: "Fallhastighet (v = √(2gh)), pendelsvängningar och växelströmsberäkningar." },
      { title: "Datorgrafik och spel", text: "Euklidiska avstånd i 3D, kollisionsdetektering och algoritmkomplexitet √n." },
      { title: "Vardagsmätningar", text: "Beräkna måtten på ett rum från arean: ett rum på 64 m² har sidorna √64 = 8 m." }
    ],

    s15Eyebrow: "FAQ",
    s15Title: "Vanliga frågor (FAQ)",
    s15Faqs: [
      {
        question: "Hur använder jag kalkylatorn?",
        answer: "Fyll i talet ovan och klicka på Beräkna för att direkt se decimalresultat, förenklad rot och lösningssteg."
      },
      {
        question: "Vad betyder «racine carrée»?",
        answer: "«Racine carrée» är franska för kvadratrot, det tal som multiplicerat med sig självt ger ursprungstalet."
      },
      {
        question: "Kan kalkylatorn räkna med negativa tal?",
        answer: "Ja, den ger svaret i komplex form med imaginära enheten i (t.ex. √(-16) = 4i)."
      },
      {
        question: "Vad är skillnaden mellan kvadratrot och kubikrot?",
        answer: "Kvadratroten multiplicerar talet 2 gånger (grad 2), kubikroten 3 gånger (grad 3)."
      },
      {
        question: "Hur räknar man ut en rot utan kalkylator?",
        answer: "Genom primtalsfaktorisering, lång division för hand eller uppskattning med babyloniska metoden."
      },
      {
        question: "Vad är en perfekt kvadrat?",
        answer: "Ett heltal vars kvadratrot är ett heltal (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        question: "Är alla kvadratrötter rationella tal?",
        answer: "Nej, endast perfekta kvadrater ger rationella tal. Övriga rötter är irrationella."
      },
      {
        question: "Är denna kalkylator gratis?",
        answer: "Ja, den är 100% gratis, kräver ingen registrering och körs direkt i webbläsaren."
      },
      {
        question: "Kan jag räkna ut rötter ur bråk?",
        answer: "Ja, både decimaltal och bråk beräknas exakt."
      },
      {
        question: "Vad är huvudroten?",
        answer: "Det är den icke-negativa kvadratroten som avses med symbolen √."
      }
    ],

    s16Eyebrow: "Sammanfattning",
    s16Title: "Sammanfattning och slutsatser",
    s16BoxTitle: "Kärnprincip",
    s16BoxText: "Kvadratroten besvarar frågan: vilket tal multiplicerat med sig självt blir detta värde? Använd vår gratis kalkylator för snabba och säkra svar.",

    quickCalcLabel: "Snabbberäkning",
    quickCalcSublabel: "Klicka på ett tal för direkt resultat"
  },

  // 10. Turkish (tr)
  tr: {
    leadTitle: "Karekök Hesaplayıcı (Racine Carree) : Ücretsiz Çevrim İçi",
    leadP1: "Herhangi bir sayının karekökünü anında bulmak için ücretsiz Racine Carree Karekök Hesaplayıcımızı kullanın. Tam sayılar, ondalık sayılar, kesirler veya negatif sayılar girin; tam ondalık sonucu, sadeleştirilmiş kök biçimini ve adım adım çözümü saniyeler içinde alın. %100 ücretsiz.",
    leadP2: "«Racine carree calculator», «karekök hesaplayıcı» veya «square root calculator» araması yaptıysanız, en kapsamlı matematik aracındasınız.",
    badgeInstant: "Kesin Ondalık Değerler",
    badgeRadical: "Sadeleştirilmiş Kök Biçimi",
    badgeSteps: "Adım Adım Çözüm",
    badgeFree: "%100 Ücretsiz ve Sınırsız",
    quickTryLabel: "Denemek İçin Hızlı Örnekler:",

    s1Eyebrow: "Tanım ve Mantık",
    s1Title: "Karekök (Racine Carrée) Nedir?",
    s1P1: "«Racine carrée», karekök anlamına gelen Fransızca terimdir. Dünya çapında öğrenciler ve mühendisler tarafından en çok aranan matematiksel işlemlerden biridir.",
    s1P2: "Bir sayının karekökü, kendisiyle çarpıldığında başlangıçtaki sayıyı veren değerdir. 7 ile 7'yi çarparsanız 49 elde edersiniz; bu yüzden 49'un karekökü 7'dir. Kare almanın tersi işlemdir.",
    s1P3: "Matematiksel olarak x sayısının karekökü, y × y = x (veya y² = x) eşitliğini sağlayan y sayısıdır.",
    s1Cards: [
      { expr: "√4 = 2", reason: "çünkü 2 × 2 = 4" },
      { expr: "√9 = 3", reason: "çünkü 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "çünkü 4 × 4 = 16" },
      { expr: "√25 = 5", reason: "çünkü 5 × 5 = 25" },
      { expr: "√100 = 10", reason: "çünkü 10 × 10 = 100" }
    ],
    s1Caption: "Geometrik görselleştirme: Alanı bilinen bir karenin kenar uzunluğunu bulma",
    s1AnatomyTitle: "Köklü Bir İfadenin Anatomisi",
    s1RadicalSymbol: "Kök Sembolü (√)",
    s1RadicalSymbolDesc: "Kök alma işlemini belirten matematik işareti",
    s1Radicand: "Kök İçi (Sayı)",
    s1RadicandDesc: "Kök sembolü altındaki değer (ör. √49 içindeki 49)",
    s1Root: "Kök Değeri (Sonuç)",
    s1RootDesc: "Elde edilen sonuç (ör. 7)",

    s2Eyebrow: "Kullanım Kılavuzu",
    s2Title: "Karekök Hesaplayıcı Nasıl Kullanılır?",
    s2Intro: "Cevabınızı üç basit adımda alın:",
    s2Steps: [
      { title: "Sayıyı Girin", text: "Yukarıdaki giriş kutusuna herhangi bir sayı (tam, ondalık, kesirli veya negatif) yazın." },
      { title: "Hesapla'ya Tıklayın", text: "İşlemi anında başlatmak için Hesapla butonuna basın." },
      { title: "Sonucu İnceleyin", text: "Araç kesin ondalık sonucu, sadeleştirilmiş kök biçimini (ör. √72 = 6√2) ve adımları gösterir." }
    ],
    s2Conclusion: "Tüm süreç bu kadardır; formül ezberlemenize gerek kalmadan hesaplayıcı her şeyi çözer.",

    s3Eyebrow: "Semboller ve Üsler",
    s3Title: "Karekök Gösterimi: √ Sembolü ve x^(1/2)",
    s3Intro: "√ işareti standart kök sembolüdür. √36 ifadesi 'Kendisiyle çarpıldığında 36 eden sayı kaçtır?' sorusunu sorar. Cevap 6'dır.",
    s3Cards: [
      { expr: "√", reason: "Kök sembolü" },
      { expr: "36", reason: "Kök içindeki sayı" },
      { expr: "6", reason: "Esas pozitif kök" }
    ],
    s3P1: "Köklü ifade kök sembolü, kök içi sayı ve kök değerinden oluşur.",
    s3P2: "Karekök rasyonel üs biçiminde de ifade edilebilir:",
    s3P3: "İki biçim tamamen eşdeğerdir. Programlama dilleri x^(1/2) gösterimini tercih eder.",
    s3Caption: "Kök sembolü √x ile rasyonel üslü biçim x^(1/2) eşdeğerliği",
    s3ToggleRadical: "Kök Biçimi (√x)",
    s3ToggleExponent: "Üs Biçimi (x^½)",
    s3ToggleCode: "Kod / Sözdizimi",

    s4Eyebrow: "Temel Formül",
    s4Title: "Karekök Formülü Nedir?",
    s4Intro: "Karekök doğrudan ters ilişki prensibiyle tanımlanır:",
    s4P1: "Basitçe: Bulduğunuz sonuç kendisiyle çarpıldığında mutlaka başlangıçtaki sayıyı vermelidir.",
    s4PrincipalTitle: "Esas (Pozitif) Kök Kuralı",
    s4PrincipalText: "Uluslararası kabul görmüş kurala göre √ sembolü daima negatif olmayan esas kökü temsil eder. Hem 5 hem de -5'in karesi 25 olsa da √25 = 5 kabul edilir.",

    s5Eyebrow: "Kök Özellikleri",
    s5Title: "Karekökün Beş Temel Kuralı",
    s5Intro: "Bu kurallar cebir ve geometride köklü ifadeleri hızla sadeleştirmenizi sağlar:",
    s5Laws: [
      {
        name: "1. Çarpma Kuralı",
        subtitle: "√(a × b) = √a × √b (a ≥ 0, b ≥ 0 için)",
        example: "Örnek: √(4 × 9) = √4 × √9 = 2 × 3 = 6. Doğrudan: √36 = 6.",
        explanation: "Kök içini çarpanlarına ayırarak dışarı çıkarmayı sağlar (ör. √72 = 6√2)."
      },
      {
        name: "2. Bölme Kuralı",
        subtitle: "√(a / b) = √a / √b (a ≥ 0, b > 0 için)",
        example: "Örnek: √(16/4) = √16 / √4 = 4 / 2 = 2. Doğrudan: √4 = 2.",
        explanation: "Pay ve paydanın kökünü ayrı ayrı almanızı sağlar."
      },
      {
        name: "3. Kuvvet Kuralı",
        subtitle: "√(a²) = |a| (a'nın mutlak değeri)",
        example: "Örnek: √(7²) = √49 = 7. Kare ve karekök birbirini götürür.",
        explanation: "Kare alıp karekök almak sayının mutlak değerini verir."
      },
      {
        name: "4. Kendisiyle Çarpım",
        subtitle: "√a × √a = a",
        example: "Örnek: √13 × √13 = 13. √5 × √5 = 5.",
        explanation: "Bir kökü kendisiyle çarpmak kök işaretini kaldırır (paydayı rasyonel yapma: 1/√5 = √5/5)."
      },
      {
        name: "5. İç İçe Kökler",
        subtitle: "√(√a) = a^(1/4) (dördüncü dereceden kök)",
        example: "Örnek: √(√16) = √4 = 2. Ve 16^(1/4) = 2.",
        explanation: "Kökün kökü dördüncü dereceden kökü verir."
      }
    ],

    s6Eyebrow: "Hesaplama Yöntemleri",
    s6Title: "Karekök Nasıl Hesaplanır: Dört Yöntem",
    s6Intro: "Karekök hesaplamak için dört yöntem kullanılır:",
    s6M1Title: "Yöntem 1: Bu Çevrim İçi Hesaplayıcı (En Hızlısı)",
    s6M1Text: "Sayınızı yukarıya girip Hesapla'ya tıklayın; anında kesin sonucu alın.",
    s6M1Action: "Hesaplayıcıya Git",
    s6M2Title: "Yöntem 2: Asal Çarpanlara Ayırma (Tam Kareler)",
    s6M2Intro: "Tam kare sayılar için en pratik yöntemdir.",
    s6M2ExTitle: "Çarpanlara Ayırma Örnekleri",
    s6M2Steps: [
      "1. Sayıyı asal çarpanlarına ayırın",
      "2. Aynı çarpanları ikişerli eşleştirin",
      "3. Her çiftten bir çarpanı kök dışına çıkarın",
      "4. Kök dışına çıkan çarpanları birbiriyle çarpın"
    ],
    s6M3Title: "Yöntem 3: Basamak Bölme Yöntemi (Elle Kesin Sonuç)",
    s6M3Intro: "İstenilen ondalık basamağa kadar elle hesaplama sağlayan geleneksel algoritma.",
    s6M3Steps: [
      "1. Basamakları virgülden sağa ve sola ikişerli ayırın",
      "2. İlk gruba uyan en büyük karesel sayıyı bulun",
      "3. Çıkarın, sonraki çifti indirin ve kökü ikiyle çarpın",
      "4. Sonraki basamağı deneme ile belirleyin"
    ],
    s6M3Text: "Hesap makinesi olmadan elle tam sonuç verir.",
    s6M4Title: "Yöntem 4: Tahmin ve Ortalama Alma",
    s6M4Intro: "Zihinden hızlı yaklaşık değer bulmak için:",
    s6M4ExTitle: "Örnek: √50'yi Tahmin Etme",
    s6M4Steps: [
      "1. Komşu tam kareleri bulun: 49 < 50 < 64 (demek ki 7 < √50 < 8)",
      "2. 50 sayısı 49'a çok yakın olduğundan sonuç 7'den biraz büyüktür",
      "3. Tahmin: yaklaşık 7,07 (gerçek değer: 7,0711...)"
    ],
    s6M4Note: "Bu yaklaşım Babil yönteminin (Heron / Newton yöntemi) temelidir.",

    s7Eyebrow: "Tam Kare Sayılar",
    s7Title: "Tam Kare Sayılar: Anlamı ve Önemi",
    s7Intro: "Karekökü bir tam sayı olan sayılara tam kare sayı denir. Bir tam sayının kendisiyle çarpılmasıyla oluşur.",
    s7ThNumber: "Sayı (n)",
    s7ThSquare: "Tam Kare (n²)",
    s7ThRoot: "Karekök (√n²)",
    s7Conclusion: "İlk 20 tam kare sayıyı ezberlemek zihinden işlem hızınızı büyük ölçüde artırır.",
    s7Caption: "Kenarı n ve alanı n² olan karesel alanların geometrik çizimi",

    s8Eyebrow: "İrrasyonel Sayılar",
    s8Title: "Tam Kare Olmayan Sayılar ve İrrasyonel Kökler",
    s8Intro: "Bir sayı tam kare değilse karekökü irrasyonel bir sayıdır; yani ondalık basamakları sonsuza kadar tekrarlanmadan devam eder.",
    s8Text: "Bu sayılar iki tam sayının kesri olarak yazılamaz (π sayısı gibi).",
    s8CalcNote: "Hesaplayıcımız hem yüksek hassasiyetli ondalık sonucu hem de en sade kök biçimini verir.",

    s9Eyebrow: "Ondalık ve Kesirler",
    s9Title: "Ondalık Sayıların ve Kesirlerin Karekökü",
    s9Intro: "Karekök işlemi kesirli ve ondalık sayılara cebirsel kurallarla uygulanır:",
    s9DecimalsTitle: "Ondalık Sayıların Kökü",
    s9DecimalsIntro: "Ondalık basamaklar dikkate alınarak doğrudan hesaplanır:",
    s9FractionsTitle: "Kesirlerin Kökü",
    s9FractionsIntro: "Bölme kuralıyla pay ve paydanın kökü ayrı ayrı alınır:",
    s9Conclusion: "İşlemlerinizi test etmek için yukarıdaki hesaplayıcıyı kullanabilirsiniz.",

    s10Eyebrow: "Karmaşık Sayılar",
    s10Title: "Negatif Sayıların Kökü ve Sanal Birim i",
    s10P1: "Reel sayılarda negatif sayıların karekökü yoktur çünkü hiçbir reel sayının karesi negatif olamaz.",
    s10P2: "Bunu çözmek için i² = -1 olan sanal birim i tanımlanmıştır: √(-a) = √a × i (a > 0 için).",
    s10P3: "Bu sayılar elektrik mühendisliği ve kuantum fiziğinde vazgeçilmez olan karmaşık sayıları (a + bi) oluşturur.",
    s10ExTitle: "Negatif Kök Örnekleri",
    s10ExStep: "√(-1) = i, √(-4) = 2i, √(-9) = 3i, √(-16) = 4i, √(-81) = 9i",
    s10Conclusion: "Hesaplayıcımız negatif sayıları otomatik olarak algılar ve sanal sonucu verir.",

    s11Eyebrow: "Ters İşlemler",
    s11Title: "Kare Alma ile Karekök Arasındaki Fark",
    s11Intro: "Kare alma ve karekök alma birbirinin tam tersi matematiksel işlemlerdir.",
    s11ThOp: "İşlem",
    s11ThWhat: "Ne Yapar?",
    s11ThEx: "Örnek",
    s11RowSquare: "Kare Alma (x²)",
    s11RowSquareDesc: "Sayıyı kendisiyle çarpar",
    s11RowRoot: "Karekök Alma (√x)",
    s11RowRootDesc: "Hangi sayının karesinin x olduğunu bulur",
    s11Inverse: "İşlemler birbirini sıfırlar: √(8²) = √64 = 8 ve (√64)² = 8² = 64.",
    s11Absolute: "Kare alma eksileri yok ettiğinden kural: √(a²) = |a|.",

    s12Eyebrow: "Referans Tabloları",
    s12Title: "1'den 50'ye Kadar Tam Karekök Tablosu",
    s12Intro: "1'den 50'ye kadar tüm sayıların ondalık kökleri ve sadeleştirilmiş biçimleri.",
    s12ChartLinkText: "100'e kadar yazdırılabilir tablo mu lazım? Tablo Oluşturucumuza bakın.",
    s12ScrollHint: "Tüm 50 değeri görmek için aşağı kaydırın ↓",
    s12ColNumber: "Sayı (n)",
    s12ColRoot: "Ondalık (√n)",
    s12ColSimplified: "Sade Kök",
    s12ColType: "Tür",
    s12BadgePerfect: "Tam Kare",
    s12BadgeIrrational: "İrrasyonel",
    s12FilterAll: "Tüm Sayılar (1–50)",
    s12FilterPerfect: "Yalnızca Tam Kareler",
    s12FilterIrrational: "Yalnızca İrrasyonel",
    s12SearchPlaceholder: "Sayı veya kök ara (ör. 25, √2)...",

    s13Eyebrow: "Kök Sadeleştirme",
    s13Title: "Karekök Sadeleştirme Örnekleri",
    s13Intro: "Sadeleştirme, kök içindeki en büyük tam kare çarpanı dışarı çıkarmaktır:",
    s13ThExpr: "Orijinal Kök",
    s13ThForm: "Sadeleştirilmiş Biçim",
    s13ThWhy: "Ayrıştırma ve Neden",
    s13Conclusion: "Çarpma kuralı tam sayı çarpanları kök dışına çıkarmayı sağlar.",

    s14Eyebrow: "Gerçek Hayat",
    s14Title: "Karekökün Günlük Hayattaki Uygulamaları",
    s14Intro: "Karekökler bilim, mimarlık ve günlük yaşamda her yerdedir:",
    s14Apps: [
      { title: "İnşaat ve Mimarlık", text: "Pisagor teoremi (a² + b² = c²) ile kiriş, çatı eğimi ve köşegen hesaplamaları (ör. √(3² + 4²) = 5 m)." },
      { title: "Finans ve Yatırım", text: "Portföy riskini ve oynaklığını ölçen standart sapma, varyansın kareköküdür." },
      { title: "Fizik ve Mühendislik", text: "Serbest düşme hızı (v = √(2gh)), sarkaç periyotları ve alternatif akım empedansı." },
      { title: "Bilgisayar ve 3D Grafikler", text: "Oyunlarda iki nokta arası Öklid mesafesi ve √n karmaşıklığındaki algoritmalar." },
      { title: "Günlük Ölçümler", text: "Alanından oda kenarını bulma: 64 m² taban alanlı bir odanın kenarları √64 = 8 m'dir." }
    ],

    s15Eyebrow: "SSS",
    s15Title: "Sıkça Sorulan Sorular (SSS)",
    s15Faqs: [
      {
        question: "Karekök hesaplayıcıyı nasıl kullanırım?",
        answer: "Yukarıdaki kutuya sayıyı yazıp Hesapla'ya tıklayın. Ondalık sonuç, sadeleşmiş kök ve adımlar anında gelir."
      },
      {
        question: "«Racine carrée» ne anlama gelir?",
        answer: "«Racine carrée», Fransızca'da karekök demektir; kendisiyle çarpıldığında o sayıyı veren değeri ifade eder."
      },
      {
        question: "Hesaplayıcı negatif sayıları çözebilir mi?",
        answer: "Evet, karmaşık sayılar kümesinde sanal birim i ile (ör. √(-16) = 4i) sonucu verir."
      },
      {
        question: "Karekök ile küpkök arasındaki fark nedir?",
        answer: "Karekök 2 kez çarpılan sayıyı (derece 2), küpkök ise 3 kez çarpılan sayıyı (derece 3) arar."
      },
      {
        question: "Hesap makinesi olmadan karekök nasıl bulunur?",
        answer: "Asal çarpanlara ayırma, basamak bölme yöntemi veya Babil tahmin yöntemiyle."
      },
      {
        question: "Tam kare sayı nedir?",
        answer: "Karekökü tam sayı olan sayılardır (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        question: "Bütün kökler rasyonel sayı mıdır?",
        answer: "Hayır. Yalnızca tam karelerin kökleri rasyoneldir; diğerleri irrasyonel sayıdır."
      },
      {
        question: "Bu hesaplayıcı ücretsiz mi?",
        answer: "Evet, %100 ücretsiz, sınırsız ve kayıtsız olarak tarayıcınızda çalışır."
      },
      {
        question: "Kesirli ve ondalık sayıların kökünü bulabilir miyim?",
        answer: "Evet, ondalık veya kesirli sayıları eksiksiz hesaplar."
      },
      {
        question: "Esas karekök nedir?",
        answer: "Uluslararası standart olarak kabul edilen pozitif (negatif olmayan) karekök değeridir."
      }
    ],

    s16Eyebrow: "Özet",
    s16Title: "Kısa Özet ve Çıkarımlar",
    s16BoxTitle: "Temel İlke",
    s16BoxText: "Karekök tek bir temel soruya cevap verir: Hangi sayı kendisiyle çarpıldığında bu değeri verir? Hızlı ve güvenilir sonuçlar için aracımızı kullanın.",

    quickCalcLabel: "Hızlı Hesaplama",
    quickCalcSublabel: "Sonucu görmek için herhangi bir sayıya tıklayın"
  },

  // 11. Indonesian (id)
  id: {
    leadTitle: "Kalkulator Akar Kuadrat (Racine Carree) : Gratis Online",
    leadP1: "Gunakan Kalkulator Akar Kuadrat Racine Carree gratis kami untuk menemukan akar dari angka berapa pun secara instan. Masukkan bilangan bulat, desimal, pecahan, atau negatif untuk mendapatkan hasil desimal akurat, bentuk akar sederhana, dan langkah pengerjaan lengkap.",
    leadP2: "Baik Anda mencari «racine carree calculator», «kalkulator akar kuadrat» atau «square root calculator», Anda berada di alat matematika terbaik.",
    badgeInstant: "Desimal Tepat",
    badgeRadical: "Bentuk Akar Sederhana",
    badgeSteps: "Langkah Terperinci",
    badgeFree: "100% Gratis & Tanpa Batas",
    quickTryLabel: "Contoh Cepat untuk Dicoba:",

    s1Eyebrow: "Definisi & Konsep",
    s1Title: "Apa itu Akar Kuadrat (Racine Carrée)?",
    s1P1: "«Racine carrée» adalah bahasa Prancis untuk akar kuadrat. Ini adalah salah satu konsep matematika yang paling sering dicari di seluruh dunia.",
    s1P2: "Akar kuadrat adalah nilai yang jika dikalikan dengan dirinya sendiri akan menghasilkan bilangan semula. Jika 7 dikalikan 7 hasilnya 49, maka akar kuadrat dari 49 adalah 7. Operasi ini merupakan kebalikan dari kuadrat.",
    s1P3: "Secara matematis, akar kuadrat dari x adalah bilangan y sedemikian sehingga y × y = x (atau y² = x).",
    s1Cards: [
      { expr: "√4 = 2", reason: "karena 2 × 2 = 4" },
      { expr: "√9 = 3", reason: "karena 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "karena 4 × 4 = 16" },
      { expr: "√25 = 5", reason: "karena 5 × 5 = 25" },
      { expr: "√100 = 10", reason: "karena 10 × 10 = 100" }
    ],
    s1Caption: "Visualisasi: Mencari panjang sisi persegi dari total luasnya",
    s1AnatomyTitle: "Anatomi Bentuk Akar",
    s1RadicalSymbol: "Simbol Akar (√)",
    s1RadicalSymbolDesc: "Tanda matematika untuk penarikan akar",
    s1Radicand: "Radikan (Angka)",
    s1RadicandDesc: "Bilangan di bawah tanda akar (misalnya 49 pada √49)",
    s1Root: "Akar (Hasil)",
    s1RootDesc: "Nilai hasil perhitungan (misalnya 7)",

    s2Eyebrow: "Cara Pakai",
    s2Title: "Cara Menggunakan Kalkulator Akar Kuadrat",
    s2Intro: "Dapatkan jawaban dalam tiga langkah mudah:",
    s2Steps: [
      { title: "Ketik Angka Anda", text: "Masukkan bilangan apa saja (bulat, desimal, pecahan, atau negatif) ke kotak input di atas." },
      { title: "Klik Hitung", text: "Tekan tombol Hitung untuk memproses secara instan." },
      { title: "Lihat Hasilnya", text: "Kalkulator menyajikan nilai desimal, bentuk sederhana (contoh √72 = 6√2), dan penjabarannya." }
    ],
    s2Conclusion: "Sangat mudah tanpa perlu menghafal rumus yang rumit.",

    s3Eyebrow: "Notasi & Pangkat",
    s3Title: "Notasi Akar Kuadrat: Simbol √ dan x^(1/2)",
    s3Intro: "Simbol √ adalah tanda akar standar. √36 menanyakan: bilangan berapa yang dikalikan dirinya sendiri menghasilkan 36? Jawabannya 6.",
    s3Cards: [
      { expr: "√", reason: "Tanda akar kuadrat" },
      { expr: "36", reason: "Radikan di dalam akar" },
      { expr: "6", reason: "Akar utama non-negatif" }
    ],
    s3P1: "Setiap bentuk akar terdiri atas simbol radikal, radikan, dan hasil akar.",
    s3P2: "Akar kuadrat juga dapat ditulis sebagai bilangan berpangkat pecahan:",
    s3P3: "Kedua bentuk sama persis. Bahasa pemrograman biasanya menggunakan x^(1/2).",
    s3Caption: "Kesetaraan simbol √x dengan bentuk pangkat pecahan x^(1/2)",
    s3ToggleRadical: "Bentuk Akar (√x)",
    s3ToggleExponent: "Bentuk Pangkat (x^½)",
    s3ToggleCode: "Kode / Sintaks",

    s4Eyebrow: "Rumus Inti",
    s4Title: "Apa Rumus Akar Kuadrat?",
    s4Intro: "Akar kuadrat didefinisikan lewat hubungan kebalikan:",
    s4P1: "Bilangan hasil jika dikalikan dengan dirinya sendiri harus kembali menjadi bilangan awal.",
    s4PrincipalTitle: "Konvensi Akar Utama",
    s4PrincipalText: "Akar utama selalu berupa nilai non-negatif. Meskipun 5 dan -5 jika dikuadratkan menghasilkan 25, secara konvensi √25 = 5.",

    s5Eyebrow: "Sifat-sifat Akar",
    s5Title: "Lima Sifat Penting Akar Kuadrat",
    s5Intro: "Aturan-aturan ini memudahkan penyederhanaan bentuk akar:",
    s5Laws: [
      {
        name: "1. Aturan Perkalian",
        subtitle: "√(a × b) = √a × √b (untuk a ≥ 0, b ≥ 0)",
        example: "Contoh: √(4 × 9) = √4 × √9 = 2 × 3 = 6. Langsung: √36 = 6.",
        explanation: "Memungkinkan pemisahan faktor untuk disederhanakan (contoh √72 = 6√2)."
      },
      {
        name: "2. Aturan Pembagian",
        subtitle: "√(a / b) = √a / √b (untuk a ≥ 0, b > 0)",
        example: "Contoh: √(16/4) = √16 / √4 = 4 / 2 = 2. Langsung: √4 = 2.",
        explanation: "Akar dari pecahan dapat dihitung dengan memisahkan pembilang dan penyebut."
      },
      {
        name: "3. Aturan Pangkat",
        subtitle: "√(a²) = |a| (nilai mutlak a)",
        example: "Contoh: √(7²) = √49 = 7. Pangkat dan akar saling meniadakan.",
        explanation: "Mengembalikan nilai mutlak dari angka tersebut."
      },
      {
        name: "4. Perkalian Diri Sendiri",
        subtitle: "√a × √a = a",
        example: "Contoh: √13 × √13 = 13. √5 × √5 = 5.",
        explanation: "Mengalikan akar dengan dirinya sendiri menghilangkan tanda akar (merasionalkan penyebut: 1/√5 = √5/5)."
      },
      {
        name: "5. Akar di Dalam Akar",
        subtitle: "√(√a) = a^(1/4) (akar pangkat empat)",
        example: "Contoh: √(√16) = √4 = 2. Dan 16^(1/4) = 2.",
        explanation: "Menarik akar dari akar menghasilkan akar pangkat empat."
      }
    ],

    s6Eyebrow: "Metode Hitung",
    s6Title: "Cara Menghitung Akar Kuadrat: 4 Metode",
    s6Intro: "Ada empat cara untuk mencari nilai akar kuadrat:",
    s6M1Title: "Metode 1: Menggunakan Kalkulator Online Ini (Tercepat)",
    s6M1Text: "Ketik angka dan tekan tombol Hitung untuk mendapatkan jawaban instan.",
    s6M1Action: "Buka Kalkulator di Atas",
    s6M2Title: "Metode 2: Faktorisasi Prima (Kuadrat Sempurna)",
    s6M2Intro: "Sangat cocok untuk bilangan bulat dan kuadrat sempurna.",
    s6M2ExTitle: "Contoh Faktorisasi",
    s6M2Steps: [
      "1. Uraikan bilangan menjadi faktor-faktor prima",
      "2. Kelompokkan faktor yang sama berpasangan",
      "3. Keluarkan satu angka dari setiap pasangan ke luar akar",
      "4. Kalikan angka-angka di luar akar"
    ],
    s6M3Title: "Metode 3: Pembagian Panjang Bersusun",
    s6M3Intro: "Metode manual sistematis untuk mencari akar hingga ketelitian desimal berapa pun.",
    s6M3Steps: [
      "1. Pisahkan digit berpasangan dua-dua dari tanda koma",
      "2. Tentukan kuadrat terbesar yang mendekati pasangan pertama",
      "3. Kurangkan, turunkan pasangan berikutnya, dan kalikan dua akar sementara",
      "4. Cari digit uji berikutnya dan ulangi"
    ],
    s6M3Text: "Metode klasik tanpa alat bantu kalkulator.",
    s6M4Title: "Metode 4: Estimasi dan Pendekatan",
    s6M4Intro: "Berguna untuk taksiran cepat di kepala:",
    s6M4ExTitle: "Contoh: Menaksir √50",
    s6M4Steps: [
      "1. Temukan kuadrat terdekat: 49 < 50 < 64 (sehingga 7 < √50 < 8)",
      "2. Karena 50 sangat dekat dengan 49, nilainya sedikit di atas 7",
      "3. Estimasi: sekitar 7,07 (nilai asli: 7,0711...)"
    ],
    s6M4Note: "Konsep dasar metode Babilonia (metode Heron / Newton-Raphson).",

    s7Eyebrow: "Kuadrat Sempurna",
    s7Title: "Bilangan Kuadrat Sempurna: Arti dan Fungsinya",
    s7Intro: "Kuadrat sempurna adalah bilangan bulat yang akarnya merupakan bilangan bulat.",
    s7ThNumber: "Angka (n)",
    s7ThSquare: "Kuadrat (n²)",
    s7ThRoot: "Akar (√n²)",
    s7Conclusion: "Menghafal 20 kuadrat sempurna pertama sangat mempermudah perhitungan aljabar.",
    s7Caption: "Representasi geometris persegi dengan panjang sisi n dan luas n²",

    s8Eyebrow: "Bilangan Irasional",
    s8Title: "Bukan Kuadrat Sempurna & Akar Irasional",
    s8Intro: "Jika suatu bilangan bukan kuadrat sempurna, akarnya merupakan bilangan irasional dengan desimal tak terhingga yang tidak berulang.",
    s8Text: "Bilangan ini tidak dapat dinyatakan sebagai pecahan biasa (seperti halnya bilangan π).",
    s8CalcNote: "Kalkulator kami memberikan desimal berpresisi tinggi dan bentuk akar sederhana.",

    s9Eyebrow: "Desimal & Pecahan",
    s9Title: "Akar Kuadrat dari Pecahan dan Bilangan Desimal",
    s9Intro: "Akar kuadrat dapat diterapkan pada desimal dan pecahan:",
    s9DecimalsTitle: "Akar Bilangan Desimal",
    s9DecimalsIntro: "Desimal dihitung dengan memperhatikan letak koma:",
    s9FractionsTitle: "Akar Pecahan",
    s9FractionsIntro: "Gunakan aturan pembagian untuk akar pembilang dan penyebut terpisah:",
    s9Conclusion: "Coba masukkan pecahan apa pun ke kalkulator untuk memeriksa pekerjaan Anda.",

    s10Eyebrow: "Bilangan Kompleks",
    s10Title: "Akar Bilangan Negatif & Satuan Imajiner i",
    s10P1: "Dalam bilangan real, bilangan negatif tidak memiliki akar karena kuadrat dari bilangan real selalu positif.",
    s10P2: "Matematika mendefinisikan satuan imajiner i dengan i² = -1. Rumus: √(-a) = √a × i untuk a > 0.",
    s10P3: "Ini membentuk bilangan kompleks (a + bi) yang penting dalam teknik elektro dan fisika kuantum.",
    s10ExTitle: "Contoh Bilangan Negatif",
    s10ExStep: "√(-1) = i, √(-4) = 2i, √(-9) = 3i, √(-16) = 4i, √(-81) = 9i",
    s10Conclusion: "Kalkulator otomatis mengenali angka negatif dan menampilkan jawaban imajiner.",

    s11Eyebrow: "Operasi Kebalikan",
    s11Title: "Perbedaan Antara Kuadrat dan Akar Kuadrat",
    s11Intro: "Menguadratkan dan menarik akar adalah operasi yang saling berkebalikan.",
    s11ThOp: "Operasi",
    s11ThWhat: "Fungsi",
    s11ThEx: "Contoh",
    s11RowSquare: "Kuadrat (x²)",
    s11RowSquareDesc: "Mengalikan angka dengan dirinya sendiri",
    s11RowRoot: "Akar Kuadrat (√x)",
    s11RowRootDesc: "Mencari angka yang jika dikuadratkan menghasilkan x",
    s11Inverse: "Operasi ini saling meniadakan: √(8²) = √64 = 8, dan (√64)² = 8² = 64.",
    s11Absolute: "Karena pengkuadratan menghilangkan tanda minus, berlaku: √(a²) = |a|.",

    s12Eyebrow: "Tabel Referensi",
    s12Title: "Tabel Lengkap Akar Kuadrat 1 sampai 50",
    s12Intro: "Tabel referensi cepat dari 1 sampai 50 dengan nilai desimal dan bentuk akar yang disederhanakan.",
    s12ChartLinkText: "Perlu tabel cetak hingga 100? Kunjungi Generator Tabel kami.",
    s12ScrollHint: "Gulir ke bawah untuk melihat ke-50 nilai ↓",
    s12ColNumber: "Angka (n)",
    s12ColRoot: "Desimal (√n)",
    s12ColSimplified: "Bentuk Sederhana",
    s12ColType: "Tipe",
    s12BadgePerfect: "Kuadrat Sempurna",
    s12BadgeIrrational: "Irasional",
    s12FilterAll: "Semua Angka (1–50)",
    s12FilterPerfect: "Hanya Kuadrat Sempurna",
    s12FilterIrrational: "Hanya Irasional",
    s12SearchPlaceholder: "Cari angka atau akar (contoh 25, √2)...",

    s13Eyebrow: "Penyederhanaan",
    s13Title: "Contoh Menyederhanakan Bentuk Akar",
    s13Intro: "Menyederhanakan akar berarti mengeluarkan faktor kuadrat sempurna terbesar dari radikan:",
    s13ThExpr: "Akar Asal",
    s13ThForm: "Bentuk Sederhana",
    s13ThWhy: "Faktorisasi & Penjelasan",
    s13Conclusion: "Aturan perkalian akar memungkinkan pemisahan faktor bilangan bulat.",

    s14Eyebrow: "Penerapan Nyata",
    s14Title: "Aplikasi Akar Kuadrat dalam Kehidupan Sehari-hari",
    s14Intro: "Akar kuadrat sangat banyak dipakai dalam ilmu pengetahuan dan teknik:",
    s14Apps: [
      { title: "Konstruksi & Arsitektur", text: "Teorema Pythagoras (a² + b² = c²) untuk mengukur panjang diagonal dan kemiringan (misal √(3² + 4²) = 5 m)." },
      { title: "Keuangan & Investasi", text: "Deviasi standar sebagai tolok ukur risiko portofolio merupakan akar dari varians." },
      { title: "Fisika & Teknik", text: "Kecepatan jatuh bebas (v = √(2gh)), getaran bandul, dan perhitungan arus bolak-balik." },
      { title: "Ilmu Komputer & Grafis 3D", text: "Jarak Euclidean dalam game, deteksi tabrakan, dan kompleksitas algoritma √n." },
      { title: "Pengukuran Sehari-hari", text: "Menghitung panjang sisi ruangan dari luasnya: kamar 64 m² memiliki panjang dinding √64 = 8 m." }
    ],

    s15Eyebrow: "FAQ",
    s15Title: "Pertanyaan yang Sering Diajukan (FAQ)",
    s15Faqs: [
      {
        question: "Bagaimana cara menggunakan kalkulator akar kuadrat?",
        answer: "Ketik angka pada kolom di atas lalu klik Hitung. Anda langsung mendapatkan nilai desimal, bentuk sederhana, dan langkah pengerjaannya."
      },
      {
        question: "Apa arti istilah «racine carrée»?",
        answer: "«Racine carrée» adalah bahasa Prancis untuk akar kuadrat; bilangan yang jika dikalikan dirinya sendiri menghasilkan nilai awal."
      },
      {
        question: "Bisakah kalkulator menghitung angka negatif?",
        answer: "Bisa, kalkulator akan menampilkan hasil dalam bilangan kompleks dengan satuan imajiner i (misalnya √(-16) = 4i)."
      },
      {
        question: "Apa bedanya akar kuadrat dan akar kubik?",
        answer: "Akar kuadrat dikalikan 2 kali (pangkat 2), akar kubik dikalikan 3 kali (pangkat 3)."
      },
      {
        question: "Bagaimana cara menghitung akar tanpa kalkulator?",
        answer: "Bisa dengan faktorisasi prima, pembagian bersusun, atau taksiran metode Babilonia."
      },
      {
        question: "Apa itu bilangan kuadrat sempurna?",
        answer: "Bilangan bulat yang akarnya merupakan bilangan bulat (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        question: "Apakah semua akar kuadrat merupakan bilangan rasional?",
        answer: "Tidak, hanya kuadrat sempurna yang menghasilkan bilangan rasional. Lainnya adalah irasional."
      },
      {
        question: "Apakah kalkulator ini gratis?",
        answer: "Ya, 100% gratis, tanpa batas pemakaian, dan tanpa perlu mendaftar."
      },
      {
        question: "Bisakah menghitung akar dari pecahan?",
        answer: "Bisa, masukkan angka desimal atau pecahan ke dalam kalkulator."
      },
      {
        question: "Apa itu akar utama?",
        answer: "Akar utama adalah nilai positif (non-negatif) yang ditunjukkan oleh simbol √."
      }
    ],

    s16Eyebrow: "Rangkuman",
    s16Title: "Rangkuman & Poin Penting",
    s16BoxTitle: "Prinsip Utama",
    s16BoxText: "Akar kuadrat menjawab pertanyaan: bilangan berapa yang jika dikalikan dirinya sendiri menghasilkan nilai ini? Gunakan kalkulator kami untuk kepastian dan kecepatan.",

    quickCalcLabel: "Hitung Cepat",
    quickCalcSublabel: "Klik angka untuk melihat hasilnya langsung"
  },

  // 12. Malay (ms)
  ms: {
    leadTitle: "Kalkulator Punca Kuasa Dua (Racine Carree) : Percuma Dalam Talian",
    leadP1: "Gunakan Kalkulator Punca Kuasa Dua Racine Carree percuma kami untuk mencari punca kuasa dua sebarang nombor serta-merta. Masukkan nombor bulat, perpuluhan, pecahan atau negatif untuk mendapatkan hasil perpuluhan tepat, bentuk punca dipermudah dan langkah penyelesaian lengkap.",
    leadP2: "Sama ada anda mencari «racine carree calculator», «kalkulator punca kuasa dua» atau «square root calculator», anda berada di laman yang tepat.",
    badgeInstant: "Perpuluhan Tepat",
    badgeRadical: "Bentuk Punca Dipermudah",
    badgeSteps: "Langkah Terperinci",
    badgeFree: "100% Percuma & Tanpa Had",
    quickTryLabel: "Contoh Pantas untuk Dicuba:",

    s1Eyebrow: "Definisi & Konsep",
    s1Title: "Apakah itu Punca Kuasa Dua (Racine Carrée)?",
    s1P1: "«Racine carrée» ialah istilah bahasa Perancis bagi punca kuasa dua. Ia merupakan salah satu topik matematik paling kerap dicari di serata dunia.",
    s1P2: "Punca kuasa dua bagi sesuatu nombor ialah nilai yang apabila didarabkan dengan dirinya sendiri akan menghasilkan nombor asal itu. Jika anda mendarab 7 dengan 7, anda mendapat 49. Jadi punca kuasa dua bagi 49 ialah 7.",
    s1P3: "Secara matematik, punca kuasa dua x ialah nombor y yang memenuhi persamaan y × y = x (atau y² = x).",
    s1Cards: [
      { expr: "√4 = 2", reason: "kerana 2 × 2 = 4" },
      { expr: "√9 = 3", reason: "kerana 3 × 3 = 9" },
      { expr: "√16 = 4", reason: "kerana 4 × 4 = 16" },
      { expr: "√25 = 5", reason: "kerana 5 × 5 = 25" },
      { expr: "√100 = 10", reason: "kerana 10 × 10 = 100" }
    ],
    s1Caption: "Visualisasi: Mencari panjang sisi segi empat sama daripada jumlah luasnya",
    s1AnatomyTitle: "Anatomi Ungkapan Punca Kuasa",
    s1RadicalSymbol: "Simbol Punca Kuasa (√)",
    s1RadicalSymbolDesc: "Tanda operasi punca kuasa",
    s1Radicand: "Radikan (Nombor)",
    s1RadicandDesc: "Nombor di bawah tanda punca (contohnya 49 dalam √49)",
    s1Root: "Punca (Hasil)",
    s1RootDesc: "Nilai jawapan (contohnya 7)",

    s2Eyebrow: "Cara Guna",
    s2Title: "Cara Menggunakan Kalkulator Punca Kuasa Dua",
    s2Intro: "Dapatkan jawapan anda dalam tiga langkah mudah:",
    s2Steps: [
      { title: "Taip Nombor Anda", text: "Masukkan sebarang nombor ke dalam kotak input di atas." },
      { title: "Klik Kira", text: "Tekan butang Kira untuk memproses nombor anda secara pantas." },
      { title: "Lihat Hasil Jawapan", text: "Kalkulator memaparkan nilai perpuluhan tepat, bentuk dipermudah (contoh √72 = 6√2) dan jalan kerja." }
    ],
    s2Conclusion: "Alat ini memudahkan pengiraan tanpa perlu mengingati rumus rumit.",

    s3Eyebrow: "Notasi & Indeks",
    s3Title: "Notasi Punca Kuasa Dua: Simbol √ dan x^(1/2)",
    s3Intro: "Simbol √ ialah tanda punca kuasa piawai. √36 bertanyakan nombor apakah yang didarabkan dengan dirinya sendiri menghasilkan 36. Jawapannya ialah 6.",
    s3Cards: [
      { expr: "√", reason: "Simbol punca kuasa" },
      { expr: "36", reason: "Nombor radikan" },
      { expr: "6", reason: "Nilai punca utama" }
    ],
    s3P1: "Setiap ungkapan terdiri daripada simbol punca, radikan dan nilai punca.",
    s3P2: "Punca kuasa dua juga boleh ditulis dalam bentuk indeks pecahan:",
    s3P3: "Kedua-dua bentuk membawa erti yang sama. Bahasa komputer sering menggunakan x^(1/2).",
    s3Caption: "Kesetaraan antara simbol √x dan bentuk indeks pecahan x^(1/2)",
    s3ToggleRadical: "Bentuk Punca (√x)",
    s3ToggleExponent: "Bentuk Indeks (x^½)",
    s3ToggleCode: "Kod / Sintaks",

    s4Eyebrow: "Rumus Asas",
    s4Title: "Apakah Rumus Punca Kuasa Dua?",
    s4Intro: "Punca kuasa dua ditakrifkan oleh hubungan songsangan:",
    s4P1: "Nombor yang diperoleh apabila didarab dengan dirinya sendiri mestilah menghasilkan nombor permulaan.",
    s4PrincipalTitle: "Konvensyen Punca Kuasa Utama",
    s4PrincipalText: "Punca utama adalah nilai bukan negatif. Walaupun 5 dan -5 dikuasaduakan menjadi 25, secara piawai √25 = 5.",

    s5Eyebrow: "Hukum Punca Kuasa",
    s5Title: "Lima Hukum Penting Punca Kuasa Dua",
    s5Intro: "Hukum-hukum ini memudahkan pemudahan ungkapan algebra:",
    s5Laws: [
      {
        name: "1. Hukum Pendaraban",
        subtitle: "√(a × b) = √a × √b (untuk a ≥ 0, b ≥ 0)",
        example: "Contoh: √(4 × 9) = √4 × √9 = 2 × 3 = 6. Terus: √36 = 6.",
        explanation: "Membolehkan faktor dipisahkan untuk dipermudahkan (contoh √72 = 6√2)."
      },
      {
        name: "2. Hukum Pembahagian",
        subtitle: "√(a / b) = √a / √b (untuk a ≥ 0, b > 0)",
        example: "Contoh: √(16/4) = √16 / √4 = 4 / 2 = 2. Terus: √4 = 2.",
        explanation: "Punca kuasa bagi pecahan boleh dicari secara berasingan bagi pengangka dan penyebut."
      },
      {
        name: "3. Hukum Kuasa",
        subtitle: "√(a²) = |a| (nilai mutlak a)",
        example: "Contoh: √(7²) = √49 = 7. Kuasa dua dan punca kuasa saling membatalkan.",
        explanation: "Mengembalikan nilai mutlak nombor asal."
      },
      {
        name: "4. Pendaraban Kendiri",
        subtitle: "√a × √a = a",
        example: "Contoh: √13 × √13 = 13. √5 × √5 = 5.",
        explanation: "Mendarab punca dengan dirinya sendiri menghapuskan tanda punca (menisbahkan penyebut: 1/√5 = √5/5)."
      },
      {
        name: "5. Punca Bersarang",
        subtitle: "√(√a) = a^(1/4) (punca kuasa empat)",
        example: "Contoh: √(√16) = √4 = 2. Dan 16^(1/4) = 2.",
        explanation: "Punca kuasa daripada punca kuasa menghasilkan punca kuasa empat."
      }
    ],

    s6Eyebrow: "Kaedah Pengiraan",
    s6Title: "Cara Mengira Punca Kuasa Dua: 4 Kaedah",
    s6Intro: "Terdapat empat kaedah utama untuk mencari punca kuasa dua:",
    s6M1Title: "Kaedah 1: Menggunakan Kalkulator Dalam Talian Ini (Terpantas)",
    s6M1Text: "Masukkan nombor di atas dan klik butang Kira untuk jawapan segera.",
    s6M1Action: "Pergi ke Kalkulator",
    s6M2Title: "Kaedah 2: Pemfaktoran Perdana (Kuasa Dua Sempurna)",
    s6M2Intro: "Sesuai untuk nombor bulat dan kuasa dua sempurna.",
    s6M2ExTitle: "Contoh Pemfaktoran",
    s6M2Steps: [
      "1. Cerakinkan nombor kepada faktor perdana",
      "2. Kumpulkan faktor serupa secara berpasangan",
      "3. Keluarkan satu nombor daripada setiap pasangan ke luar punca",
      "4. Darabkan nombor-nombor di luar tanda punca"
    ],
    s6M3Title: "Kaedah 3: Kaedah Pembahagian Panjang",
    s6M3Intro: "Kaedah manual sistematik untuk mendapatkan ketepatan perpuluhan tanpa kalkulator.",
    s6M3Steps: [
      "1. Bahagikan digit kepada pasangan dari titik perpuluhan",
      "2. Cari kuasa dua terbesar bagi pasangan pertama",
      "3. Tolak, turunkan pasangan berikutnya dan gandakan punca semasa",
      "4. Cari digit cubaan dan ulangi"
    ],
    s6M3Text: "Kaedah manual klasik.",
    s6M4Title: "Kaedah 4: Anggaran Minda",
    s6M4Intro: "Sesuai untuk anggaran pantas secara spontan:",
    s6M4ExTitle: "Contoh: Menganggar √50",
    s6M4Steps: [
      "1. Kenal pasti kuasa dua terdekat: 49 < 50 < 64 (jadi 7 < √50 < 8)",
      "2. Oleh sebab 50 sangat hampir dengan 49, nilainya lebih sedikit daripada 7",
      "3. Anggaran: sekitar 7.07 (nilai sebenar: 7.0711...)"
    ],
    s6M4Note: "Asas kepada kaedah Babylon (kaedah lelaran Newton-Raphson).",

    s7Eyebrow: "Kuasa Dua Sempurna",
    s7Title: "Nombor Kuasa Dua Sempurna: Maksud dan Kepentingannya",
    s7Intro: "Kuasa dua sempurna ialah nombor bulat yang punca kuasanya ialah nombor bulat.",
    s7ThNumber: "Nombor (n)",
    s7ThSquare: "Kuasa Dua (n²)",
    s7ThRoot: "Punca (√n²)",
    s7Conclusion: "Menghafal 20 nombor kuasa dua sempurna pertama melancarkan pengiraan congak.",
    s7Caption: "Gambaran geometri segi empat sama bersisi n dengan keluasan n²",

    s8Eyebrow: "Nombor Bukan Nisbah",
    s8Title: "Bukan Kuasa Dua Sempurna & Punca Bukan Nisbah",
    s8Intro: "Apabila sesuatu nombor bukan kuasa dua sempurna, punca kuasanya ialah nombor bukan nisbah dengan perpuluhan tidak berulang tanpa penghujung.",
    s8Text: "Nombor ini tidak boleh ditulis sebagai pecahan biasa (seperti nombor π).",
    s8CalcNote: "Kalkulator kami memberikan nilai perpuluhan tepat dan bentuk punca dipermudah.",

    s9Eyebrow: "Perpuluhan & Pecahan",
    s9Title: "Punca Kuasa Dua Perpuluhan dan Pecahan",
    s9Intro: "Operasi punca kuasa dua terpakai kepada perpuluhan dan pecahan:",
    s9DecimalsTitle: "Nombor Perpuluhan",
    s9DecimalsIntro: "Perpuluhan dikira secara terus mengikut tempat perpuluhan:",
    s9FractionsTitle: "Nombor Pecahan",
    s9FractionsIntro: "Gunakan hukum pembahagian untuk mengira pengangka dan penyebut berasingan:",
    s9Conclusion: "Masukkan pecahan anda ke dalam kalkulator untuk semakan.",

    s10Eyebrow: "Nombor Kompleks",
    s10Title: "Punca Nombor Negatif & Unit Khayalan i",
    s10P1: "Dalam nombor nyata, nombor negatif tiada punca kuasa kerana kuasa dua sebarang nombor nyata sentiasa positif.",
    s10P2: "Oleh itu, matematik mentakrifkan unit khayalan i (i² = -1). Rumus: √(-a) = √a × i untuk a > 0.",
    s10P3: "Ini membentuk nombor kompleks (a + bi) yang asas dalam kejuruteraan elektrik dan fizik.",
    s10ExTitle: "Contoh Nombor Negatif",
    s10ExStep: "√(-1) = i, √(-4) = 2i, √(-9) = 3i, √(-16) = 4i, √(-81) = 9i",
    s10Conclusion: "Kalkulator memproses nombor negatif dan memaparkan hasil nombor khayalan secara automatik.",

    s11Eyebrow: "Operasi Songsang",
    s11Title: "Perbezaan Antara Mengkuasa Dua dan Punca Kuasa Dua",
    s11Intro: "Mengkuasa dua dan mencari punca kuasa dua ialah operasi matematik yang saling songsang.",
    s11ThOp: "Operasi",
    s11ThWhat: "Tindakan",
    s11ThEx: "Contoh",
    s11RowSquare: "Kuasa Dua (x²)",
    s11RowSquareDesc: "Mendarab nombor dengan dirinya sendiri",
    s11RowRoot: "Punca Kuasa Dua (√x)",
    s11RowRootDesc: "Mencari nombor yang apabila dikuasa dua menghasilkan x",
    s11Inverse: "Operasi membatalkan antara satu sama lain: √(8²) = √64 = 8, dan (√64)² = 8² = 64.",
    s11Absolute: "Mengkuasa dua membuang tanda negatif, maka terpakai: √(a²) = |a|.",

    s12Eyebrow: "Jadual Rujukan",
    s12Title: "Jadual Lengkap Punca Kuasa Dua 1 hingga 50",
    s12Intro: "Jadual rujukan pantas dari 1 hingga 50 dengan perpuluhan tepat dan bentuk dipermudah.",
    s12ChartLinkText: "Perlu jadual cetak sehingga 100? Layari Penjana Jadual kami.",
    s12ScrollHint: "Tatal ke bawah untuk melihat kesemua 50 nilai ↓",
    s12ColNumber: "Nombor (n)",
    s12ColRoot: "Perpuluhan (√n)",
    s12ColSimplified: "Bentuk Dipermudah",
    s12ColType: "Jenis",
    s12BadgePerfect: "Kuasa Dua Sempurna",
    s12BadgeIrrational: "Bukan Nisbah",
    s12FilterAll: "Semua Nombor (1–50)",
    s12FilterPerfect: "Kuasa Dua Sempurna Sahaja",
    s12FilterIrrational: "Bukan Nisbah Sahaja",
    s12SearchPlaceholder: "Cari nombor atau punca (contoh 25, √2)...",

    s13Eyebrow: "Permudahan",
    s13Title: "Contoh Mempermudah Bentuk Punca",
    s13Intro: "Mempermudah punca bermaksud mengeluarkan faktor kuasa dua sempurna terbesar:",
    s13ThExpr: "Punca Asal",
    s13ThForm: "Bentuk Dipermudah",
    s13ThWhy: "Pemfaktoran & Sebab",
    s13Conclusion: "Hukum pendaraban membolehkan faktor nombor bulat dikeluarkan daripada tanda punca.",

    s14Eyebrow: "Aplikasi Harian",
    s14Title: "Aplikasi Sebenar Punca Kuasa Dua",
    s14Intro: "Punca kuasa dua diaplikasikan dalam sains, pembinaan dan perniagaan:",
    s14Apps: [
      { title: "Pembinaan dan Seni Bina", text: "Teorem Pythagoras (a² + b² = c²) untuk menentukan sudut tepat dan pepenjuru (contoh √(3² + 4²) = 5 m)." },
      { title: "Kewangan dan Pelaburan", text: "Sisihan piawai untuk mengukur risiko dan kemeruapan pelaburan ialah punca kuasa dua bagi varians." },
      { title: "Fizik dan Kejuruteraan", text: "Halaju jatuh bebas (v = √(2gh)), ayunan bandul dan litar elektrik arus ulang-alik." },
      { title: "Sains Komputer & Grafik 3D", text: "Pengiraan jarak Euclidean dalam permainan video dan kecekapan algoritma √n." },
      { title: "Pengukuran Seharian", text: "Mengira panjang dinding bilik daripada keluasannya: bilik 64 m² mempunyai sisi sepanjang √64 = 8 m." }
    ],

    s15Eyebrow: "Soalan Lazim",
    s15Title: "Soalan Lazim (FAQ)",
    s15Faqs: [
      {
        question: "Bagaimanakah cara menggunakan kalkulator ini?",
        answer: "Masukkan nombor di atas dan klik Kira. Hasil perpuluhan tepat, bentuk dipermudah dan langkah pengiraan akan dipaparkan segera."
      },
      {
        question: "Apakah maksud «racine carrée»?",
        answer: "«Racine carrée» ialah bahasa Perancis bagi punca kuasa dua — nombor yang apabila didarabkan dengan dirinya menghasilkan nilai tersebut."
      },
      {
        question: "Bolehkah kalkulator mengira nombor negatif?",
        answer: "Boleh, kalkulator akan memberikan jawapan nombor kompleks menggunakan unit khayalan i (contohnya √(-16) = 4i)."
      },
      {
        question: "Apakah perbezaan antara punca kuasa dua dan punca kuasa tiga?",
        answer: "Punca kuasa dua mendarab 2 kali (darjah 2), manakala punca kuasa tiga mendarab 3 kali (darjah 3)."
      },
      {
        question: "Bagaimana mengira punca tanpa kalkulator?",
        answer: "Menggunakan pemfaktoran perdana, pembahagian panjang bersusun atau anggaran kaedah Babylon."
      },
      {
        question: "Apakah nombor kuasa dua sempurna?",
        answer: "Nombor bulat yang punca kuasanya ialah nombor bulat (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)."
      },
      {
        question: "Adakah semua punca kuasa dua nombor nisbah?",
        answer: "Tidak, hanya kuasa dua sempurna menghasilkan nombor nisbah. Yang lain menghasilkan nombor bukan nisbah."
      },
      {
        question: "Adakah kalkulator ini percuma?",
        answer: "Ya, ia 100% percuma, tanpa had dan tidak memerlukan sebarang pendaftaran."
      },
      {
        question: "Bolehkah saya mencari punca bagi pecahan?",
        answer: "Boleh, masukkan sebarang nombor perpuluhan atau pecahan ke dalam kalkulator."
      },
      {
        question: "Apakah itu punca utama?",
        answer: "Punca utama ialah nilai bukan negatif yang diwakili oleh simbol √ mengikut konvensyen matematik."
      }
    ],

    s16Eyebrow: "Rumusan",
    s16Title: "Rumusan Ringkas & Pengajaran",
    s16BoxTitle: "Prinsip Penting",
    s16BoxText: "Punca kuasa dua menjawab soalan mudah: apakah nombor yang apabila didarab dengan dirinya menghasilkan nilai ini? Gunakan alat kami untuk jawapan tepat pada bila-bila masa.",

    quickCalcLabel: "Pengiraan Pantas",
    quickCalcSublabel: "Klik sebarang nombor untuk melihat hasilnya serta-merta"
  }
};
