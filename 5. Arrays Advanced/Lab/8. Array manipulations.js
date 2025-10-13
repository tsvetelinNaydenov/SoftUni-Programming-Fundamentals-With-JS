function solve (arrayData){
    let resultArray = [];
    resultArray = arrayData.shift().split(' ').map(Number);

    for(let command of arrayData){
        let currentCommand = [];
        currentCommand = command.split(' '); 
        
        if (currentCommand[0] === 'Add') addToArray(Number(currentCommand[1]));
        else if (currentCommand[0] === 'Remove') removeFromArray(Number(currentCommand[1]));
        else if (currentCommand[0] === 'RemoveAt') removeAtIndex(Number(currentCommand[1]));
        else if (currentCommand[0] === 'Insert') insert(Number(currentCommand[1]), Number(currentCommand[2]));

    }

    function addToArray(num){
        resultArray.push(num);
    }

    function removeFromArray(num){
        resultArray = resultArray.filter(el => el !== num);
    }

    function removeAtIndex(index){
        resultArray.splice(index, 1);
    }

    function insert (num, index){
        resultArray.splice(index, 0, num);
    }

    console.log(resultArray.join(' '));
}

solve(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
);