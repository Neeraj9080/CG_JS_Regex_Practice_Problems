function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9_.+-]{3,}@([a-zA-Z0-9-]{3,})\.([a-zA-Z]{2,})$/;
  return pattern.test(email);
}

console.log(validateEmail("abc.xyz@bridgelabz.co"));  // true
console.log(validateEmail("abc@bridgelabz.co"));      // true