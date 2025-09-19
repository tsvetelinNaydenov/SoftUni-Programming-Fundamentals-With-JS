function distanceConverter(distanceInM){
    console.log(`${distanceInM} meters is equal to ${distanceInM/1000} kilometers.`);
    console.log(`${distanceInM/1000} kilometers is equal to ${(distanceInM/1000*0.621371).toFixed(2)} miles.`);
}
distanceConverter(798);