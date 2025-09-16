function sortThreeNums(num1, num2, num3){
    let sortedNums = [num1, num2, num3];

    sortedNums.sort(function (a, b){
        return b - a;
    });
    
    for(let n of sortedNums){
        console.log(n);
    }
}

sortThreeNums(0, 0, 2);