function ASCIIValuesPrint(char1, char2, char3){
    console.log(`${char3}${char2}${char1}`);
    console.log(`${char3.charCodeAt(0)} ${char2.charCodeAt(0)} ${char1.charCodeAt(0)}`);
}

ASCIIValuesPrint('%', '2', 'o');