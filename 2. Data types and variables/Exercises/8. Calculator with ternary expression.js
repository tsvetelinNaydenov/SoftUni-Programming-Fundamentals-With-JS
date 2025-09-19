function simpleCalc(num1, operator, num2){
    let sum = operator==='+'? num1+num2: operator==='-'? num1-num2: operator==='/'? num1/num2: num1*num2;
    console.log(sum.toFixed(2));
}
simpleCalc(25.5,
'-',
3)