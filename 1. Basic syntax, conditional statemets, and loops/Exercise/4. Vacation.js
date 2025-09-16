function vactionCalc(totalGuests, typeOfGroup, dayOfWeek){
    let totalCost=0;

    switch(typeOfGroup){
        case 'Students':{
            switch(dayOfWeek){
                case 'Friday':{
                    totalCost = 8.45*totalGuests;
                    break;
                }
                case 'Saturday':{
                    totalCost = 9.8*totalGuests;
                    break;
                }
                case 'Sunday':{
                    totalCost = 10.46*totalGuests;
                    break;
                }
            }
            if(totalGuests>=30) totalCost*=0.85;
            break;
        }
        case 'Business':{
            if(totalGuests>=100) totalGuests-=10;
            switch(dayOfWeek){
                case 'Friday':{
                    totalCost = 10.9*totalGuests;
                    break;
                }
                case 'Saturday':{
                    totalCost = 15.6*totalGuests;
                    break;
                }
                case 'Sunday':{
                    totalCost = 16*totalGuests;
                    break;
                }
            }
            break;
        }
        case 'Regular':{
            switch(dayOfWeek){
                case 'Friday':{
                    totalCost = 15*totalGuests;
                    break;
                }
                case 'Saturday':{
                    totalCost = 20*totalGuests;
                    break;
                }
                case 'Sunday':{
                    totalCost = 22.5*totalGuests;
                    break;
                }
            }
            if(totalGuests>=10 && totalGuests<=20) totalCost*=0.95;
            break;
        }
    }
    console.log(`Total price: ${totalCost.toFixed(2)}`);
}

vactionCalc(40,
"Regular",
"Saturday");