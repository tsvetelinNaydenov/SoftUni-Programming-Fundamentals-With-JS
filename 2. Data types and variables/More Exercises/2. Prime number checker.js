function primeNumChecker(inputNum){
    let isPrime=true;
    if(inputNum<=1) isPrime=false;
    if(inputNum===2) isPrime=true;
    if(inputNum%2===0) isPrime=false;
    for(let index=3; index<=Math.sqrt(inputNum); index++){
        if(inputNum%index===0){
            isPrime=false;
            break;
        }
    }
    console.log(isPrime);
}
primeNumChecker(18);