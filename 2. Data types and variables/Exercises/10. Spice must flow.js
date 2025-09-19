function spiceMineManager(startingYield){
    let minedSpice=0, daysMined=0;
    while(startingYield>=100){
        minedSpice += startingYield-26;
        startingYield -= 10;
        daysMined++;
    }
    if(minedSpice>26) minedSpice-=26;

    console.log(daysMined);
    console.log(minedSpice);
}

spiceMineManager(450);