function readingCalc(bookSize, readingSpeedPerH, daysPerBook){
    let totalHoursPerBook = bookSize/readingSpeedPerH;
    let totalHoursPerDay = totalHoursPerBook / daysPerBook;

    console.log(totalHoursPerDay);
}

readingCalc(432, 15, 4);