function solve (inputArr, bomb){
    let power = bomb[1];

    while (inputArr.includes(bomb[0])){ 
        let index = inputArr.indexOf(bomb[0]);
        let start = Math.max(index - power, 0)
        let deleteCount = power * 2 + 1;

        inputArr.splice(start, deleteCount);
    }

    let sum = 0;
    for(let el of inputArr){
        sum += el;
    }

    console.log(sum);
}

 solve([1, 4, 4, 2, 8, 9, 1],
[9, 3]);