const capitalize = require('./capitalize')

test('it capitalizes the first letter', () => {
  expect(capitalize ('hello')).toBe('Hello')
})