/*
Write a function hasVowel(str) that takes in a string. 
The function should return a boolean, true if the string contains at least one vowel, 
false otherwise.
*/

function hasVowel(str) {
    const vowels = 'aeiou';
    for (let i = 0; i < vowels.length; i++) {
        if (str.includes(vowels[i])) {
            return true;
        }
    }
    return false;
}

console.log(hasVowel('dog')); // true
console.log(hasVowel('conventional')); // true
console.log(hasVowel('rhythm')); // false