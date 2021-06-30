const caeserCipher = require('./caeserCipher')

test('it can multiply two numbers', () => {
  expect(caeserCipher('hello', 2)).toBe(10)
})