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
    humanChoice = "You didn't choose any valid value"
}

console.log(`The computer chose ${computerChoice}`)
console.log(`And your chose ${humanChoice}`)



