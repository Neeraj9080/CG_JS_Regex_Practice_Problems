function validatePIN(pin) {
    const pattern = /^\d{6}$/;
    return pattern.test(pin);
  }
  
  console.log(validatePIN("400088B"));  // false