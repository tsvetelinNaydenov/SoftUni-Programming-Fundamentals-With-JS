function sumOddEvenDigits(inputNumber){
    let numToString = inputNumber.toString();
    let oddSum=0, evenSum=0;

    for(let index=0; index<numToString.length; index++){
        if(Number(numToString[index]) % 2 === 0) evenSum += Number(numToString[index]);
        else oddSum += Number(numToString[index]);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

sumOddEvenDigits(3495892137259234);