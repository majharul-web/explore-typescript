// example 1:add two num
function add1(num1:number,num2:number):number{
    const result=num1+num2;
    return result;
}
const result1:number=add1(10,15);
console.log(result1);


// example 1:add two num or name
function add2(num1:number |string, num2:number |string):number |string{
    const result=num1+num2;
    return result;
}
const result2:number=add1(30,15);
// string
const result3:number=add1('mr','Rahim');
console.log(result3);



// example 3:use void for no return
function add3(num1:number, num2:number):void{
    const result=num1+num2;
    console.log(result);
}
add3(400,500);

