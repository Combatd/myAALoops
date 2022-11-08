// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let hashedString = new String('');

  for (let i = 0; i < string.length; i++) {
    let currentCharacter = string[i]; // reference/pointer to character in string
    let currentCharacterIsLetter = alphabet.includes(currentCharacter);
    if (currentCharacterIsLetter) {
      let shiftedIndexOfStringChar = alphabet.indexOf(currentCharacter) + num;
      hashedString = hashedString + alphabet[shiftedIndexOfStringChar % 26];
    } else {
      hashedString += currentCharacter;
    }
  }
  return hashedString;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"