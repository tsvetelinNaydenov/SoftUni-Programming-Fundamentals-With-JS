function solve(datesInput){
    let dateRegEx = /\b(?<day>\d{2})([-\.\/])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>\d{4})\b/gm;
    let validDate = [];

    while ((validDate = dateRegEx.exec(datesInput)) !== null){
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

solve(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);