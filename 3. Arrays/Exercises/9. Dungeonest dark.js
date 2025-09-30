function dungensGameData(roomsStr){
    let splitRoomsStr=roomsStr.split('|'), gameDataArr=[];
    let ttlCoins=0, lifePts=100;

    for(let item of splitRoomsStr){
        let piecesArr=item.split(' ');
        gameDataArr.push(piecesArr[0]);
        gameDataArr.push(Number(piecesArr[1]));
    }

    for(let index=0; index<gameDataArr.length-1; index+=2){
        if(gameDataArr[index]==='potion'){
            lifePts+=gameDataArr[index+1];
            if(lifePts>100){
                console.log(`You healed for ${100-(lifePts-gameDataArr[index+1])} hp.`);
                lifePts=100;
            }
            else console.log(`You healed for ${gameDataArr[index+1]} hp.`);
            console.log(`Current health: ${lifePts} hp.`);
        }
        else if(gameDataArr[index]==='chest'){
            console.log(`You found ${gameDataArr[index+1]} coins.`);
            ttlCoins+=gameDataArr[index+1];
        }
        else{
            lifePts-=gameDataArr[index+1];
            if(lifePts>0) console.log(`You slayed ${gameDataArr[index]}.`);
            else{
                console.log(`You died! Killed by ${gameDataArr[index]}.`);
                console.log(`Best room: ${index/2+1}`);
                break;
            }
        }
    }
    if(lifePts>0){
    console.log(`You've made it!`);
    console.log(`Coins: ${ttlCoins}`);
    console.log(`Health: ${lifePts}`);
    }
}

dungensGameData("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");

//console.log(`You healed for ${gameDataArr[index+1]} hp.`);