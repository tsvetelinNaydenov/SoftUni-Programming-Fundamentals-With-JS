function solve(customerData){
    let customerOrderRegEx = /%(?<name>[A-Z][a-z]+)%[^\|$%\.]*<(?<item>\w+)>[^\|$%\.]*\|(?<quantity>\d+)\|[^\|$%\.0-9]*(?<price>\d+(\.\d+)?)\$/gm;
    let barProfit = 0;
    let validOrder = {};

    while ((validOrder = customerOrderRegEx.exec(customerData)) !== null){
        let customerName = validOrder.groups['name'];
        let item = validOrder.groups['item'];
        let quantity = validOrder.groups['quantity'];
        let itemPrice = validOrder.groups['price'];
        let totalCost = quantity * itemPrice;
        barProfit += totalCost;

        console.log(`${customerName}: ${item} - ${totalCost.toFixed(2)}`);
    }

    console.log(`Total income: ${barProfit.toFixed(2)}`);
}

solve(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
);