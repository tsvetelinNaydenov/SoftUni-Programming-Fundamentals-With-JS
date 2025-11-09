function solve(input){
    let powersMap = {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
    }

    let multiplierMap = {
        'C': 1, 'D': 2, 'H': 3, 'S': 4
    }

    let playersMap = new Map();

    for (let playerTokens of input){
        let nameCards = playerTokens.split(': ');
        let name = nameCards[0];
        let cards = nameCards[1].split(', ');

        if (!playersMap.has(name)){
            playersMap.set(name, new Set(cards));
        }
        else{
            let updatedCards = new Set(playersMap.get(name));

            for(let card of cards){
                updatedCards.add(card);
            }

            playersMap.set(name, updatedCards);
        }
    }

    for (let [player, cards] of playersMap){
        let ttlScore = 0;

        for (let currCard of cards){
            let power = '';
            let multiplier = '';
            
            if(currCard.length === 2){
                power = currCard[0];
                multiplier = currCard[1];
            }
            else{
                power = currCard[0] + currCard[1];
                multiplier = currCard[2];
            }
            ttlScore += powersMap[power] * multiplierMap[multiplier];
        }

        console.log(`${player}: ${ttlScore}`);
    }
}

solve([
'John: 2C, 4H, 9H, AS, QS',
'Slav: 3H, 10S, JC, KD, 5S, 10S',
'Alex: 6H, 7S, KC, KD, 5S, 10C',
'Thomas: QH, QC, JS, JD, JC',
'Slav: 6H, 7S, KC, KD, 5S, 10C',
'Thomas: QH, QC, JS, JD, JC',
'Alex: 6H, 7S, KC, KD, 5S, 10C',
'Thomas: QH, QC, JS, JD, JC',
'John: JD, JD, JD, JD']);