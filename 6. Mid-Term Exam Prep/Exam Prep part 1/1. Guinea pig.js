function solve(inputData){
    let foodGr = Number(inputData[0]) * 1000;
    let hayGr = Number(inputData[1]) * 1000;
    let coverGr = Number(inputData[2]) *1000;
    let puppyWeigthGr = Number(inputData[3]) * 1000;

    for(let days = 1; days <= 30; days++){
        foodGr -= 300;

        if (days % 2 === 0) hayGr -= foodGr * 0.05;

        if (days % 3 === 0) coverGr -= puppyWeigthGr / 3;

        if (foodGr <= 0 || hayGr <= 0 || coverGr <= 0){
            console.log('Merry must go to the pet store!');
            return;
        }
    }
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodGr / 1000).toFixed(2)}, Hay: ${(hayGr / 1000).toFixed(2)}, Cover: ${(coverGr / 1000).toFixed(2)}.`);
}

solve(["10", 
"5", 
"5.2", 
"1"]);