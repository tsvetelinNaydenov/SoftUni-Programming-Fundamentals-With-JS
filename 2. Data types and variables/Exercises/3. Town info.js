function townInfoDisplay(townName, populationNum, townArea){
    let validDataFlag=true;
    if(townName.length<3){
        console.log('Town name must be at least 3 characters!');
        validDataFlag=false;
    }
    if(populationNum<0){
        console.log('Population must be a positive number!');
        validDataFlag=false;
    }
    if(townArea<0){
        console.log('Area must be a positive number!');
        validDataFlag=false;
    }
    if(validDataFlag) console.log(`Town ${townName} has population of ${populationNum} and area ${townArea} square km.`);
}

townInfoDisplay('Ka',
3600,
-50);