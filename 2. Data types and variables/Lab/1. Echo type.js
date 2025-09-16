function checkVariableType(intputVariable){
    console.log(typeof(intputVariable));
    if(typeof(intputVariable) === 'string' || typeof(intputVariable) === 'number') console.log(intputVariable);
    else console.log('Parameter is not suitable for printing');
}

checkVariableType(null);