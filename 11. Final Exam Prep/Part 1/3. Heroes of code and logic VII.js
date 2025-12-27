function solve(input){
    let heroesMap = new Map();

    class Hero{
        constructor(name, health, mana){
            this.name = name;
            this.health = health;
            this.mana = mana;
            heroesMap.set(name, this);
        }
        recharge(amount){
            let currentManaPTS = this.mana;
            let rechargeFor = Math.min(amount, 200 - currentManaPTS);
            this.mana = Math.min(currentManaPTS + amount, 200);

            console.log(`${this.name} recharged for ${rechargeFor} MP!`);
        }
        heal(amount){
            let currentHealthPTS = this.health;
            let healFor = Math.min(amount, 100 - currentHealthPTS);
            this.health = Math.min(currentHealthPTS + amount, 100); 

            console.log(`${this.name} healed for ${healFor} HP!`);
        }
        castSpell(manaCost, spell){
            if (manaCost <= this.mana){
                this.mana -= manaCost;
                console.log(`${this.name} has successfully cast ${spell} and now has ${this.mana} MP!`);
            }
            else{ console.log(`${this.name} does not have enough MP to cast ${spell}!`); }
        }
        takeDamage(damagePTS, attacker){
            if (damagePTS < this.health){
                this.health -= damagePTS;
                console.log(`${this.name} was hit for ${damagePTS} HP by ${attacker} and now has ${this.health} HP left!`);
            }
            else{
                console.log(`${this.name} has been killed by ${attacker}!`);
                heroesMap.delete(this.name);
            }
        }
    }
    let index = Number(input[0]);
    let heroes = input.slice(1, index + 1);
    let commands = input.slice(index + 1);

    //Populate heores map
    for (let heroTokens of heroes){
            let [name, healtPTS, manaPTS] = heroTokens.split(' ');
            healtPTS = Number(healtPTS);
            manaPTS = Number(manaPTS);

        //Creates an instance of Hero class and constructor adds it to the hero map
        let heroCreation = new Hero(name, healtPTS, manaPTS);
    }

    //Run the commands
    for (let currentCommands of commands){
        let commandArr = currentCommands.split(' - ');
        let command = commandArr[0];
        let heroName = commandArr[1];
        let points = Number(commandArr[2]);
        let heroObj = heroesMap.get(heroName);

        if (command === 'End'){ break; }

        if (command === 'CastSpell'){
            let spell = commandArr[3];

            heroObj.castSpell(points, spell);
        }
        else if (command === 'TakeDamage'){
            let attacker = commandArr[3];

            heroObj.takeDamage(points, attacker);  
        }
        else if (command === 'Recharge'){
            heroObj.recharge(points);
        }
        else if (command === 'Heal'){
            heroObj.heal(points);
        }
    }

    //Print the remaining heroes
    for (let [heroName, heroObj] of heroesMap){
        console.log(heroName);
        console.log(`HP: ${heroObj.health}`);
        console.log(`MP: ${heroObj.mana}`);
    }
}

solve(['2',
'Solmyr 85 120',
'Kyrre 99 50',
'Heal - Solmyr - 10',
'Recharge - Solmyr - 50',
'TakeDamage - Kyrre - 66 - Orc',
'CastSpell - Kyrre - 15 - ViewEarth',
'End']);