function displayMultiplicationTable(multiplier){
    for(let index=1; index<=10; index++){
        console.log(`${multiplier} X ${index} = ${(multiplier*index)}`);
    }
}

displayMultiplicationTable(3);