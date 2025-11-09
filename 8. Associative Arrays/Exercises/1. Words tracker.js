function solve(input){
    let searchWordsArr = input.shift().split(' ');
    let searchWordsMap = new Map();
    
    for (let index = 0; index < searchWordsArr.length; index++){
        searchWordsMap.set(searchWordsArr[index], 0);
    }

    for (let word of input){
        if (searchWordsMap.has(word)){
            let value = searchWordsMap.get(word);
            searchWordsMap.set(word, value + 1);
        }
    }

    let sortedWords = Array.from(searchWordsMap.entries()).sort((a, b) => b[1] - a[1]);

    for (let wordTokens of sortedWords){
        let word = wordTokens[0];
        let value = wordTokens[1];
        console.log(`${word} - ${value}`);
    }
}

solve([
'is the', 
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);