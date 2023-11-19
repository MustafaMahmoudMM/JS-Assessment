"use strict";

// 3-Swap the values of x and y using destructuring.

let x = 4;
let y = 5;
console.log(`Original: x=${x}, y=${y}`);

/*---------- Testing ----------*/

[y, x] = [x, y];
console.log(`Swapped: x=${x}, y=${y}`);
