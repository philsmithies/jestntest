const ArrayAnalysis = require('./arrayAnalysis')
const object = [1,8,3,4,2,6];

test('it returns the minimum of an array', () =>{
  expect(ArrayAnalysis(object).min).toBe(1)
})

test('it returns the maximum of an array', () =>{
  expect(ArrayAnalysis(object).max).toBe(8)
})

test('it returns the average of an array', () =>{
  expect(ArrayAnalysis(object).average).toBe(4)
})

test('it returns the length of an array', () =>{
  expect(ArrayAnalysis(object).length).toBe(6)
})

test('it returns all the values analyzing an array', () =>{
  expect(ArrayAnalysis(object).all).toEqual({"average": 4, "length": 6, "max": 8, "min": 1})
})