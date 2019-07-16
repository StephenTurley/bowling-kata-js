import score from './bowling.js';

describe('score', () => {
  test('should sore a zero', () => {
    let result = score('-- -- -- -- -- -- -- -- -- --');
    expect(result).toBe(0);
  });

  test('should score 9s', () => {
    let result = score('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-');
    expect(result).toBe(90);
  });

  test('should score spares', () => {
    let result = score('1/ 1/ 1/ 1/ 1/ 1/ 1/ 1/ 1/ 1/-');
    expect(result).toBe(110);
  });
});
