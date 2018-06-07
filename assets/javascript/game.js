
//create variables for wins, losses, guesses, remaining guesses, and what guess we've made.
var wins = 0;
var losses = 0;
var remaining = 9;
var userAttempts = [];

//create an array of letters for the computer to choose from.
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//create a function that recognizes your keystroke and responds back telling you whether or not 
//it matches the computers guess
//run this function anytime a key is pressed


document.onkeyup = function(event) {

    //determines which key is pressed
    var userGuess = event.key;
    userAttempts.push(userGuess);

    //create a variable to grab a random letter from the array that the computer will choose
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];

    if (userGuess == computerGuess) {
        wins++;
        remaining = 9;
        userAttempts = [];
        computerGuess = letters [Math.floor(Math.random() * letters.length)];
    }

    else {
        remaining--;
    }

    if (remaining === 0) {
        losses++;
        userAttempts = [];
        remaining = 9;
      }

      var html =
      "<h1>Psychic Game</h1>" +
      "<h3>Guess what letter I'm thinking of:</h3>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + losses + "</p>" +
      "<p>Remaining Guesses: " + remaining + "</p>" +
      "<p>Guesses: " + userAttempts + "</p>";
  
    document.querySelector("#Psychic").innerHTML = html;

};





