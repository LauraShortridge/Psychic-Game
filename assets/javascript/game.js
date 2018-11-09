console.log("Laura")

let numberOfGuesses = 10
let pickedLetter = []; 
let wrongGuesses = []; 

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

//Pick a random letter
function start() {

    let pickedLetter = Math.floor(Math.random()*alphabet.length);
    console.log(pickedLetter);
    console.log(3);

}

//Define Wins
let wins = 0 

//Define Loses
let loses = 0 

//Define Guesses Left

function guessesLeft () {
    let numberOfGuesses 
}

//List Guesses So Far

