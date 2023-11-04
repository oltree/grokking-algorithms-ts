interface HashTable<T> {
  [key: string]: T;
}

const book: HashTable<number> = {};

book['apple'] = 0.67;
book['milk'] = 1.49;
book['avocado'] = 1.49;

//

const voted: HashTable<boolean> = {};

const checkVoter = (name: string): void => {
  if (voted[name]) {
    console.log('kick them out!');
  } else {
    voted[name] = true;
    console.log('let them vote!');
  }
};
