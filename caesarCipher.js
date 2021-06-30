function caesarCipher(string, option) {
  this.alphabet = 'abcdefghijklomnopqrstuvwxyz'.split('')
  const newArr = []
  string.split('').forEach((element, index) => {
    newArr.push(this.alphabet[this.alphabet.indexOf(element) + option])
  });
  return newArr.join('')
}

module.exports = caesarCipher;