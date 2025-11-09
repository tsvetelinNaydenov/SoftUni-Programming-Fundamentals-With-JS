function solve(input) {
    let carsSet = new Set();

    for (let line of input) {
        let [command, carNumber] = line.split(', ');

        if (command === 'IN') {
            carsSet.add(carNumber);
        } 
        else if (command === 'OUT') {
            carsSet.delete(carNumber);
        }
    }

    if (carsSet.size === 0) {
        console.log('Parking Lot is Empty');
    } 
    else {
        Array.from(carsSet)
            .sort()
            .forEach(car => console.log(car));
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);