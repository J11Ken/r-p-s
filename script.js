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


//Announces winner when someone wins five games
let winner = document.querySelector('#winner');
  function updateScore(){
    if (wins == 5){
      winner.textContent += ' You, Congratulations!'
    } else if (losses == 5){
      winner.textContent += ' CPU, You Suck!'
    } else {
      return
    }
  }


//keeps track and displays scores
function scoreDisplayUpdate(){
  winsTotal.textContent = `Wins: ${wins}`;
  lossesTotal.textContent = `Losses: ${losses}`;
  drawsTotal.textContent = `Draws: ${draws}`
}


//Add event listener to buttons and play around upon each player selection
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      let playerSelection = e.target.textContent.toLowerCase();
        console.log(playRound(playerSelection, computerSelection()))
        scoreDisplayUpdate();
        updateScore();
    });
  });

 
let winsTotal = document.querySelector('#wins');
let lossesTotal = document.querySelector('#losses');
let drawsTotal = document.querySelector('#draws');


 let wins = 0;
 let losses = 0;
 let draws = 0;
