function solve(wagonCommands){
    let wagons =[];
    wagons = wagonCommands.shift().split(' ').map(Number);
    let wagonCapacity = Number(wagonCommands.shift());

    for (let currentWagonCommand of wagonCommands){
        let currentCommand = [];
        currentCommand = currentWagonCommand.split(' ');

        if (currentCommand[0] === 'Add') addNewWagon(Number(currentCommand[1]));
        else fillUpWagons(Number(currentCommand[0]));
    }

    function addNewWagon (num){
        wagons.push(num);
    }

    function fillUpWagons (num){
        for (let index=0; index < wagons.length; index++){

            if (wagons[index] + num <= wagonCapacity){

                wagons[index] += num;
                break;
            }
        }
    }

    console.log(wagons.join(' '));
}

solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);