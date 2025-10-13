function generateArray (n , k){
    let newArr = [];
    newArr.push(1);

    for (let index = 0; index < n - 1; index++){
        let currentSlice = newArr.slice(-k);
        let tempSum = 0;

        for (let sliceElements of currentSlice){
            tempSum += sliceElements;
        }

        newArr.push(tempSum);
    }

    console.log(newArr.join(' '));
}

generateArray(6, 3);