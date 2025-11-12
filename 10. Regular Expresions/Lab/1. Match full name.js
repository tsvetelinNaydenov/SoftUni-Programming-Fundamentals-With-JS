function solve(names){
    let regExp = /\b[A-Z][a-z]{2,} [A-Z][a-z]{2,}\b/g;
    let validNames= [];

    while((currentValidName = regExp.exec(names)) !== null){
        validNames.push(currentValidName[0]);
    }

    console.log(validNames.join(' '));
}

solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov');