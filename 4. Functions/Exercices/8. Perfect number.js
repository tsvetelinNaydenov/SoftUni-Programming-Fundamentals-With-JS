function perfectNumberValidator (number){
    let divisorsSum=0;

    if (number > 0){
        for(let index = 1; index <= Math.sqrt(number); index++){
            if(number % index === 0){ 
                divisorsSum += index;

                if(index !== number / index) divisorsSum += number / index;
            }
        }
    }
    else {
        console.log(`It's not so perfect.`);
        return;
    }

    divisorsSum -= number;

    if (number === divisorsSum) console.log(`We have a perfect number!`);
    else console.log(`It's not so perfect.`);
}

perfectNumberValidator(1236498);