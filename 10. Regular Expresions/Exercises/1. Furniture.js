function solve(furniture){
    let furnitureRegEx = />>(?<item>[A-Z][a-zA-Z]+)<<(?<price>\d+(\.d+)?)!(?<quantity>\d+)/gm;
    let validPurchase = {};
    let totalCost = 0;

    console.log('Bought furniture:');
    while((validPurchase = furnitureRegEx.exec(furniture)) !== null){
        let item = validPurchase.groups['item'];
        let price = validPurchase.groups['price'];
        let quantity = validPurchase.groups['quantity'];

        totalCost += price * quantity;

        console.log(item);
    }
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

solve(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']);