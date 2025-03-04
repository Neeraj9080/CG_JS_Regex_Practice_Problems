function validateEmail(email) {
  const pattern = /^[a-zA-Z]{3,}@([a-zA-Z]{3,})$/;
  return pattern.test(email);
}

console.log(validateEmail("abc@bridgelabz"));  // true
console.log(validateEmail("abcbrid"));          // false