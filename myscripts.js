const choices = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;
let computerScore = 0;
//Returns string which is computer's random choice from the choices array
function computerPlay(){
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

function RPSRound(playerSelection, computerSelection=null){
    
    computerSelection = computerPlay();
    while(1){
        if(typeof playerSelection === "string"){
            playerSelection = playerSelection.toUpperCase();
            break;
        }
        else{console.log("Please only use string");}
    }
    
    if(playerSelection === computerSelection){
        console.log(`Player chose: ${playerSelection} \nComputer chose: ${computerSelection} \n It's a tie!`);        //tie
    }
    else if ((computerSelection ==="PAPER" && playerSelection === "ROCK") || 
    (computerSelection ==="SCISSORS" && playerSelection === "PAPER") || 
    (computerSelection ==="ROCK" && playerSelection === "SCISSORS")){
        computerScore++;
        console.log(`Player chose: ${playerSelection} \nComputer chose: ${computerSelection} \nComputer wins!`);       //comp wins
    }
    else if((computerSelection ==="SCISSORS" && playerSelection === "ROCK") ||
    (computerSelection ==="ROCK" && playerSelection === "PAPER") ||
    (computerSelection ==="PAPER" && playerSelection === "SCISSORS")){
        playerScore++;
        console.log(`Player chose: ${playerSelection} \nComputer chose: ${computerSelection} \nPlayer wins!`);      //play wins
    }       

    else{console.log("You didn't enter a valid choice, round skipped.")}
}

function game(){
    for(let i = 0; i < 5; i++){
        RPSRound(playerSelection = prompt("Enter rock, paper, or scissors"), null);
    }
    console.log(`The final score is: \nPlayer: ${playerScore} \nComputer: ${computerScore}`);
    if(playerScore > computerScore){
        console.log(`You win!`);
    }
    else if(computerScore > playerScore){
        console.log(`Better luck next time!`);
    }
    else{console.log(`Tie game!`);}
}

game();