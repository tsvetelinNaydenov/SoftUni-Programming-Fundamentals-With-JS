function solve(input){
    let message = input.shift();

    for (let currentCommand of input){
        let commandArr = currentCommand.split('|');
        let [command, token1, token2] = commandArr;

        if (command === 'Decode'){ break; }
        if (command === 'ChangeAll'){ changeAll(token1, token2); }
        else if (command === 'Insert'){ insert(token1, token2); }
        else if(command === 'Move') { move (token1); }
    }

    console.log(`The decrypted message is: ${message}`);

    //Helper function to move n letter to the back
    function move(index){
        message = message.slice(index) + message.slice(0, index);
    }

    //Helper function to insert a value at a given index
    function insert(index, value){
        message = message.slice(0, index) + value + message.slice(index);
    }

    //Helper function to replace all occurances of a given char
    function changeAll(substring, replacement){
        while (message.includes(substring)){
            message = message.replace(substring, replacement);
        }
    }
}

solve([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode']);