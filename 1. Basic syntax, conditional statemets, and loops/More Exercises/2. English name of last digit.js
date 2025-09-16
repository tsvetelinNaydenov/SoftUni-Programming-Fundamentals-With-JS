function lastDigitNameDisplay(checkNum){
    let numToStr = checkNum.toString();
    let arrOfStrings = numToStr.split("");

    let comparisonArrOfDigits = ['0','1','2','3','4','5','6','7','8','9'];
    let wordForDigit = ['zero','one','two','three','four','five','six','seven','eight','nine'];

    for(let index=0; index<=9; index++){
        if(arrOfStrings[arrOfStrings.length-1] === comparisonArrOfDigits[index]){
            console.log(`${wordForDigit[index]}`);
            break;
        }
    }
}

lastDigitNameDisplay(1643);