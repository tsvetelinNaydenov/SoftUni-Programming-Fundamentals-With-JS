function leapYearChecker(currentYear){
    if((currentYear%4===0 && currentYear%100!==0) || currentYear%400===0) console.log('yes');
    else console.log('no');  
}

leapYearChecker(4);