function addAndSubtract(number1, number2, number3){
    function sum(num1, num2){
        return num1 + num2;
    }
    function subtract(num1, num2){
        return num1 - num2;
    }

    return subtract(sum(number1, number2), number3);
}

addAndSubtract(23, 6, 10);