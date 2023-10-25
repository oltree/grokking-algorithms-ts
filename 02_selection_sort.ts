const findSmallestIndex = <T>(array: T[]): number => {
  let smallestIndex = 0;
  let smallestElement = array[smallestIndex];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

const selectionSort = <T>(array: T[]): T[] => {
  const sortedArray: T[] = [];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    const smallestIndex = findSmallestIndex(array);
    sortedArray.push(array.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
};

console.log(selectionSort([22, 12, 1, 7, 3, 6, 9, 25, 17]));
