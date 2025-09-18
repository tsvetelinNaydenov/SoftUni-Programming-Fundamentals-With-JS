function stringRightplaceChecker(brokenStr, charReplacer, rightStr){
    let fixedStr = brokenStr.replace('_', charReplacer);
    let output = fixedStr === rightStr? 'Matched': 'Not Matched';
    console.log(output);
}

stringRightplaceChecker('Str_ng', 'i', 'String');