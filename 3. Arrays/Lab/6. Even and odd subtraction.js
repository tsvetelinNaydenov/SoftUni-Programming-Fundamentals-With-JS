function evenOddSumSub(inputArr){
    let evenSum=0, oddSum=0;
    for(let num of inputArr){
        if(num%2===0) evenSum += num;
        else oddSum += num;
    }
    console.log(evenSum-oddSum);
}

evenOddSumSub([2,4,6,8,10]);