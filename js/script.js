
const buttonRock = document.getElementById('button-rock'),
      buttonPaper = document.getElementById('button-paper'),
      buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  let randomNumber,
      computerMove,
      playerMove;

  clearMessages();
  console.log(argButtonName + ' was pressed ');

  function getMoveName(argMoveId) {
    console.log('generated function: getMoveName with args: ' + argMoveId);
    if (argMoveId == 1) {
      return 'rock';
    } else if (argMoveId == 2) {
      return 'paper';
    } else if (argMoveId == 3) {
      return 'scissors';
    } else {
      printMessage('I dont know the move with id: ' + argMoveId + '. I suppose You mean "rock"');
      return 'rock';
    }
  }

  function displayResult(argPlayerMove, argComputerMove) {
    console.log('generated function displayResults with args: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
      printMessage('You win!');
    } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
      printMessage('You win!');
    } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
      printMessage('You win!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Draw!');
    } else {
      printMessage('You lose :(');
    }
    printMessage('I\'ve played ' + argComputerMove + ', and You ' + argPlayerMove);
  }

  playerMove = argButtonName;
  console.log('player move: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('random number is: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('comp move: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });
