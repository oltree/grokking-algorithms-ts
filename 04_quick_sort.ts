const sum = (arr: number[]): number => {
  let result = 0;

  arr.forEach((number) => (result += number));

  return result;
};

const recursiveSum = (arr: number[]): number => {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + recursiveSum(arr.slice(1));
};

const recursiveCounter = <T>(list: T[]): number => {
  if (list.length === 1) {
    return 1;
  }

  return 1 + recursiveCounter(list.slice(1));
};

const recursiveMax = (arr: number[]): number | null => {
  if (arr.length === 0) {
    return null;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const subMax = recursiveMax(arr.slice(1));

  return arr[0] > Number(subMax) ? arr[0] : subMax;
};

const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }

  const supportElement = arr[0];
  const less = arr.slice(1).filter((el) => el <= supportElement);
  const bigger = arr.slice(1).filter((el) => el > supportElement);

  return quickSort(less).concat(supportElement, quickSort(bigger));
};
