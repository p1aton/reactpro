/* eslint-disable radix */
/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
// Работа с простыми типами

function concat(a: string, b: string) {
  return a + b;
}

const result = concat('Hello ', 'World');

result;

// Работа с простыми типами

interface HometaskInterf {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData: { howIDoIt: string; simeArray: [string, number] }[];
}

const myHometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

// Типизация функций, используя Generic

interface MyArray<T> {
  reduce<T>(fn: (arg: T) => T): T;
}

let arr = [1, 2, 3, 4, '5'];

let results = arr.reduce<number>(
  (sum, current) => sum + (typeof current === 'string' ? parseInt(current) : current),
  0,
);

results;
