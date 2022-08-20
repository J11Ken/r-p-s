const choices = ['rock', 'paper', 'scissors']


//Get Computers Choice
function computerSelection() {
  let value = Math.floor(Math.random() * choices.length + 1);
  if (value == 1){
    return 'rock'
  } else if (value == 2){
    return 'paper'
  } else if (value == 3){
    return 'scissors'
  }
}


//Get Player selection via prompt
function playerSelection(){  
let choice = prompt('Rock, paper, scissors?').toLowerCase();
if (choice == 'rock' || 'paper' || 'scissors'){
  return choice
} else {
  playerSelection();
}
}

//Play one round
function playRound(playerSelection, computerSelection){
  if ((playerSelection == 'rock' && computerSelection == 'scissors')|| 
      (playerSelection == 'paper' && computerSelection == 'rock')||
      (playerSelection == 'scissors' && computerSelection == 'paper')){
        wins = wins + 1;  
        return 'win'
      } else if((computerSelection == 'rock' && playerSelection == 'scissors')|| 
      (computerSelection == 'paper' && playerSelection == 'rock')||
      (computerSelection == 'scissors' && playerSelection == 'paper')) {
        losses = losses + 1;
        return 'lose'
      } else if (computerSelection == playerSelection) {
        draws = draws + 1
        return 'draw'
      }
}



function game(){
  while (wins < 5 && losses < 5) {
    let playerChoice = playerSelection();
    let computerChoice = computerSelection();
      console.log(playRound(playerChoice, computerChoice));
      updateScore();
    }
  }


  function updateScore(){
    if (wins == 5){
      alert('You Win!')
    } else if (losses == 5){
      alert('You Lose!')
    } else {
      return
    }
  }



let wins = 0;
let losses = 0;
let draws = 0;
game()