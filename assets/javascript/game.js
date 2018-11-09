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

//Pick a random letter//Compare user guess//
document.onkeyup = function(event) {
    let userGuess = event.key; 
    let pickedLetter = Math.floor(Math.random()*alphabet.length);
    if (userGuess === pickedLetter) {
        wins++;
    } else {
        losses++; 
    }
};

//List guessed letters


//Update HTML
function updateHTML() {
    document.getElementById("#remainingGuesses").innerHTML = numberOfGuesses;
    document.getElementById("#loses").innerHTML = losses;
    document.getElementById("#wins").innterHTML = wins; 

}; 