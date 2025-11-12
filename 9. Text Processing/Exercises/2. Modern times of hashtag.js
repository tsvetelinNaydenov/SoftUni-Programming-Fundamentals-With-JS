function solve(sentence) {
  let regex = /#([A-Za-z]+)\b/g; 
  let matches = sentence.matchAll(regex);

  for (let m of matches) {
    console.log(m[1]);              
  }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');