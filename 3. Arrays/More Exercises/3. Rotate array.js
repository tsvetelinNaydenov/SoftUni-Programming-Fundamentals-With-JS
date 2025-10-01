function arrRotator(inArr){
    let rotations=Number(inArr[inArr.length-1]);
    inArr.pop();
    for(let index=0; index<rotations; index++){
        inArr.unshift(inArr[inArr.length-1]);
        inArr.pop();
    }
    console.log(inArr.join(' '));
}

arrRotator(['Banana', 'Orange', 'Coconut', 'Apple', '15']);