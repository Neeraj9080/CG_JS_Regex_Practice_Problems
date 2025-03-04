function validateEmail(email) {
  const pattern = /^[a-zA-Z]{3,}$/;
  return pattern.test(email);
}

console.log(validateEmail("abc"));  // true
console.log(validateEmail("ab"));    // false