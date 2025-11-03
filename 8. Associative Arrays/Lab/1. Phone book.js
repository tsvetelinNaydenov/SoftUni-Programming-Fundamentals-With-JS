function solve(contactsData){
    let phoneBookContacts = {};

    for (let contact of contactsData){
        let currentContact = contact.split(' ');
        let name = currentContact[0];
        let phoneNumber = currentContact[1];

        phoneBookContacts[name] = phoneNumber;
    }

    for (let [key, value] of Object.entries(phoneBookContacts)){
        console.log(`${key} -> ${value}`);
    }
}

solve(['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']);