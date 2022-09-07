let secretNumber = parseInt(Math.random() * 11)


function Kick() {
    var kick = parseInt(document.querySelector('#value').value)
    
        if (kick === secretNumber){
            document.querySelector('#result').innerHTML = (`YOU KICKED THE NUMBER ${kick}, CONGRATULATIONS!!!`)
            document.querySelector('#value').value = ''
        }
        else if (kick < secretNumber){
            document.querySelector('#result').innerHTML = (`YOU KICKED THE NUMBER ${kick}, NUMBER TOO LOW! PLEASE WRITE A NUMBER 0 - 10.`)
            document.querySelector('#value').value = ''

        }
        else if (kick > secretNumber){
            document.querySelector('#result').innerHTML = (`YOU KICKED THE NUMBER ${kick}, NUMBER TOO HIGH! PLEASE WRITE A NUMBER 0 - 10.`)
            document.querySelector('#value').value = ''
        }
        else {
            document.querySelector('#result').innerHTML = (`PLEASE, WRITE A NUMBER!`)            
        }
        
        
}