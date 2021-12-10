const visaRgx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/

function isValidVisaCard(cardNumber) {
  const valid = String(cardNumber).match(visaRgx)
  return valid ? true : false
}

const visaCard = 4012888888881881

const isCardValid = isValidVisaCard(visaCard)

console.log(`isCardValid`, isCardValid)