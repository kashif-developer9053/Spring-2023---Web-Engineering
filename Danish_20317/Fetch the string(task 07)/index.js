function findStringIndex(longStr, shortStr) {
  // Check if the long string is shorter than the short string
  if (longStr.length < shortStr.length) {
    return -1; // short string can't be inside long string
  }

  // Loop through the long string and compare substrings to the short string
  for (let i = 0; i <= longStr.length - shortStr.length; i++) {
    if (longStr.substr(i, shortStr.length) === shortStr) {
      return i; // short string found at index i
    }
  }

  return -1; // short string not found in long string
}

// Example usage
const longStr = "I am the greatest, I said that even before I knew I was. ~ Great Muhammad Ali ";
const shortStr = "Muhammad Ali";
const index = findStringIndex(longStr, shortStr);

if (index !== -1) {
  console.log(`'${shortStr}' found at index ${index} in '${longStr}'`);
} else {
  console.log(`'${shortStr}' not found in '${longStr}'`);
}
