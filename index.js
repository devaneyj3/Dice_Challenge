

// Constants
const playerOneDice = "playerOneDice";
const playerTwoDice = "playerTwoDice";
const playerOneWins = "Player One Wins";
const src = "src";
const tie = "Tie. Try again";
const playerTwoWins = "Player Two Wins";
const diceArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png"
                ,"images/dice5.png","images/dice6.png", ];
const h1Class = "outcomeText";

// Match Classes

const playerOneRandomNum = Math.floor(Math.random() * 5);
const playerTwoRandomNum = Math.floor(Math.random() * 5)

function RandomRoll(){
  for(let i = 0; i < diceArray.length; i++)
  {
    document.getElementById(playerOneDice).setAttribute(src, diceArray[playerOneRandomNum]);
    document.getElementById(playerTwoDice).setAttribute(src, diceArray[playerTwoRandomNum])
  }
}

function PlayGame() {
  RandomRoll();
  if(playerOneRandomNum > playerTwoRandomNum)
  {
    document.getElementById(h1Class).textContent = playerOneWins;
  }

  else if (playerOneRandomNum === playerTwoRandomNum) {

    document.getElementById(h1Class).textContent = tie;
  }

  else {
    document.getElementById(h1Class).textContent = playerTwoWins;
  }
}
PlayGame();
