// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber

test('valid phone number with area code parentheses', () => {

  expect(isPhoneNumber('(123) 456-7890')).toBe(true);

});

test('valid phone number with hyphen area code', () => {

  expect(isPhoneNumber('123-456-7890')).toBe(true);

});

test('invalid phone number with letters', () => {

  expect(isPhoneNumber('abc-def-ghij')).toBe(false);

});

test('invalid phone number missing digits', () => {

  expect(isPhoneNumber('123-45')).toBe(false);

});

// isEmail

test('valid email with simple domain', () => {

  expect(isEmail('student@example.com')).toBe(true);

});

test('valid email with underscore username', () => {

  expect(isEmail('richa_jos@test.org')).toBe(true);

});

test('invalid email missing @', () => {

  expect(isEmail('studentexample.com')).toBe(false);

});

test('invalid email with long extension', () => {

  expect(isEmail('student@example.website')).toBe(false);

});

// isStrongPassword

test('valid strong password with letters and numbers', () => {

  expect(isStrongPassword('Password123')).toBe(true);

});

test('valid strong password with underscore', () => {

  expect(isStrongPassword('abc_1234')).toBe(true);

});

test('invalid password starting with number', () => {

  expect(isStrongPassword('1Password')).toBe(false);

});

test('invalid password too short', () => {

  expect(isStrongPassword('abc')).toBe(false);

});

// isDate

test('valid date with one digit month and day', () => {

  expect(isDate('1/2/2026')).toBe(true);

});

test('valid date with two digit month and day', () => {

  expect(isDate('12/25/2026')).toBe(true);

});

test('invalid date with dashes', () => {

  expect(isDate('12-25-2026')).toBe(false);

});

test('invalid date with two digit year', () => {

  expect(isDate('12/25/26')).toBe(false);

});

// isHexColor

test('valid 3 character hex color with #', () => {

  expect(isHexColor('#fff')).toBe(true);

});

test('valid 6 character hex color without #', () => {

  expect(isHexColor('A1B2C3')).toBe(true);

});

test('invalid hex color with bad character', () => {

  expect(isHexColor('#ggg')).toBe(false);

});

test('invalid hex color with too many characters', () => {

  expect(isHexColor('#1234567')).toBe(false);

});