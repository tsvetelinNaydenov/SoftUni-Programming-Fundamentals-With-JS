function solve(townsArr){
    let townArrOfObj = [];

    for(let currentTownStr of townsArr){
        let currentTownAsArr = currentTownStr.split(' | ');
        let townName = currentTownAsArr[0];
        let lat = (Number(currentTownAsArr[1])).toFixed(2);
        let long = (Number(currentTownAsArr[2])).toFixed(2);

        let currentObj = {
            town: townName,
            latitude: lat,
            longitude: long
        }

        townArrOfObj.push(currentObj);
    }

    for(let townObj of townArrOfObj){
        console.log(townObj);
    }
}
solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);