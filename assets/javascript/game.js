//Define variables

let numberOfGuesses = 10;
let wrongGuesses = []; 
let wins = 0;
let losses = 0;

let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

let pickedLetterIndex = Math.floor(Math.random()*alphabet.length);
let pickedLetter = alphabet[pickedLetterIndex];
// console.log(pickedLetter, "pickedLetter"); 


//Refresh Page
onload = updateHTML();

//Pick a random letter//Compare user guess//List guessed letters
document.onkeyup = function(event) {
    let userGuess = event.key; 
    // console.log(userGuess, "this is userGuess")
    if (userGuess === pickedLetter) {
        wins++;
        console.log (userGuess, pickedLetter, "userGuess/pickedLetter");
        reset(); 
    } else if (numberOfGuesses > 1) {
        numberOfGuesses--; 
        wrongGuesses.push(userGuess);
        console.log (numberOfGuesses, "numberofGuesses");
    } else {
        losses++;
        reset(); 
    }
    updateHTML();
};


//Update HTML
function updateHTML() {
    document.getElementById("remainingGuesses").innerHTML = numberOfGuesses;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("wins").innerHTML = wins; 
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses; 
}; 

//Reset Game
function reset() {
    numberOfGuesses = 10; 
    wrongGuesses = []; 
    pickedLetterIndex = Math.floor(Math.random()*alphabet.length);
    pickedLetter = alphabet[pickedLetterIndex];
    // console.log(pickedLetter, "PickedLetter2")
};