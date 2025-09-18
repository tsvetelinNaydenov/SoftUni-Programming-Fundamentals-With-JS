function amazingNumberChecker(numToBeChecked){
    let strOfNum = numToBeChecked.toString();
    let sum=0;
    for(let index=0; index<strOfNum.length; index++){
        sum += Number(strOfNum[index]);
    }
    let amazingNumFlag = sum.toString().includes('9');

    console.log(amazingNumFlag ? `${strOfNum} Amazing? True`: `${strOfNum} Amazing? False`);
}

amazingNumberChecker(999);