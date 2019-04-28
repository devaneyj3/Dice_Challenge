/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, diceAdded;

gamePlaying = true;

var player0Panel = document.querySelector(".player-0-panel");
var player1Panel = document.querySelector(".player-1-panel");

//buttons
var newGame = document.querySelector('.btn-new');
var rollButton = document.querySelector('.btn-roll');
var hold = document.querySelector(".btn-hold");

var dicePic0 = document.getElementById('dice0');
var dicePic1 = document.getElementById('dice1');
var playerScore0 = document.getElementById("score-0");
var playerScore1 = document.getElementById("score-1");

var currentScore0 = document.getElementById("current-0");
var currentScore1 = document.getElementById("current-1");

init();


var lastDice;
var lastDice1;


rollButton.addEventListener('click', function()
{
    if(gamePlaying) {
         //get random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        var addedDice = dice + dice1;

        //display the result
        dicePic0.style.display = "block";
        dicePic0.src = "dice-" + dice + ".png";

        dicePic1.style.display = "block";
        dicePic1.src = "dice-" + dice1+ ".png";

        if (dice == 6 && lastDice == 6 || dice1 == 6 && lastDice1 == 6) 
        {
            
            scores[activePlayer] = 0;
            document.querySelector("#score-" + activePlayer).textContent = "0";
            console.log("Random dice: " + dice);
            nextPlayer();
        }
        else if(dice !== 1 && dice1 !== 1) {
              //update current score
            roundScore += addedDice;
            //change player one score based on the dice rolled
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        }
        else 
        {
            nextPlayer();
        }
        lastDice = dice;
        lastDice1 = dice1;
    }
   
});

hold.addEventListener('click', function() 
{
    if(gamePlaying)
    {
        //Add current score to the global score

        scores[activePlayer] += roundScore;

        //Update UI

        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        //user can enter in the final score they want to go up to

        var input = document.querySelector(".finalScore").value;
        var winningScore;

        if(input) 
        {
           winningScore = input;
        }
        else 
        {
            winningScore = 100;
        }

        console.log(input);
        //check to see what player won the game
        if(scores[activePlayer] >= winningScore) 
        {
            document.getElementById("name-" + activePlayer).textContent = "Winner";
            hideDice();
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePlaying = false;

        }
        else {
            //Switch to next player
        nextPlayer();
        }
    }
});

newGame.addEventListener('click', init);

function nextPlayer() 
{
    if(activePlayer === 0)
        {
            activePlayer = 1;
            
        }
        else {
            activePlayer = 0;
        }
        roundScore = 0;

        currentScore0.textContent = "0";
        currentScore1.textContent = "0";
        
        player0Panel.classList.toggle("active");
        player1Panel.classList.toggle("active");

        hideDice();
}

function init() {
    gamePlaying = true;
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    hideDice();
    playerScore0.textContent = "0";
    playerScore1.textContent = "0";

    currentScore0.textContent = "0";
    currentScore1.textContent = "0";

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    player0Panel.classList.remove("winner");
    player1Panel.classList.remove("winner");
    player0Panel.classList.remove("active");
    player1Panel.classList.remove("active");

    player0Panel.classList.add("active");
}

function hideDice() {
    dicePic0.style.display = "none";
    dicePic1.style.display = "none";
}


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/



