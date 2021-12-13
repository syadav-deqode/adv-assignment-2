// Write a regex function to distinguish and pick the values of email address, phone number from the below paragraph
const str = `Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. mytraining@deqode.com Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.`;
// Email regex
const emailRgx = new RegExp(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
// Pull out all the emails from text
const extractEmails = str => str.match(emailRgx);
// Call the function and collect result
const emails = extractEmails(str)

console.log(`Emails from the above paragraph.....`, emails)
// Phone regex
const phoneRgx = new RegExp(/(?:[-+() ]*\d){10,13}/gm)
// Function to pull out all the phones from string, and remove the spaces
const extractPhones = str => str.match(phoneRgx).map(s => s.trim())
// Calling the function, and take the result
const phones = extractPhones(str)

console.log(`Phones from the string....`, phones)