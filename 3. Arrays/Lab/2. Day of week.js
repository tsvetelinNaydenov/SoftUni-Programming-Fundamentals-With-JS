function dayOfWeekFinder(dayAsInt){
    let daysStr=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    if(dayAsInt<1 || dayAsInt>7) console.log('Invalid day!');
    else console.log(daysStr[dayAsInt-1]);
}

dayOfWeekFinder(7);