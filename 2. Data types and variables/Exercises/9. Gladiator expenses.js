function gladiatorEquipmentCalc(lostDays, helmCost, swrdCost, shldCost, armrCost){
    let trshdHelms=Math.trunc(lostDays/2), trshdSwords=Math.trunc(lostDays/3);
    let trshdShields=Math.trunc(lostDays/6), trshdArmor=Math.trunc(lostDays/12);
    let equipmentCost=trshdHelms*helmCost + trshdSwords*swrdCost + trshdShields*shldCost + trshdArmor*armrCost;

    console.log(`Gladiator expenses: ${equipmentCost.toFixed(2)} aureus`);
}

gladiatorEquipmentCalc(23,
12.50,
21.50,
40,
200);