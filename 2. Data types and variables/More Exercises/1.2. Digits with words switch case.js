function digitDisplay(digitStr){
    let digitDisplay=0;
    switch(digitStr){
        case'zero':{digitDisplay=0;break;}
        case'one':{digitDisplay=1;break;}
        case'two':{digitDisplay=2;break;}
        case'three':{digitDisplay=3;break;}
        case'four':{digitDisplay=4;break;}
        case'five':{digitDisplay=5;break;}
        case'six':{digitDisplay=6;break;}
        case'seven':{digitDisplay=7;break;}
        case'eight':{digitDisplay=8;break;}
        case'nine':{digitDisplay=9;break;}
    }
    console.log(digitDisplay);
}
digitDisplay('zero');