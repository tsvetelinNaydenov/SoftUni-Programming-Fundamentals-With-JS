function printTriples(numInAlphabet){
    let endNum = Number(numInAlphabet);
    for(let index=0; index<endNum; index++){
        for(let index2=0; index2<endNum; index2++){
            for(let index3=0; index3<endNum; index3++){
                let letter1 = String.fromCharCode(97+index);
                let letter2 = String.fromCharCode(97+index2);
                let letter3 = String.fromCharCode(97+index3);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

printTriples('3');

