function caeserCipher(string, option) {
  this.alphabet = 'abcdefghijklomnopqrstuvwxyz'.split('')
  return this.alphabet[0]
}

module.exports = caeserCipher;