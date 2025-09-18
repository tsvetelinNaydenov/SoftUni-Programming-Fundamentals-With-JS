function sumDigits(inputNum){
    let numToStr = inputNum.toString();
    let sumOfDigits=0;

    for(let index=0; index<numToStr.length; index++){
        sumOfDigits += Number(numToStr[index]);
    }

    console.log(sumOfDigits);
}

sumDigits(543);