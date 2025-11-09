function solve(input){
    let mineMap = new Map();

    for (let index = 0; index < input.length; index += 2){
        let resource = input[index];
        let quantity = Number(input[index + 1]);

        if (!mineMap.has(resource)){
            mineMap.set(resource, quantity);
        }
        else{
            let updatedQuantity = mineMap.get(resource);
            mineMap.set(resource, updatedQuantity += quantity);
        }
    }

    let mineMapArr = Array.from(mineMap.entries());

    for(let [resource, quantity] of mineMapArr){
        console.log(`${resource} -> ${quantity}`);
    }
}

solve([
'gold',
'155',
'silver',
'10',
'copper',
'17',
'gold',
'15'
]
);