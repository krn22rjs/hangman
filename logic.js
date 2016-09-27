// variables
//--------------------------
// array and variables
var characters = ["Harry", "Ron", "Hermione", "Draco", "Lord Voldemort"];
var selectCharacter = "";
var lettersinName = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];

// game counters

var winCount = 0;
var lossCount = 0;
var guessesLeft = 14;
//functions
//----------------------

function startGame() {
    selectCharacter = characters[Math.floor(Math.random() * characters.length)];
    lettersinName = selectCharacter.split("");
    numBlanks = lettersinName.length;


    //reset the game
    guessesLeft = 14;
    wrongLetters = [];
    blankAndSuccesses = [];

    // populate blanks and success with blanks
    for(var i = 0; i<numBlanks; i++){
      blankAndSuccesses.push("_")
    }

    // changing html to reflect each round 
    document.getElementById("nameToGuess").innerHTML = blankAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;
    //testing
    console.log(characters);
    console.log(lettersinName);
    console.log(numBlanks);
    console.log(blankAndSuccesses);
}

//main process 
//---------------------

// starts the game 

startGame();


// keyclicks
document.onekeyup = function(event){
  var letterGuessed = String.fromCharCode(event.keycode).toLowerCase();

  // testing
  console.log(letterGuessed);
}
