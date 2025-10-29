function solve(provisions, order){
    let products = {};

    for (let index = 0; index < provisions.length; index += 2){
        let currentProduct = provisions[index];
        let currentProductQuantity = Number(provisions[index + 1]);

        products[currentProduct] = currentProductQuantity;
    }

    for (let index = 0; index < order.length; index += 2){
        let currentProduct = order[index];
        let currentProductQuantity = Number(order[index + 1]);

        if (currentProduct in products){
            products[currentProduct] += currentProductQuantity;
        }
        else{
            products[currentProduct] = currentProductQuantity;
        }
    }

    for (let key in products){
        console.log(`${key} -> ${products[key]}`);
    }
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], 
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);