function validateEmail(email) {
  const pattern = /^[a-zA-Z]{3,}@([a-zA-Z]{3,})\.([a-zA-Z]{2,})$/;
  return pattern.test(email);
}

console.log(validateEmail("abc@bridgelabz.co"));  // true
console.log(validateEmail("abc@bridgelabz.c"));   // false