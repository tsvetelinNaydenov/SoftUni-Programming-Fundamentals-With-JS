function solve(partyList){
    let guestList = [];

    for (let guest of partyList){
        let currentGuest = guest.split(' ');

        if (currentGuest.length === 3){
            if (!checkList(currentGuest[0])) addGuest(currentGuest[0]);

            else console.log(`${currentGuest[0]} is already in the list!`)
        }
        else if (currentGuest.length === 4){
            if (checkList(currentGuest[0])) removeGuest(currentGuest[0]);

            else console.log(`${currentGuest[0]} is not in the list!`)
        }
    }

    function checkList (guestName){
        return guestList.includes(guestName);
    }

    function addGuest (guestName){
        guestList.push(guestName);
    }

    function removeGuest (guestName){
        let guestIndex = guestList.indexOf(guestName);
        guestList.splice(guestIndex, 1);
    }

    console.log(guestList.join('\n'));
}

solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);