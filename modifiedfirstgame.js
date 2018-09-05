//Ask player one for a number between one and four
//Ask player two for a number between one and four
//Scold the playaers if they enterd a number outside of the range then end the game
//If player one and player two enter the same number, say you win!!
//Else, tell both players what they chose

function playGame() {
  
var p1 = prompt("Player One, enter a number between 1 and 4");
var comp = Math.floor(Math.random()*4 + 1);

if ((p1 < 1 || p1 > 4 || comp < 1 || comp > 4)) {
  window.alert("One of you cheated. Game over");
  return;
}

if (p1 == comp) {
  window.alert("You both win. Congrats")
}
else {
  window.alert("Player One chose " + p1 + " and Player Two (computer) chose " + comp + " You lose, better luck next time");
}
}

playGame();
