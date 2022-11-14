import { slugify } from '../string';

it('return slugified string', () => {
  expect(slugify('')).toBe('');
  expect(slugify('     ')).toBe('');
  expect(slugify('   abc   ')).toBe('abc');
  expect(slugify('   a    bc   ')).toBe('a-bc');

  expect(slugify(' 1234567890 - abc')).toBe('1234567890-abc');

  expect(slugify('Special characters? ,.!"#€%&/()=?*')).toBe(
    'special-characters'
  );

  expect(slugify('Ääkköset Testiin ja ruåtsalainen Åå')).toBe(
    'aakkoset-testiin-ja-ruatsalainen-aa'
  );

  expect(slugify('This string should get slugified')).toBe(
    'this-string-should-get-slugified'
  );
});
