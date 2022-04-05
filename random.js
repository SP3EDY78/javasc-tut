function randomNumber(ceiling, raiseFloor) {
    if (!raiseFloor) raiseFloor = 0;
    return Math.ceil(Math.random() * ceiling + raiseFloor);
}


function testParams(randInt) {
    if (randInt < 1) {
        console.log('lower limit fail!');
    }
    if (randInt > 9) {
        console.log('upper limit fail!');
    }
}


// console.log(randomNumber());

let i = 0;
while (i < 10000) {
    randInt = randomNumber(9);
    testParams();
    i++;
}

let test = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
i = 0;
while (i < 10000) {
    randInt = randomNumber(9);
    test[randInt]++;
    i++;
}
console.log(test) //array output should display count of outputs from 0, 1 ,2 3...
