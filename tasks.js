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
