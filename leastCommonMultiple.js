function leastCommonMultiple(num1, num2) {
    let numerator = 1;
    while (true) {
        if (numerator % num1 === 0 && numerator % num2 === 0) {
            return numerator;
        }
        numerator += 1
    }
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10