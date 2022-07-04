function tripletTrue(str) {
    for (let i = 0; i < str.length; i++) {
        if((i + 2) >= str.length) {
            return false;
        }
        if(str[i] === str[i + 1] && str[i] === str[i + 2]) {
            return true
        }
    }
}

console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false