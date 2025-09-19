function charUpperLowerCaseChecker(inputChar){
    if(inputChar === inputChar.toUpperCase()) console.log('upper-case');
    else if(inputChar === inputChar.toLowerCase()) console.log('lower-case');
}

charUpperLowerCaseChecker('f');