let secretNumber = 3


function Kick() {
    var kick = parseInt(document.querySelector('#value').value)
    
        if (kick === secretNumber){
            document.querySelector('#result').innerHTML = (`YOU KICKED THE NUMBER ${kick}, CONGRATULATIONS!!!`)
        }
        else if (kick < secretNumber){
            document.querySelector('#result').innerHTML = (`YOU KICKED THE NUMBER ${kick}, NUMBER TOO LOW`)

        }
        else if (kick > secretNumber){
            document.querySelector('#result').innerHTML = (`YOU KICKED THE NUMBER ${kick}, NUMBER TOO HIGH`)

        }
        else {
            document.querySelector('#result').innerHTML = (`PLEASE, WRITE A NUMBER!`)            
        }
        
}