function numTriangleDisplay(lastRow){
    let printLine='', exitFlag=false;

    for(let rows=1; rows<=lastRow; rows++){
        for(let cols=1; cols<=rows; cols++){
            if(rows > lastRow) exitFlag=true;
            printLine+=rows+' ';
        }
        console.log(printLine);
        printLine='';
        if(exitFlag) break;
    }
}

numTriangleDisplay(10);