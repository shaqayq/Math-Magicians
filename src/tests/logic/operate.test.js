import operate from '../../logic/operate';

describe.each([
  [1, 1, '-', '0'],
  [1, 2, '+', '3'],
  [2, 15, 'x', '30'],
  [2, 1, '÷', '2'],
  [1, 2, '÷', '0.5'],
  [2, 1, '%', '0'],
  [3, 2, '%', '1'],
  [2, 1, '-', '1'],
])('.operate(%i, %i)', (a, b, sign, expected) => {
  test('sign  should be of type string', () => {
    expect(typeof sign === 'string').toBe(true);
  });
  test('input values  should be numbers', () => {
    expect(typeof a === 'number').toBe(true);
    expect(typeof b === 'number').toBe(true);
  });
  test(`returns ${expected}`, () => {
    expect(operate(a, b, sign)).toBe(expected);
  });
});

test(`Can't divide by 0.`, () => {
  expect(operate(55,0, '÷')).toBe(`Can't divide by 0.`)
});

test(`Should throw error`, () => {
  expect(()=>{
    operate(55,10, '/')
  }).toThrowError(`Unknown operation '/'`)
});