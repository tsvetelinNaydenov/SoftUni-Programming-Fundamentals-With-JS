function solve(input){
    let phoneNumberRegEx = /\+359([ -])2\1[0-9]{3}\1[0-9]{4}\b/gm;

    let validPhoneNums = input[0].match(phoneNumberRegEx).join(', ');

    console.log(validPhoneNums);
}

solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])