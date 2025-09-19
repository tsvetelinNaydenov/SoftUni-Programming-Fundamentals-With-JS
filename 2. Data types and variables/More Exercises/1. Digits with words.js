function digitDisplay(digitStr){
    let digitComparison=['zero','one','two','three','four','five','six','seven','eight','nine'];
    for(let index=0; index<digitComparison.length; index++){
        if(digitStr===digitComparison[index]){
            console.log(index);
            break;
        }
    }
}
digitDisplay('zero');
