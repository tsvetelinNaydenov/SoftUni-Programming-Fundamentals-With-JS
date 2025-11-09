function solve(input){
    let index = input.indexOf('PARTY');
    let guestList = input.slice(0, index);
    let incomingGuests = input.slice(index + 1);
    let vipList = [];
    let regularList = [];

    for(let guest of guestList){
        if(!isNaN(guest[0])) {
            vipList.push(guest);
        }
        else {
            regularList.push(guest);
        }
    }
    for (let presentGuest of incomingGuests){
        if(!isNaN(presentGuest[0]) && vipList.includes(presentGuest)) {
            let index = vipList.indexOf(presentGuest);
            vipList.splice(index, 1);
        }
        else if (regularList.includes(presentGuest)){
            let index = regularList.indexOf(presentGuest);
            regularList.splice(index, 1);
        }
    }
    let leftGuests = [...vipList, ...regularList];
    
    console.log(leftGuests.length);
    for (let guest of leftGuests){
        console.log(guest);
    }
}
solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc']);