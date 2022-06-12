function fibonacci(length) {
    if (length === 0) {
        return [];
    } else if (length === 1) {
        return [1];
    }

    const fibArr = [1,1]; // for 2, the sum of 0 and 1 is 1

    while (fibArr.length < length) {
        let last = fibArr[fibArr.length - 1]; // the previus element
        let secondToLast = fibArr[fibArr.length - 2]; // the previous element before the previous element
        let nextEle = last + secondToLast;
        fibArr.push(nextEle);
    }

    return fibArr;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]