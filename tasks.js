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
