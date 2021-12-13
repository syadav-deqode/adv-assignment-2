const visaRgx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
const visaCard = 4012888888881881

// function isValidVisaCard(cardNumber) {
//   const valid = String(cardNumber).match(visaRgx)
//   return valid ? true : false
// }

// Es6 way
// const isValidVisaCard = cardNumber => String(cardNumber).match(visaRgx) ? true : false

// const isCardValid = isValidVisaCard(visaCard)

// console.log(`isCardValid`, isCardValid)

const allCards = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/

const americanCard = 378282246310005

const isValidCard = cardNumber => String(cardNumber).match(allCards) ? true : false

console.log(`isValidCard()`, isValidCard(americanCard))