function solve(text){
    let result = text[0];

    for(let index = 1; index < text.length; index++){
        if (text[index] !== text[index - 1]){
            result += text[index];
        }
    }
    console.log(result);
}

solve('qqqwerqwecccwd');