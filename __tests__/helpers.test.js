const {format_date, format_plural} = require('../utils/helpers');
const expectExport = require("expect");

test('format_date() returns a date string', () => {
  const date = new Date('2020-03-20 16:12:03');

  expectExport(format_date(date)).toBe('3/20/2020');
});

test('format_plural() correctly pluralizes words based on number entered', () => {
  expectExport(format_plural('Tiger', 2)).toBe('Tigers');
  expectExport(format_plural('Lion', 1)).toBe('Lion');
});