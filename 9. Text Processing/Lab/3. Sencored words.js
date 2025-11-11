function solve(string, replacementWord){
    let censorWord = '';

    for (let index = 0; index < replacementWord.length; index++){
        censorWord += '*';
    }

    let cencoredStr = string.replace(replacementWord, censorWord);

    while (cencoredStr.includes(replacementWord)){
      cencoredStr = cencoredStr.replace(replacementWord, censorWord);  
    }
    console.log(cencoredStr);
}

solve('Find the hidden word', 'hidden');