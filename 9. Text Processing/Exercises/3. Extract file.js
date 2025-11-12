function solve(filePath){
    let fileNameExt = filePath.split('\\').pop();
    let lastDotIndex = fileNameExt.lastIndexOf('.');

    let fileName = fileNameExt.slice(0, lastDotIndex);
    let fileExt = fileNameExt.slice(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}

solve('C:\\Internal\\training-internal\\Template.bat.pptx');