import score from './bowling.js';

test('should sore a zero', () => {
  let result = score('- - - - - - - - - -');
  expect(result).toBe(0);
});
