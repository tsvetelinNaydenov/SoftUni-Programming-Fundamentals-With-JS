function mergeArrs(firstArr, secArr){
    let mergdArr=[];
    for(let index=0; index<firstArr.length; index++){
        if(index%2===0) mergdArr[index]=Number(firstArr[index])+Number(secArr[index]);
        else mergdArr[index]=firstArr[index]+secArr[index];
    }

    console.log(mergdArr.join(' - '))
}

mergeArrs(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);