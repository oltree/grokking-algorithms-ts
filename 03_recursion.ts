const countdown = (i: number): null => {
  console.log(i);

  if (i <= 0) {
    return null;
  }

  countdown(i - 1);

  return null;
};

//

const greet2 = (name: string): void => {
  console.log('how are you, ' + name + '?');
};

const bye = (): void => {
  console.log('ok bye!');
};

const greet = (name: string): void => {
  console.log('hello, ' + name + '!');

  greet2(name);

  console.log('getting ready to say bye...');

  bye();
};

//

const fact = (x: number): number => {
  if (x === 1) {
    return x;
  }

  return x * fact(x - 1);
};
