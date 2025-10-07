function printASCIIRange(startChar, endChar){
    let startInt = startChar.charCodeAt(0);
    let endInt = endChar.charCodeAt(0);
    let printLine = '';

    if (startInt > endInt){
        let tempStartInt = startInt;
        startInt = endInt;
        endInt = tempStartInt;
    }

    for(let index = startInt + 1; index < endInt; index++){
        printLine += String.fromCharCode(index) + ' ';
    }

    console.log(printLine);
}

printASCIIRange('#', ':');