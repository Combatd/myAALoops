function printFives(max) {
    let i = 0;
    while (i < max) {
        console.log(i);
        i += 5;
    }
}

const printFivesOther = (max) => {
    let i = 0;
    while (true) {
        if(i >= max) {
            break;
        }
        console.log(i);
        i += 5;
    }
}

printFives(20) // 0 5 10 15
printFivesOther(20) // 0 5 10 15