//computer choice section
function getComputerChoice(value){
    return Math.floor(Math.random() * value)
}

if(getComputerChoice(3) === 0){
    computerChoice = "Rock"
} else if(getComputerChoice(3) === 1){
    computerChoice = "Paper"
} else{
    computerChoice = "Scissors"
}

//human choice section
function getHumanChoice(){
 return prompt("Choose between Rock, Paper and Scissors")
}

let humanChoice = getHumanChoice().toLowerCase()


if(humanChoice === "rock"){
    humanChoice = "Rock"
} else if(humanChoice === "paper"){
    humanChoice = "Paper"
} else if (humanChoice === "scissors"){
    humanChoice = "Scissors"
} else{
    humanChoice = "a invalid value"
}

console.log(`The computer chose ${computerChoice}`)
console.log(`And your chose ${humanChoice}`)



let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    if(humanChoice === "Rock" && computerChoice === "Rock"){
        console.log("That's a draw")
            humanScore = humanScore + 1
            computerScore = computerScore + 1

    } else if(humanChoice === "Rock" && computerChoice === "Paper"){
        console.log("Paper beats Rock, so the computer won this round")
            computerScore = computerScore + 3

    }  else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        console.log("Rock beats Scissors, so the you won this round")
            humanScore = humanScore + 3

    } else if(humanChoice === "Paper" && computerChoice === "Rock"){
        console.log("Paper beats Rock, so you won this round")
            humanScore = humanScore + 3

    }  else if(humanChoice === "Paper" && computerChoice === "Paper"){
        console.log("That's a draw")
            humanScore = humanScore + 1
            computerScore = computerScore +1

    }  else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        console.log("Scissors beats Paper, so the computer won this round")
            computerScore = computerScore + 3

    } else if(humanChoice === "Scissors" && computerChoice === "Rock"){
        console.log("Rock beats Scissors, so the computer won this round")
            computerScore = computerScore + 3

    } else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        console.log("Scissors beats Paper, so you won this round")
            humanScore = humanScore + 3

    } else if(humanChoice === "Scissors" && computerChoice === "Scissors"){
        console.log("That's a draw")
            humanScore = humanScore + 1
            computerScore = computerScore +1
    }

    return

}

/*
function playGame(){
    for(let round = 0; round < 4; round++){
        playRound(humanChoice, computerChoice)
    }
}
*/    

//playGame()
(playRound(humanChoice, computerChoice))
console.log(`Your score is ${humanScore} and the computer score is ${computerScore}`)


