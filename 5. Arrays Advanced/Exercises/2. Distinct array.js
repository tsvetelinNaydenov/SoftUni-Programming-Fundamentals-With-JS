function solve(numArray){
    let result = numArray.filter((value, index, self) => self.indexOf(value) === index);
    
    console.log(result.join(' '));
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);