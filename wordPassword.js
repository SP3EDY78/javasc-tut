//function to generate and display to console Word 1 - random number.
function randomNumber(ceiling, raiseFloor) {
    if (!raiseFloor) raiseFloor = 0;
    return Math.floor(Math.random() * ceiling + raiseFloor);
}
console.log(randomNumber(10))
//can be expanded by appending entries without altering functions' code
let Word2 = ['happy', 'sad', 'frustrated', 'angry', 'joy', 'surprise']; //function to generate and display to console Word 2 - random emotion
let Word3 = ['house', 'cat', 'pot', 'pan', 'rock', 'shovel']; //function to generate and display to console Word 3 - random plural noun
let Word4 = ['run', 'walk', 'jump', 'skip', 'hop', 'dance',] //function to generate and display to console Word 4 - random verb

function generatePassword() {
    return randomNumber(9) + ' ' + Word2[randomNumber(Word2.length)] + ' ' + Word3[randomNumber(Word3.length)] + 's' + ' ' + Word4[randomNumber(Word4.length)]
}

for (i = 1; i <= 3; i++) {
    console.log(generatePassword());
}