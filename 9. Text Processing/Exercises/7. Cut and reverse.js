function solve(text){
    let indexAtHalf = text.length / 2;
    let firstSentence = text.slice(0, indexAtHalf).split('').reverse().join('');
    let secondSentence = text.slice(indexAtHalf).split('').reverse().join('');

    console.log(firstSentence);
    console.log(secondSentence);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');