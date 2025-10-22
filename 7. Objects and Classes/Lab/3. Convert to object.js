function solve (jsonStr){
    let person = JSON.parse(jsonStr);

    let objKeys = Object.keys(person);

    for (let key of objKeys){
        console.log(`${key}: ${person[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');