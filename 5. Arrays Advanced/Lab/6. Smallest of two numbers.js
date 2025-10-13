function printTheSmallestTwo (inputArray){
    inputArray.sort((a, b) => a - b);
    let result = inputArray.slice(0, 2);
    
    console.log(result.join(' '));
}

printTheSmallestTwo([3, 0, 10, 4, 7, 3]);