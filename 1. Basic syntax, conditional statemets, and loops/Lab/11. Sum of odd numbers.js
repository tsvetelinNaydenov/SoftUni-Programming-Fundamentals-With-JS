function sumOfOddNumbers (maxOddNums){
    let oddCount=1, oddSum=0, index=1;

    while(oddCount <= maxOddNums){
        if(index%2===1){
            console.log(index);
            oddCount++;
            oddSum+=index;
        }
        index++;
    }
    console.log(`Sum: ${oddSum}`);
}

sumOfOddNumbers(3);