function solve(inputArr, operations){
    let takeElements = operations[0];
    let deleteElements = operations[1];
    let searchNum = operations[2];
    let ttlOccurances = 0;
    
    inputArr = inputArr.slice(0, takeElements);
    inputArr.splice(0, deleteElements);

    for (el of inputArr){
        if (el === searchNum) ttlOccurances++;
    }

    console.log(`Number ${searchNum} occurs ${ttlOccurances} times.`);
}

solve([7, 1, 5, 8, 2, 7],
[3, 1, 5]);