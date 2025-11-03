function solve(input){
    let productMap = new Map();

    for (let currProduct of input){
        let tokens = currProduct.split(' ');
        let productName = tokens[0];
        let quantity = Number(tokens[1]);

        if (!productMap.has(productName)){
            productMap.set(productName, quantity)
        }
        else{
            let newQuantity = productMap.get(productName);
            newQuantity += quantity;
            productMap.set(productName, newQuantity);
        }
    }

    for (let [key, value] of productMap){
        console.log(`${key} -> ${value}`);
    }
}

solve(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);