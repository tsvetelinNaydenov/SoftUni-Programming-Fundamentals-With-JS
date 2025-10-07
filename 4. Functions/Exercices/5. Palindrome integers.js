function isPalindrome(arrOfInts){
    for(let currentInteger of arrOfInts){

        if(currentInteger.toString() === currentInteger.toString().split('').reverse().join('')){
            console.log(true);
        }
        else
            console.log(false);
    }
}

isPalindrome([32,2,232,1010]);