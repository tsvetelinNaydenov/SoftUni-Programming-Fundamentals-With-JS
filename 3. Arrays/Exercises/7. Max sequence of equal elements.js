function sequencer(inArr){
    let  maxSeqValue=0, maxLength=0;

    for(let index=0; index<inArr.length-1; index++){
        let currentMaxLength=0;

        if(inArr[index] === inArr[index+1]){
            currentMaxLength++;

            for(let indexExt=index+2; indexExt<inArr.length; indexExt++){

                if(inArr[index] === inArr[indexExt]){
                    currentMaxLength++;
                }
                else break;
            }
            if(currentMaxLength>maxLength){
                maxLength=currentMaxLength;
                maxSeqValue=inArr[index];
            }
        }
    }

    let resultArr=[];
    for(let popIndex=0; popIndex<=maxLength; popIndex++){
        resultArr.push(maxSeqValue);
    }
    console.log(resultArr.join(' '));
}
sequencer([0, 1, 1, 5, 2, 2, 6, 3, 3]);