function randomNumber() {
    return Math.floor(Math.random() * 6);
}

let nouns = ['House', 'Cat', 'Pot', 'Pan', 'Rock', 'Shovel'];

function Word3() {
    return nouns[randomNumber()] + 's';
}

console.log(Word3());
console.log(Word3());
console.log(Word3());
console.log(Word3());