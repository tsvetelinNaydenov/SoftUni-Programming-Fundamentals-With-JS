function coneVandACalc(coneRadius, coneHeight){
    let coneVolume = Math.PI*coneRadius**2*coneHeight/3;
    let coneArea = Math.PI*coneRadius*(coneRadius+Math.sqrt(coneHeight**2+coneRadius**2));

    console.log(`volume = ${coneVolume.toFixed(4)}`);
    console.log(`area = ${coneArea.toFixed(4)}`);
}

coneVandACalc(3.3,7.8);