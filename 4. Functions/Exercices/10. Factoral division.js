function factorialDivision (numerator, denominator){
    let num1Factorials = 1;
    let num2Factorials = 1;
    
    if ((numerator === denominator) || (numerator === 0 && denominator === 0)){
        console.log(1.00);
        return;
    } 

    if (numerator > 0) num1Factorials = findFactorialValue(numerator);
    if (denominator > 0) num2Factorials = findFactorialValue(denominator);

    console.log((num1Factorials / num2Factorials).toFixed(2));

    function findFactorialValue(x){
            let factorialValue = 1;

            for(let index = x; index >= 1; index--){
                factorialValue *= index;
            }

            return factorialValue;     
    }
}

factorialDivision(0, 5);