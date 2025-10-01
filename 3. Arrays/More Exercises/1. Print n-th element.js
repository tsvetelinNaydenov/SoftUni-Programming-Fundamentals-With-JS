function arrElementFinder(inArr){
    let step=Number(inArr[inArr.length-1], newArr=[]);
    inArr.pop();

    for(let index=0; index<inArr.length; index+=step){
        newArr.push(inArr[index]);
    }
    console.log(newArr.join(' '));
}

arrElementFinder(['1', '2', '3', '4', '5', '6']);