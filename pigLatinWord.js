function pigLatinWord(word) {
  // we first want to split the characters by spaces
  let str = word.slice();
  const vowels = 'aeiou';
  // If the first character isn’t a vowel then we move on to our else block
    if (vowels.indexOf(str[0]) > -1)  { // returns -1 when indexOf for vowels is not found
        str += 'yay';
        return str;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0; // global match of RegEx for the vowels
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"