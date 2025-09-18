function specialNumbersFinder(endNum){
    for(let index=1; index<=endNum; index++){
        let currentNum=index;
        let ttlSum = currentNum%10;
        currentNum -= currentNum%10;
        ttlSum += parseInt(currentNum/10);
        let isSpecial = ttlSum===5 || ttlSum===7 || ttlSum===11;

        if(isSpecial) console.log(`${index} -> True`);
        else console.log(`${index} -> False`);
    }
}

specialNumbersFinder(20);