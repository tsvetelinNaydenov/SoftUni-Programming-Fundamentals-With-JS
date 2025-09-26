function reverseAnArr(inputArr){
    for(i=0; i<inputArr.length/2; i++){
        swapElements(inputArr, i, inputArr.length-1-i)
    }
    console.log(inputArr.join(' '));
    function swapElements(inputArr, begIndex, lastIndex){
        let begValue=inputArr[begIndex]
        inputArr[begIndex]=inputArr[lastIndex];
        inputArr[lastIndex] = begValue;
    }
}

reverseAnArr(['abc', 'def', 'hig', 'klm', 'nop']);