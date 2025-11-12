function solve(words, unfinishedStr){
    let wordsArr = words.split(', ');
    let finishedSentence = unfinishedStr;

    for (let currentWord of wordsArr){
        let starsWord = createStars(currentWord);

        finishedSentence = finishedSentence.replace(starsWord, currentWord);
    }

    console.log(finishedSentence);

    function createStars(word){
        return '*'.repeat(word.length);
    }
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages');