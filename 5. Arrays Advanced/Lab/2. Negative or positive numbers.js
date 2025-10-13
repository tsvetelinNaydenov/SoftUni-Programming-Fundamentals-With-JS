function sortNegativesAndPositives (inputArr){
    let newArr =[];

    for (let arrElement of inputArr){
        if (arrElement < 0) newArr.unshift(arrElement);
        else newArr.push(arrElement);
    }

    console.log(newArr.join('\n'));
}

sortNegativesAndPositives(['3', '-2', '0', '-1']);