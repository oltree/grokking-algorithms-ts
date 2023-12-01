//функция задержки
function debounce(fn, delay = 200) {
  let timeout;

  return function () {
    const fnCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);

    timeout = setTimeout(fnCall, delay);
  };
}

//функция задержки
function throttle(fn, delay = 100) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;

      return;
    }

    fn.apply(this, arguments);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = true;

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, delay);
  }

  return wrapper;
}

// бинарный поиск 2 реализация
const search = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (num === arr[mid]) {
      return mid;
    }

    if (num < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

//объединение интервалов
const merge = (intervals) => {
  if (intervals.length == 0) {
    return [];
  }

  if (intervals.length == 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let interval of intervals) {
    let recentInterval = result[result.length - 1];

    if (recentInterval[1] >= interval[0]) {
      recentInterval[1] = Math.max(recentInterval[1], interval[1]);
    } else {
      result.push(interval);
    }
  }

  return result;
};

//лучшее время для покупки акций
const maxProfit = (prices) => {
  let result = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      res += prices[i] - prices[i - 1];
    }
  }

  return result;
};

//глубокое клонирование объекта
const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }

  return copy;
};

//палиндром
const palindrom = (str) => {
  str = str.toLowerCase().replace(/\s/g, '');

  return str === str.split('').reverse().join('');

  /* const length = Math.floor(str.length / 2);
  for (let i = 0; i < length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true; */
};

//найти количество цифр
const result1 = (arr) => {
  return arr.reduce((acc, num) => {
    if (acc[num]) {
      acc[num] += 1;
    } else {
      acc[num] = 1;
    }

    return acc;
  }, {});
};
const reslut2 = (arr) => {
  const countMap = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (countMap[num]) {
      countMap[num] += 1;
    } else {
      countMap[num] = 1;
    }
  }

  return countMap;
};

//фибоначчи
const fibonacci = (num) => {
  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result[num];

  /* if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2); */
};

//Class Names
const getClassNames = (arr) => {
  const classNames = arr.reduce((acc, num) => {
    if (acc[num]) {
      acc[num] += 1;
    } else {
      acc[num] = 1;
    }

    return acc;
  }, {});

  const result = Object.keys(classNames).sort(
    (a, b) => classNames[b] - classNames[a]
  );

  return result;
};

//currencies
const getCurrencies = (arr) => {
  const result = {};

  arr.forEach((item) => {
    let [currency, type, amount] = item;

    if (!result[currency]) {
      result[currency] = [0, 0];
    }

    result[currency][type === 'buy' ? 0 : 1] += amount;
  });

  return result;

  /* return arr.reduce((acc, curr) => {
    acc[curr[0]] = acc[curr[0]] || [0, 0];
    acc[curr[0]][curr[1] === 'buy' ? 0 : 1] += curr[2];
    return acc;
}, {}) */
};

//простые числа
const isPrime = (num) => {
  const max = Math.sqrt(num);

  for (let i = 2; i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
};

//сумма 2
const sumOfTwo = (arr, target) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }

  return result;
};

//вернуть длину уникальных элементов
const removeDuplicates = (nums) => {
  let start = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] != nums[i + 1]) {
      nums[start++] = nums[i];
    }
  }

  return start;
};

//удалить дубликаты
const uniqArray = array.reduce((uniq, item) => {
  return uniq.includes(item) ? uniq : [...uniq, item];
}, []);

//поиск непарного числа
const singleNumber = (nums) => {
  const uniq = [...new Set(nums)];

  const reduceSumm = (s, i) => s + i;

  const numSum = nums.reduce(reduceSumm);

  const uniqSum = uniq.reduce(reduceSumm);

  return uniqSum * 2 - numSum;
};

//числовые паиндромы
const isPalindromeNumber = (x) => {
  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;

  let rev = 0;

  while (x > rev) {
    rev *= 10;
    rev += x % 10;
    x = Math.trunc(x / 10);
  }

  return x === rev || x === Math.trunc(rev / 10);
};
