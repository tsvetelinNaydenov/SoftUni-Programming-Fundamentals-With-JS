function solve(input){
    let contacts = {};
    
    for (let currContact of input){
        let [name, address] = currContact.split(':');
        
        contacts[name] = address;
    }

    let contactsArr = Object.entries(contacts);

    contactsArr.sort((a, b) => a[0].localeCompare(b[0]));

    for(let contact of contactsArr){
        let name = contact[0];
        let address = contact[1];

        console.log(`${name} -> ${address}`);
    }
}

solve(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd']);