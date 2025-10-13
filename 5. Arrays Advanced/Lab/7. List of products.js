function listProducts (inputArray){
    inputArray.sort();

    for (let index=0; index<inputArray.length; index++){
        console.log(`${index + 1}.${inputArray[index]}`);
    }
}

listProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);