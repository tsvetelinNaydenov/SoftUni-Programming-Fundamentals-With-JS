function bitCoinBotPurchaser (minedGold){
    let dayOfFirstBitCoin=0, totalBitCoins=0, daysCount=1, totalMoney=0;

    for(let gold of minedGold){
        if(daysCount%3===0) gold *= 0.7;
        totalMoney += gold*67.51;

        while(totalMoney>=11949.16){
            totalBitCoins++;
            totalMoney -= 11949.16;
            if(dayOfFirstBitCoin===0) dayOfFirstBitCoin = daysCount;
        }

        daysCount++;
    }

    console.log(`Bought bitcoins: ${totalBitCoins}`);
    if(totalBitCoins>0) console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitCoin}`);
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitCoinBotPurchaser([3124.15, 504.212, 2511.124]);