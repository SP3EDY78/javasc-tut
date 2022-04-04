function randomNumber() {
    return Math.ceil(Math.random() * 9);
}


function testParams(randInt) {
if (randInt < 1) {
    console.log('lower limit fail!');
    }
if (randInt > 9) {
    console.log('upper limit fail!');
    }
}


//let randInt = randomNumber();
// console.log(randInt);

let i = 0;
while (i < 10000) {
randInt = randomNumber();
testParams();
i++;
}

let test = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
i = 0;
while (i < 10000) {
randInt = randomNumber();
test[randInt]++;
i++;
}
console.log(test) //array output should display count of outputs from 0, 1 ,2 3...
