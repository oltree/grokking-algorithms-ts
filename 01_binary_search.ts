const binary_search = <T>(list: T[], item: T): number | null => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const guess = list[middle];

    if (guess === item) {
      return middle;
    }

    if (guess > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return null;
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binary_search(list, 8));
console.log(binary_search(list, 20));
console.log(binary_search(list, -5));
