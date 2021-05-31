import stringToCapitalize from './toCapitalizeFirstLetter';

describe('stringToCapitalize', () => {
  test('Функция должна возвращать строку, начинающуюся с заглавной', () => {
    const result = stringToCapitalize('some String');

    expect(result).toBe('Some string');
  });
});
