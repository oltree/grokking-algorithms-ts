function debounce(fn, delay = 200) {
  let timeout;

  return function () {
    const fnCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);

    timeout = setTimeout(fnCall, delay);
  };
}

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
