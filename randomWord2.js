function randomNumber() {
    return Math.floor(Math.random() * 6);
}

let emotions = ['Happy', 'Sad', 'Frustrated', 'Angry', 'Joy', 'Surprise'];

function Word2() {
    return emotions[randomNumber()];
}

console.log(Word2());
console.log(Word2());
console.log(Word2());
console.log(Word2());