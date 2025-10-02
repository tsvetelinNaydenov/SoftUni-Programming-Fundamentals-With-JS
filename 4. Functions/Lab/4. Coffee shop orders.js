function orderCalculator(bevarge, quantity){
    let totalCost=0;

    if (bevarge === 'coffee') totalCost = quantity * 1.5;
    else if (bevarge === 'water') totalCost = quantity * 1;
    else if (bevarge === 'coke') totalCost = quantity * 1.4;
    else if (bevarge === 'snacks') totalCost = quantity * 2;

    return totalCost.toFixed(2);
}

orderCalculator('coffee', 2);