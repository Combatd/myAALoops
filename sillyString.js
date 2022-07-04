function sillyString(word) {
    const vowels = 'aeiou';
    let newStr = '';
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            newStr += word[i] + 'b' + word[i];
        } else {
            newStr += word[i];
        }
    }
    return newStr;
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber