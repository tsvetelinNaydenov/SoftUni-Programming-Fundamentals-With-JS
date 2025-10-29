function solve(dictionaryData){
    let dictionaryObj = {};

    for (let currentTerm of dictionaryData){
        let termObj = JSON.parse(currentTerm);
        let key = Object.keys(termObj);
        let value = Object.values(termObj);

        dictionaryObj[key[0]] = value[0];
    }

    let sortedDictionaryTermsArr = Object.keys(dictionaryObj).sort((a, b) => a.localeCompare(b));

    for (let key of sortedDictionaryTermsArr){
        console.log(`Term: ${key} => Definition: ${dictionaryObj[key]}`);
    }


    console.log();
}

solve([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);