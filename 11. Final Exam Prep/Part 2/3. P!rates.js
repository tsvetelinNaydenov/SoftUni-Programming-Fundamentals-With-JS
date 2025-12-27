function solve(input){
    let cityTargetsMap = new Map();

    for (let cityLine of input){
        let cityLineArr = cityLine.split('||');
        let [cityName, population, gold] = cityLineArr;
        population = Number(population);
        gold = Number(gold);

        if (cityLine === 'Sail'){
            break;
        }

        let cityObj ={
            cityName: cityName,
            population: population,
            gold: gold
        }
        cityTargetsMap.set(cityName, cityObj);
    }

    let index = input.indexOf('Sail');
    let commandsLine = input.slice(index + 1);

    for (let pirateOperation of commandsLine){
        let pirateOperationArr = pirateOperation.split('=>');
        let [command, city, population, gold] = pirateOperation;
        population = Number(population);
        gold = Number(gold);

        if(command === 'End'){ break; }
        let currentCityObj = cityTargetsMap.get(city);

        if(command === 'Plunder'){
            
        }
    }

    console.log('');
}

solve((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]));