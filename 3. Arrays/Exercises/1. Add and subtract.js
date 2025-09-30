function addAndSubtract(inputArr){
    let newArr=[], sumOfOldArr=0, sumOfNewArr=0;
    for(let index=0; index<inputArr.length; index++){
        sumOfOldArr += inputArr[index];

        if(inputArr[index]%2===0) newArr[index] = inputArr[index]+index;    

        else newArr[index]=inputArr[index]-index;
        
        sumOfNewArr += newArr[index];
    }
    console.log(newArr);
    console.log(sumOfOldArr);
    console.log(sumOfNewArr);
}

addAndSubtract([-5, 11, 3, 0, 2]);
