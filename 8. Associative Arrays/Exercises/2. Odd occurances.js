function solve(input){
    let allWordsArr = input.split(' ');
    let wordsMap = new Map();

    for (let word of allWordsArr){
        word = word.toLowerCase();

        if(wordsMap.has(word)){
            let value = wordsMap.get(word);
            wordsMap.set(word, value + 1);
        }
        else{
            wordsMap.set(word, 1);
        }
    }

    let oddWordsStr = '';
    let wordsFromMapArr = Array.from(wordsMap.entries());

    for (let [word, value] of wordsFromMapArr){

        if(value % 2 === 1) oddWordsStr += word + ' ';
    }

    console.log(oddWordsStr);
}

solve('Cake IS SWEET is Soft CAKE sweet Food');