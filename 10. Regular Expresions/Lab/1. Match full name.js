function solve(names){
    let regExp = /\b[A-Z][a-z]+ \b[A-Z][a-z]+/g;
    let validNames= [];

    while((currentValidName = regExp.exec(names)) !== null){
        validNames.push(currentValidName[0]);
    }

    console.log(validNames.join(' '));
}

solve('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov');