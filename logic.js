// variables
//--------------------------
// array and variables
var characters = ["Harry", " Ron", "Hermione", "Draco", "Lord Voldemort"];
var selectCharacter = "";
var lettersinName = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];

// game counters

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;
//functions
//----------------------

function startGame() {
    selectCharacter = characters[Math.floor(Math.random() * characters.length)];
    lettersinName = selectCharacter.split("");
    numBlanks = lettersinName.length;
    //testing
    console.log(characters);
    console.log(lettersinName);
    console.log(numBlanks);
}

//main process 
//---------------------

startGame();

