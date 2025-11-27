function solve(racersInput){
    let racersArr = racersInput.shift().split(', ');
    let racersMap = new Map();

    for(let racerName of racersArr){
        racersMap.set(racerName, 0);
    }

    let racersNameRegEx = /([A-Za-z]+)/gm;
    let racerTimeRegEx = /[0-9]/gm;
    for (let racerData of racersInput){
        let racerName = '';
        let racerTotalTime = 0;

        if((racerData.match(racersNameRegEx)) !== null){
            racerName = racerData.match(racersNameRegEx).join('');
        }
        if((racerData.match(racerTimeRegEx)) !== null){
            racerTotalTime = racerData.match(racerTimeRegEx).map(Number).reduce(((acc, element) => acc + element), 0);
        }
        if(racersMap.has(racerName)){
            racersMap.set(racerName, racersMap.get(racerName) + racerTotalTime);
        }
    }
    
    let topThree = Array.from(racersMap.entries());
    topThree.sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${topThree[0][0]}`);
    console.log(`2nd place: ${topThree[1][0]}`);
    console.log(`3rd place: ${topThree[2][0]}`);
}

solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']);