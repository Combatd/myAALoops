/*
Write a function doubleLetterCount that takes in a string and 
returns the number of times that the same letter repeats twice in a row.
*/

function doubleLetterCount(string) {
  let characterRepeatCount = 0; // we don't care which character it is, just want as many "double letters" consecutive as possible
  for (let i = 0; i < string.length - 1; i++) {
    let currentCharacter = string[i];
    let nextCharacter = string[i + 1];
    let doubleLettersShowed = currentCharacter === nextCharacter;
    if (doubleLettersShowed) {
      characterRepeatCount += 1;
    }
  }
  return characterRepeatCount;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1