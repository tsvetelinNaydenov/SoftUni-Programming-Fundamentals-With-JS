function divisionChecker(numToBeChecked){
    let divisors = [2, 3, 6, 7, 10], maxDivisor=0;

    for(let index=0; index<=5; index++){
        if(numToBeChecked%divisors[index]===0) maxDivisor=divisors[index];
    }
    if(maxDivisor === 0) console.log('Not divisible');
    else console.log(`The number is divisible by ${maxDivisor}`);
}

divisionChecker(1643);