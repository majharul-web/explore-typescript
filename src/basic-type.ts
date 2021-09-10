
// 01: variable declaration with Type and assign value
let money:number=500;
// console.log(money)

let friends:string='Jony';
// console.log(friends);

let isTrue:boolean=true;
// console.log(isTrue);

// 02: variable declaration with Type ,not assign value,and reassign
let newFriend:string;
newFriend='jony';
// console.log(newFriend)

newFriend='rahim';
// console.log(newFriend)

// Use Union(|)
let a:number | string;
a=10;
console.log(a);
a='sima';
console.log(a);

// use any:by default any,it is not good way
// let numberArr;
let numberArr:any;
numberArr=[1,2,3,4];
console.log(numberArr)

