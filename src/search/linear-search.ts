import { expect, test } from 'vitest';

function linearSearch(haystack: Array<number>, needle: number): boolean {
  for (const element of haystack) {
    if (element === needle) {
      return true;
    }
  }
  return false;
}

test('linear search array', function () {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69_420];
  expect(linearSearch(foo, 69)).toEqual(true);
  expect(linearSearch(foo, 1336)).toEqual(false);
  expect(linearSearch(foo, 69_420)).toEqual(true);
  expect(linearSearch(foo, 69_421)).toEqual(false);
  expect(linearSearch(foo, 1)).toEqual(true);
  expect(linearSearch(foo, 0)).toEqual(false);
});
