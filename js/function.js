"use strict";
// example 1:add two num
function add1(num1, num2) {
    const result = num1 + num2;
    return result;
}
const result1 = add1(10, 15);
console.log(result1);
// example 1:add two num or name
function add2(num1, num2) {
    const result = num1 + num2;
    return result;
}
const result2 = add1(30, 15);
// string
const result3 = add1('mr', 'Rahim');
console.log(result3);
// example 3:use void for no return
function add3(num1, num2) {
    const result = num1 + num2;
    console.log(result);
}
add3(400, 500);
