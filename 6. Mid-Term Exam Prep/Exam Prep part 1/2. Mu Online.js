function solve(dungeonRoomsData){
    let dungeonRooms = dungeonRoomsData.split('|');
    let health = 100;
    let bitcoins = 0;

    for(rooms of dungeonRooms){
        let cuurentRoom = rooms.split(' ');
        let operation = cuurentRoom[0];
        let points = Number(cuurentRoom[1]);

        if(operation === 'potion'){
            health += points;
            if (health > 100){ health = 100; } 

            console.log(`You healed for ${points} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
        else if (operation === 'chest'){
            bitcoins += points;
            console.log(`You found ${points} bitcoins.`)
        }
        else{
            health -= points;

            if (health <= 0){ 
                console.log(`You died! Killed by ${operation}.`);
                break; 
            }
            else{ console.log(`You slayed ${operation}.`); }
        }
    }
}

solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");