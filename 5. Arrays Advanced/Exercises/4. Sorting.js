function solve(numsArr){
    let newArr = [];
    numsArr.sort((a, b) => b-a);

    while (numsArr.length > 0){
        let biggest = numsArr.shift();
        let smallest = numsArr.pop();

        newArr.push(biggest);
        newArr.push(smallest);
    }
    console.log(newArr.join(' '));
}

solve ([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);