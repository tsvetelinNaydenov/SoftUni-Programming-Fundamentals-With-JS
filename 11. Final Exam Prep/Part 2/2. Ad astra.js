function solve(input){
    let itemsRegEx = /([#\|])(?<item>[A-Za-z\s]+)\1(?<expiration>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;
    let totalCals = 0;
    let itemsArrOfObjs = [];
    let validItemsObj = {};

    while ((validItemsObj = itemsRegEx.exec(input)) !== null){
        let item = validItemsObj.groups['item'];
        let expDate = validItemsObj.groups['expiration'];
        let cals = Number(validItemsObj.groups['calories']);
        totalCals += cals;

        let currentItemObj = {
            item: item,
            expiration: expDate,
            calories: cals
        }

        itemsArrOfObjs.push(currentItemObj);
    }

    let daysToLast = Math.floor(totalCals / 2000);
    console.log(`You have food to last you for: ${daysToLast} days!`);

    for (let itemObj of itemsArrOfObjs){
        console.log(`Item: ${itemObj.item}, Best before: ${itemObj.expiration}, Nutrition: ${itemObj.calories}`);
    }
}

solve(['Hello|#Invalid food#19/03/20#450|$5*(@']);