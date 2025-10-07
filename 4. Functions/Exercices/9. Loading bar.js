function loadingBar(percentDone){
    let startingBar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];

    for(let i=0; i<percentDone/10; i++){
        startingBar[i] = '%';
    }

    
    if(percentDone === 100) {
        console.log(`100% Complete!`);
        console.log(`[${startingBar.join('')}]`);
    }
    else{
        console.log(`${percentDone}% [${startingBar.join('')}]`);
        console.log(`Still loading...`);
    } 
}

loadingBar(100);