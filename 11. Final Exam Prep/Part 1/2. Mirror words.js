function solve(text){
    let wordPairsRegExp = /([@#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/gm;
    let validWordPairObj = {};
    let matchedPairsArr = [];
    let mirrorWordsArr = [];

    while ((validWordPairObj = wordPairsRegExp.exec(text)) !== null){
        let currentWordMatchArr = [];
        let firstWord = validWordPairObj.groups['firstWord'];
        let secondWord = validWordPairObj.groups['secondWord'];

        currentWordMatchArr = [firstWord, secondWord];
        matchedPairsArr.push(currentWordMatchArr);
    }

    for (let currentWordPair of matchedPairsArr){
        if (areMirrorWords(currentWordPair[0], currentWordPair[1])){
            mirrorWordsArr.push(currentWordPair);
        }
    }

    if (matchedPairsArr.length > 0){
        console.log(`${matchedPairsArr.length} word pairs found!`);

        if (mirrorWordsArr.length > 0){
            console.log('The mirror words are:');
            console.log(mirrorWordsString(mirrorWordsArr));
        }
        else{
            console.log('No mirror words!');
        }
    }
    else { 
        console.log('No word pairs found!');
        console.log('No mirror words!');
        return;
    }
    
    function areMirrorWords(firstWord, secondWord){
        let secondWordReversed = secondWord.split('').reverse().join('');

        return firstWord === secondWordReversed;
    }
    function mirrorWordsString(mirrorWords){
        let wordPairsFormated = [];
        let printLine = '';

        for (let currentPair of mirrorWords){
            let joinedPair = `${currentPair[0]} <=> ${currentPair[1]}`
            wordPairsFormated.push(joinedPair);
        }

        printLine = wordPairsFormated.join(', ');

        return printLine;
    }
}

solve([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);