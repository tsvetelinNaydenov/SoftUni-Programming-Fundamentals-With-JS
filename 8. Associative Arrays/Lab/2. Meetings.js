function solve(input){
   let meetings = {};
   
    for (let request of input){
        let [day, person] = request.split(' ');

        if(meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }
        else{
            meetings[day] = person;
            console.log(`Scheduled for ${day}`);
        }
   }

   for (let [day, person] of Object.entries(meetings)){
        console.log(`${day} -> ${person}`);
   }
}

solve(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']);