/*
Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.
*/

function countVowels(word) {
    const vowels = 'aeiou';
    let vowelCounter = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) vowelCounter++;
    }
    return vowelCounter;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2