function capitalize(word) {
  const wordArr = word.split("");
  wordArr[0] = wordArr[0].toUpperCase()
  return wordArr.join('')
}
module.exports = capitalize;