function ageFinder(humanAge){
    if(humanAge>=0 && humanAge<=2) console.log('baby');
    else if(humanAge>=3 && humanAge<=13) console.log('child');
    else if(humanAge>=14 && humanAge<=19) console.log('teenager');
    else if(humanAge>=20 && humanAge<=65) console.log('adult');
    else if(humanAge>=66) console.log('elder');
    else console.log('out of bounds');
}

ageFinder(-1);