let a = [4, 8, 15, 16, 42];
let b = ['david', 'eddie', 'alex', 'michael'];

console.log(a);
/* 
console.log(a[0]);
console.log(a[1]);
console.log(a);
 */

a[0] = 7;
console.log(a);
console.log(typeof a);

let c = [4, 'alex', true];
console.log(c);

//undefined :D
// console.log(b[4]);

console.log(a.length); //actual number not zero based

// a[10] = 77;
// console.log(a);

a.push(77);
console.log(a);

a.pop();
a.pop();
a.pop();
console.log(a);