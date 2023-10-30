const debounce = (fn, delay = 200) => {
  let timeout;

  return function () {
    const fnCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);

    timeout = setTimeout(fnCall, delay);
  };
};
