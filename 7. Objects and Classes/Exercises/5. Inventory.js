function solve (heroes){
    class Hero{
        constructor(name, level, items){
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    let allHerosArrOfObj = [];

    for (let singleHero of heroes){
        let currentHero = singleHero.split(' / ');
        let name = currentHero[0];
        let level = Number(currentHero[1]);
        let itemsArr = currentHero[2].split(', ');

        let heroObj = new Hero(name, level, itemsArr);
        allHerosArrOfObj.push(heroObj);
    }

    allHerosArrOfObj.sort((a, b) => a.level - b.level);

    for (let currentHero of allHerosArrOfObj){
        console.log(`Hero: ${currentHero.name}`);
        console.log(`level => ${currentHero.level}`);
        console.log(`items => ${(currentHero.items).join(', ')}`);
    }
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);