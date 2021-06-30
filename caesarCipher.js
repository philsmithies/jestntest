function caesarCipher(string, option) {
  const newArr = []
  this.alphabet = 'abcdefghijklomnopqrstuvwxyz'.split('')

  string.split('').forEach((element, index) => {
    if (this.alphabet.indexOf(element) + option > 26) {
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