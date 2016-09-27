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
    for (var i = 0; i < numBlanks; i++) {
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
// 
function checkLetters(letter) {
    // checks if the letter exist in the word
    var isLetterInWord = false;
    //alert(letter);
    //for loop
    for (var i = 0; i < numBlanks; i++) {
        if (selectCharacter[i] == letter) {
            isLetterInWord = true;
        }
    }

    //check where is the word letter exist
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectCharacter[i] == letter) {
                blankAndSuccesses[i] = letter;

            }
        }

    }
    // letter wasn't found
    else{
      wrongLetters.push(letter);
      guessesLeft--
    }
// testing
console.log(blankAndSuccesses);
}

function roundComplete(){

//update HTML to reflect the user's guesses;
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("nameToGuess").innerHTML = blankAndSuccesses.join(" ");
document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

  console.log("Win Count: " + winCount + " | Lost Count: " + lossCount + " | Guesses Left " + numGuesses);

// check if user won
if(lettersinName.toString() == blankAndSuccesses.toString()){
  winCount++;
  alert("You won!");

  // update the win counter
  document.getElementById("winCounter").innerHTML = winCount;
  startGame();
}

// check if user loses
else if (guessesLeft == 0 ){
  lossCount++;
  alert("you lost !");


  //update html
  document.getElementById("lossCounter").innerHTML = lossCount;

  startGame();
}
}
//main process 
//---------------------

// starts the game 

startGame();


// keyclicks
document.onekeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keycode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    // testing
    console.log(letterGuessed);
}
