const caesarCipher = require('./caesarCipher')

test('it can encrypt a message with options', () => {
  expect(caesarCipher('hello', 2)).toBe('jgmmn')
})

test('it can decrypt messages', () => {
  expect(caesarCipher('ejgxcm', -2)).toBe('cheval')
})

test('it can work past the end of the alphabet', () => {
  expect(caesarCipher('zebra', 2)).toBe('bgdtc')
})

test('it can work with punctuation', () => {
  expect(caesarCipher('hello, world', 2)).toBe('jgmmn, yntmf')
})

// reg ex?

// lower case