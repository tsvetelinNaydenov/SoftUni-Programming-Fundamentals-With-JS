function stringRepeater(string, iterations){
    let repeatedString = '';

    for(let index=0; index<iterations; index++){
        repeatedString += string;
    }
    return repeatedString;
}

let string = stringRepeater('abc', 3);
console.log(string);