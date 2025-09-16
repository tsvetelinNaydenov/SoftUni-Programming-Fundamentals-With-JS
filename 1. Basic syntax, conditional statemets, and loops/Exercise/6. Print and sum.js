function printNumRange(startNum, endNum){
    let totalSum=0, printLine='';

    for(let index=startNum; index<=endNum; index++){
        printLine += index + ' ';
        totalSum += index;
    }
    console.log(printLine);
    console.log(`Sum: ${totalSum}`);
}

printNumRange(0, 26);