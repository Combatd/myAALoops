function vowelCipher(string) {
  const vowels = 'aeiou';

  let hashedString = '';

  for (let i = 0; i < string.length; i++) {
    let currentCharacter = string[i];
    let currentCharacterIsAVowel = vowels.includes(currentCharacter);
    if (currentCharacterIsAVowel) {
      let currentVowelIndex = vowels.indexOf(currentCharacter);
      let nextVowel = vowels[(currentVowelIndex + 1) % 5]; // modulus of number of vowels in alphabet
      hashedString += nextVowel;
    } else {
      hashedString += currentCharacter;
    }
  }
  return hashedString;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"