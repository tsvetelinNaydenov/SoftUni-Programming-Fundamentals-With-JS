function arraySlicer (inputArr){
    let k = inputArr.shift();

    let firstArr = inputArr.slice(0, k);
    let secondArr = inputArr.slice(inputArr.length - k);

    console.log(firstArr.join(' '));
    console.log(secondArr.join(' '));
}

arraySlicer([3,
 6, 7, 8, 9]);