import { expect, test } from 'vitest';

function twoCrystalBalls(breaks: Array<boolean>) {
  const jumpN = Math.floor(Math.sqrt(breaks.length));

  let index = jumpN;
  for (; index < breaks.length; index += jumpN) {
    if (breaks[index]) {
      break;
    }
  }

  index -= jumpN;

  for (let innerIndex = 0; innerIndex < jumpN && index < breaks.length; ++innerIndex, ++index) {
    if (breaks[index]) {
      return index;
    }
  }
  return -1;
}

test('two crystal balls', function () {
  const index = Math.floor(Math.random() * 10_000);
  const data = Array.from({ length: 10_000 }, () => false);

  for (let index_ = index; index_ < 10_000; ++index_) {
    data[index_] = true;
  }

  expect(twoCrystalBalls(data)).toEqual(index);
  expect(twoCrystalBalls(Array.from({ length: 821 }, () => false))).toEqual(-1);
});
