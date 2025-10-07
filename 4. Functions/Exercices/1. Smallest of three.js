function threeIntergersComparison(number1, number2, number3){
    let smallestNumber=number1;

    if(number2 < smallestNumber) smallestNumber=number2;
    if(number3 < smallestNumber) smallestNumber=number3;

    console.log(smallestNumber);
}

threeIntergersComparison(3, 2, 2);