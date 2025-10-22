function solve(firstName, lastName, hairColor){
    let personObj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }

    console.log(JSON.stringify(personObj));
}

solve('George', 'Jones', 'Brown');