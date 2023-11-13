const createMatrix = (rows: number = 0, columns: number = 0): number[][] => {
  const matrix: number[][] = [];

  for (let i = 0; i < rows; i++) {
    matrix[i] = Array(columns).fill(0);
  }

  return matrix;
};

const longestSubstring = (
  firstWord: string = '',
  secondWord: string = ''
): string => {
  const matrix: number[][] = JSON.parse(
    JSON.stringify(createMatrix(firstWord.length, secondWord.length))
  );
  let sizeSequence = 0;
  let indexSequence = 0;

  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 0; j < secondWord.length; j++) {
      if (firstWord[i] === secondWord[j]) {
        matrix[i][j] = (i && j) > 0 ? matrix[i - 1][j - 1] + 1 : 1;

        if (matrix[i][j] >= sizeSequence) {
          sizeSequence = matrix[i][j];
          indexSequence = i + 1;
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  return firstWord.slice(indexSequence - sizeSequence, indexSequence);
};
