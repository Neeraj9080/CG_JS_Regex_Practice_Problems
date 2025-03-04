function validatePIN(pin) {
    const pattern = /^\d{6}$/;
    return pattern.test(pin);
  }
  
  console.log(validatePIN("A400088"));  // false