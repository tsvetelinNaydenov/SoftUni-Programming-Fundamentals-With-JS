function userLoginChecker(userData){
    let userName=userData[0], index=1;

    while(true){
        let currentAttempt = userData[index].split("").reverse().join("");

        if(currentAttempt === userName){
            console.log(`User ${userName} logged in.`);
            break;
        }
        else if(index === 4){
            console.log(`User ${userName} blocked!`);
            break;
        }
        else console.log('Incorrect password. Try again.');
        index++;
    }
}

userLoginChecker(['sunny','rainy','cloudy','sunny','not sunny']);