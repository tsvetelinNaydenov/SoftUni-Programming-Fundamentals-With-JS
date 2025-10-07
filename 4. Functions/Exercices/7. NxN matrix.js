function printNMatrix (inputNum){
    for(let index = 0; index<inputNum; index++){
        let printLine = '';

        for(let index2 = 0; index2<inputNum; index2++){
            printLine += inputNum + ' ';
        }

        console.log(printLine);
    }
}

printNMatrix(7);