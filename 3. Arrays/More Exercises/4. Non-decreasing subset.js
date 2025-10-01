function arrSubset(inArr){
    let currentBiggest=-100000;
    let subsetArr=[];

    for(arrValue of inArr){
        if(arrValue>=currentBiggest){
            subsetArr.push(arrValue);
            currentBiggest=arrValue;
        }
    }
    console.log(subsetArr.join(' '));
}

arrSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);