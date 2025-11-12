function solve(text){
    let wordArr = [];
    let currentWord = '';

    for (let ch of text){
        
        if(ch === ch.toUpperCase() && currentWord !== ''){
            wordArr.push(currentWord);
            currentWord = '';
        }
        currentWord += ch;
        
    }

    if (currentWord) wordArr.push(currentWord);

    console.log(wordArr.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');