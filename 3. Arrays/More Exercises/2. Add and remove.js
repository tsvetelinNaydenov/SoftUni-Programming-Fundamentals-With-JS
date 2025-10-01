function arrAdderRemover(inArr){
    let newArr=[];
    for(let index=0; index<inArr.length; index++){
        inArr[index]==='add'? newArr.push(index+1): newArr.pop();
    }
    if(newArr.length===0) console.log('Empty');
    else console.log(newArr.join(' '));
}

arrAdderRemover(['remove', 'remove', 'remove']);