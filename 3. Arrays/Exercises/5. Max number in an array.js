function maxNumberToRight(inArr){
    let newArr=[];
    for(let index1=0; index1<inArr.length; index1++){
        let currentHighest=true;

        for(let index2=index1+1; index2<inArr.length; index2++){
            
            if(inArr[index2]>=inArr[index1]) {
                currentHighest=false;
                break;
            }
        }
        if(currentHighest) newArr.push(inArr[index1]);
    }
    console.log(newArr.join(' '));
}

maxNumberToRight([41, 41, 34, 20]);