function arrCondenser(inputArr){
    while(inputArr.length>1){
        let newArr=[];
        for(let index=0; index<inputArr.length-1; index++){
            newArr.push(inputArr[index]+inputArr[index+1]);
        }
        inputArr=newArr;
    }
    console.log(inputArr[0]);
}

arrCondenser([5,0,4,1,2]);