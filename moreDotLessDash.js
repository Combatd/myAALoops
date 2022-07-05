function moreDotLessDash(str) {
    let dots = 0;
    let dash = 0;

    for (let i = 0; i < str.length; i++) {
        if(str[i] === '.') {
            dots += 1;
        } else if (str[i] === '-') {
            dash += 1;
        }
    }
    return dots > dash;
}

console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false