// Function to process the list of product codes
function processData(codes) {
  const validCodes = [];
  let invalidCount = 0;

  // Check each code in the input list
  for (const code of codes) {
    if (isValidCode(code)) {
      validCodes.push(code.toUpperCase()); // Normalize and store valid code
    } else {
      invalidCount++; // Count invalid codes
    }
  }

  // Sort valid codes alphabetically
  validCodes.sort();

  // Prepare and return the result
  return {
    totalCodes: codes.length,
    validCodes: validCodes.length,
    invalidCodes: invalidCount,
    normalizedValidCodes: validCodes
  };
}

// Helper function to validate a code
function isValidCode(code) {
  if (code.length !== 7) return false;

  // Check first 3 characters are letters
  for (let i = 0; i < 3; i++) {
    if (!isLetter(code[i])) return false;
  }

  // Check last 4 characters are digits
  for (let i = 3; i < 7; i++) {
    if (!isDigit(code[i])) return false;
  }

  return true;
}

// Helper function to check if a character is a letter
function isLetter(char) {
  const upper = char.toUpperCase();
  return upper >= 'A' && upper <= 'Z';
}

// Helper function to check if a character is a digit
function isDigit(char) {
  return char >= '0' && char <= '9';
}

module.exports = { processData };

// Example test if the file is run directly
if (require.main === module) {
  const sampleData = ["abc1234", "XYZ0001", "123ABCD", "A1B2C3D", "lmn9876", "DEF5678"];
  console.log(processData(sampleData));
}
