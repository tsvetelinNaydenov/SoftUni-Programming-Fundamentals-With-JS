function evenNumberSumer(inputArr){
    for(let index=0; index<inputArr.length; index++){
        inputArr[index]=Number(inputArr[index]);
    }
    let evenSum=0;
    for(let num of inputArr){
        if(num%2===0) evenSum += num;
    }
    console.log(evenSum);
}
evenNumberSumer(['1','2','3','4','5','6']);