function arrReverser(newIndex, inputArr){
    let newArr=[];
    for(let index=0; index<newIndex; index++){
        newArr[index]=inputArr[index];
    };
    console.log(newArr.reverse().join(' '));
}

arrReverser(4, [-1, 20, 99, 5]);