function checkSignOfMultiplication (firtNum, secondNum, thirdNum){
    let ttlNegativeNums = 0;

    if (firtNum < 0) ttlNegativeNums++;
    if (secondNum < 0) ttlNegativeNums++;
    if (thirdNum < 0) ttlNegativeNums++;

    if (ttlNegativeNums === 1 || ttlNegativeNums === 3) return 'Negative';
    else return 'Positive';
}