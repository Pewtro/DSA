import { expect, test } from 'vitest';

function binarySearch(haystack: Array<number>, needle: number) {
  let low = 0;
  let high = haystack.length;

  while (low < high) {
    const midpoint = Math.floor(low + (high - low) / 2);
    const value = haystack[midpoint];

    if (!value) return;

    if (value === needle) {
      return true;
    } else if (value > needle) {
      high = midpoint;
    } else {
      low = midpoint + 1;
    }
  }

  return false;
}

test('binary search array', function () {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69_420];
  expect(binarySearch(foo, 69)).toEqual(true);
  expect(binarySearch(foo, 1336)).toEqual(false);
  expect(binarySearch(foo, 69_420)).toEqual(true);
  expect(binarySearch(foo, 69_421)).toEqual(false);
  expect(binarySearch(foo, 1)).toEqual(true);
  expect(binarySearch(foo, 0)).toEqual(false);
});
