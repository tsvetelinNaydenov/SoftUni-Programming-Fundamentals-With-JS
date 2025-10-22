function solve(pcPartsCost){
    let finalPrice = 0;
    let totalCost = 0;
    let totalTaxes = 0;

    for(let currentPart of pcPartsCost){
        let currentPartCost = Number(currentPart);

        if(currentPartCost < 0){
            console.log('Invalid price!');
            continue;
        }

        if(currentPart === 'regular'){
            break;
        }
        else if(currentPart === 'special'){
            finalPrice *= 0.9;
            break;
        }

        totalCost += currentPartCost;
        totalTaxes += currentPartCost * 0.2;
        finalPrice = totalCost + totalTaxes;
    }
    if (finalPrice === 0){
        console.log('Invalid order!');
    }
    else{
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalCost.toFixed(2)}$`);
        console.log(`Taxes: ${totalTaxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    }
}

solve([
'1023', 
'15', 
'-20',
'-5.50',
'450', 
'20', 
'17.66', 
'19.30', 'regular'
]);