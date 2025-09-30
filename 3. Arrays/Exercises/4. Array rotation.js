function arrRotator(inArr, rotations){
    for(index=0; index<rotations; index++){
        inArr.push(inArr[0]);
        inArr.shift();
    }

    console.log(inArr.join(' '));
}
arrRotator([32, 21, 61, 1], 4);