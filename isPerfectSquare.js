function isPerfectSquare(number) {
    if (number === 1) return true; // 1 * 1 always equals 1
    if (number < 4) return false;

    let index = 2;
    while (index < number) {
        if(index * index > number) {
            return false
        } else if (index * index === number) {
            return true;
        }
        index += 1
    }
}

console.log(isPerfectSquare(1))     // true
console.log(isPerfectSquare(4))     // true
console.log(isPerfectSquare(64))    // true
console.log(isPerfectSquare(100))   // true
console.log(isPerfectSquare(169))   // true
console.log(isPerfectSquare(2))     // false
console.log(isPerfectSquare(40))    // false
console.log(isPerfectSquare(32))    // false
console.log(isPerfectSquare(50))    // false