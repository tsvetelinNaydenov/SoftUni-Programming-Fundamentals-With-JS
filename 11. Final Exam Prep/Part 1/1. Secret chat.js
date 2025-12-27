function solve(input){
    let chatMsg = input.shift();

    for (let command of input){
        let commandArr = command.split(':|:');
        let currentCommand = commandArr[0];
        let token = commandArr[1];
        let replacement = '';

        if (currentCommand === 'Reveal'){
            console.log(`You have a new text message: ${chatMsg}`);
        }
        
        if (commandArr.length === 3){ replacement = commandArr[2]; }

        if (currentCommand === 'InsertSpace'){ 
            insertSpace(token);
            console.log(chatMsg); 
        }
        else if (currentCommand === 'Reverse'){ 
            reverse(token); 
        }
        else if (currentCommand === 'ChangeAll'){ 
            changeAll(token, replacement);
            console.log(chatMsg); 
        }
    }

    function insertSpace(index){
        let firstHalf = chatMsg.substring(0, index);
        let secondHalf = chatMsg.substring(index);

        chatMsg = firstHalf + ' ' + secondHalf;
    }
    function reverse(substring){
        if (chatMsg.includes(substring)){
            let newMsg = chatMsg.split(substring);
            let reversedStr = substring.split('').reverse().join('');
            
            newMsg.push(reversedStr);
            chatMsg = newMsg.join('');
            
            console.log(chatMsg);
        }
        else { console.log('error'); }
    }
    function changeAll(substring, replacement){
        while (chatMsg.includes(substring)){
            chatMsg = chatMsg.replace(substring, replacement);
        }
    }
}

solve([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
]);