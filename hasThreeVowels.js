function hasThreeVowels(str) {
    let vowels = 'aeiou';
    const vowelArr = [];

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i]) && !vowelArr.includes(str[i])) {
            vowelArr.push(str[i]);
        }
        if(vowelArr.length >= 3) return true;
    }
    return false;
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false