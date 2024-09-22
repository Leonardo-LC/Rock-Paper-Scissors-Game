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

console.log(computerChoice)