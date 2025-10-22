function solve(commands){
    let pirateChest = commands.shift().split('|');

    for(let currentCommand of commands){
        let items = currentCommand.split(' ');
        let command = items.shift();

        if (command === 'Yohoho!') break;
        else if (command === 'Loot'){
            loot(items);
        }
        else if (command === 'Drop'){
            drop(Number(items[0]));
        }
        else if (command === 'Steal'){
            steal(Number(items[0]));
        }
    }

    if (pirateChest.length === 0){
        console.log('Failed treasure hunt.');
    }
    else{
        console.log(`Average treasure gain: ${(getScore(pirateChest)).toFixed(2)} pirate credits.`);
    }
    
    function loot(itemsArr){
        for(let currentItem of itemsArr){
            if (pirateChest.includes(currentItem)){
                continue;
            }
            else{
                pirateChest.unshift(currentItem);
            }
        }
    }

    function drop(index){
        if (index < 0) return;
        else{
            let removeditem = pirateChest.splice(index, 1);
            pirateChest.push(removeditem[0]);
        }
    }

    function steal(count){
        let stolenItems = pirateChest.splice(-count);
        console.log(stolenItems.join(', '));
    }

    function getScore(inputArr){
        let sumOfLengths = 0;

        for(let item of inputArr){
            sumOfLengths += item.length;
        }
        let totalPts = sumOfLengths / inputArr.length;

        return totalPts;
    }
}

solve(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]);