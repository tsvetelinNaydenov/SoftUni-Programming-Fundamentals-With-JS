function compareTwoArrs(firstArr, secArr){
    for(arrValue of firstArr){
        for(arrValue2 of secArr){
            if(arrValue===arrValue2) console.log(arrValue);
        }
    }
}

compareTwoArrs(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);