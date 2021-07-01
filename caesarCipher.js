function caesarCipher(string, option) {
  const newArr = []
  this.alphabet = 'abcdefghijklomnopqrstuvwxyz'.split('')
  let regex = /[a-z]/

  string.split('').forEach((element, index) => {
    if (regex.test(element) === false) {
      newArr.push(element)
    } else if (this.alphabet.indexOf(element) + option > 26) {
      newArr.push(this.alphabet[this.alphabet.indexOf(26 - index) + option])
    } else {
      newArr.push(this.alphabet[this.alphabet.indexOf(element) + option])
    }
  });
  return newArr.join('')
}

module.exports = caesarCipher;

// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!