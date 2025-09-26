function arrEqualityCheck(firstArr, secondArr){
    let equalityFound=true, sumOfArr=0;
    for(let index=0; index<firstArr.length; index++){
        firstArr[index]=Number(firstArr[index]);
    }
    for(let index=0; index<secondArr.length; index++){
        secondArr[index]=Number(secondArr[index]);
    }
    for(let index=0; index<firstArr.length; index++){
        if(firstArr[index] !== secondArr[index]){
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            equalityFound=false;
            break;
        }
        sumOfArr += firstArr[index];
    }
    if(equalityFound) console.log(`Arrays are identical. Sum: ${sumOfArr}`);
}

arrEqualityCheck(['1'], ['10']);