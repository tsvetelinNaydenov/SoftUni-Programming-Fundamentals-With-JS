function cinemaTicketCalc(typeOfDay, customerAge){
    switch (typeOfDay){
        case 'Weekday':{
            if ((customerAge>=0 && customerAge<=18) || (customerAge>64 && customerAge <=122)) console.log('12$');
            else if(customerAge>18 && customerAge<=64) console.log('18$');
            else console.log('Error!');
            break;
        }
        case 'Weekend':{
            if ((customerAge>=0 && customerAge<=18) || (customerAge>64 && customerAge <=122)) console.log('15$');
            else if(customerAge>18 && customerAge<=64) console.log('20$');
            else console.log('Error!');
            break;
        }
        case 'Holiday':{
            if (customerAge>=0 && customerAge<=18) console.log('5$');
            else if(customerAge>18 && customerAge<=64) console.log('12$');
            else if (customerAge>64 && customerAge <=122) console.log('10$');
            else console.log('Error!');
            break;
        }
    }
}

cinemaTicketCalc('Weekday', 42);