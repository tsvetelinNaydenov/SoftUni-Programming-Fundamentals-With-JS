function solve (inputObj){
    for (let key of Object.keys(inputObj)){
        console.log(`${key} -> ${inputObj[key]}`);
    }
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"

});