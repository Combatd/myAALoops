function abbreviate(word) {
    const vowels = 'aeiou';
    let newStr = word.replace(/[aeiou]/g, ''); // we could also put in every single consonant manually in the RegEx
    return newStr;
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'