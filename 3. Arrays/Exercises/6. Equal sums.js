function equalSumsFinder(inArr){
    let equalityFlag=false, equalityIndex=0;
    for(let indexOut=0; indexOut<inArr.length; indexOut++){
        let leftSum=0, rightSum=0;
        if(indexOut>0){
            for(let indexL=0; indexL<indexOut; indexL++){
                leftSum += inArr[indexL]
            }
        }
        if(indexOut<inArr.length-1){
            for(let indexR=indexOut+1; indexR<inArr.length; indexR++){
                rightSum += inArr[indexR];
            }
        }
        if(leftSum===rightSum){
            equalityFlag=true;
            equalityIndex=indexOut;
            break;
        }
    }
    if(equalityFlag) console.log(equalityIndex)
    else console.log('no');
}
equalSumsFinder([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);