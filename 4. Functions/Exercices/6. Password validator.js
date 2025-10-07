//0-9 is 48-57 ASCII
//A-Z is 65-90 ASCII
//a-b is 97-122 ASCII
function passwordValidator(password){
    let isValidFlag = true;

    if (password.length < 6 || password.length > 10){
        isValidFlag = false;
        console.log('Password must be between 6 and 10 characters');
    }

    for(let index=0; index<password.length; index++){
            let code = password.charCodeAt(index);

        if (!(code >= 48 && code <= 57) && !(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)){
            console.log('Password must consist only of letters and digits');
            isValidFlag = false;
            break;
        }
    }

    let minDigits=0;

    for(let index=0; index<password.length; index++){
        let code = password.charCodeAt(index);

        if (code >= 48 && code <= 57) minDigits++;
    }

    if(minDigits < 2){
        console.log('Password must have at least 2 digits');
        isValidFlag = false;
    } 

    if(isValidFlag) console.log('Password is valid');
}

passwordValidator('Pa$s$s');