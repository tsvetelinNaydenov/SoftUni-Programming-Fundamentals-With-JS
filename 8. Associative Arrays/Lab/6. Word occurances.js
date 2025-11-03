function solve(input){
    let wordOccurancesMap = new Map();

    for (let word of input){
        if (wordOccurancesMap.has(word)){
            let occurances = wordOccurancesMap.get(word) + 1;
            wordOccurancesMap.set(word, occurances);
        }
        else{
           wordOccurancesMap.set(word, 1); 
        }
    }

    let sortedWordsOccurances = Array.from(wordOccurancesMap).sort((a, b) => b[1] - a[1]);

    for (let wordTokens of sortedWordsOccurances){
        let word = wordTokens[0];
        let occurances = wordTokens[1];

        console.log(`${word} -> ${occurances} times`);
    }
}

solve(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);