const p = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const email = 'test@test.io'

function isValidEmail(email) {
  const valid = email.match(p)
  return valid ? true : false
}

const result = isValidEmail(email)

console.log(`result`, result)