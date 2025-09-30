function magicSumFinder(inArr, checkSum){
    for(let indexO=0; indexO<inArr.length; indexO++){
        for(let indexI=indexO+1; indexI<inArr.length; indexI++){
            if(indexO === indexI) continue;

            if(inArr[indexO]+inArr[indexI] === checkSum) console.log(`${inArr[indexO]} ${inArr[indexI]}`);
        }
    }
}

magicSumFinder([1, 2, 3, 4, 5, 6],
6);