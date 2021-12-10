const visaRgx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
const visaCard = 4012888888881881

// function isValidVisaCard(cardNumber) {
//   const valid = String(cardNumber).match(visaRgx)
//   return valid ? true : false
// }

// Es6 way
const isValidVisaCard = cardNumber => String(cardNumber).match(visaRgx) ? true : false

const isCardValid = isValidVisaCard(visaCard)

console.log(`isCardValid`, isCardValid)