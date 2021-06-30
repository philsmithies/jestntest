const reverseString = require ('./reverseString')

test('reverses the string', () => {
  expect(reverseString ('hello')).toBe('olleh')
})

test('it works with spaces', () =>{
  expect(reverseString ('hello world')).toBe('dlrow olleh')
})

test('it works with numbers', () =>{
  expect(reverseString ('12345')).toBe('54321')
})