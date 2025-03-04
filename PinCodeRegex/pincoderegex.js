function validatePIN(pin) {
  const pattern = /^\d{3} \d{3}$|^\d{6}$/;
  return pattern.test(pin);
}

console.log(validatePIN("400 088"));  // true
console.log(validatePIN("400088"));    // true