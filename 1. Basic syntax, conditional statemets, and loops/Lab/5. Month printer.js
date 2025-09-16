function monthCheckAndPrint(monthAsInt){
    if (monthAsInt === 1) console.log('January');
    else if (monthAsInt === 2) console.log('February');
    else if (monthAsInt === 3) console.log('March');
    else if (monthAsInt === 4) console.log('April');
    else if (monthAsInt === 5) console.log('May');
    else if (monthAsInt === 6) console.log('June');
    else if (monthAsInt === 7) console.log('July');
    else if (monthAsInt === 8) console.log('August');
    else if (monthAsInt === 9) console.log('September');
    else if (monthAsInt === 10) console.log('October');
    else if (monthAsInt === 11) console.log('November');
    else if (monthAsInt === 12) console.log('December');
    else console.log('Error!');
}

monthCheckAndPrint(-2);