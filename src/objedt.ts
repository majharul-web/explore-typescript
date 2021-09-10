// example 1:manual
const students: { name:string, age: number } = {
    name: 'jony',
    age: 10,
};
console.log(students);

// example 2:use type
type person={
    name:string,
    age:number,
    passed:boolean,
    gpa:number
};

const students2:person={
    name:'jony',
    age:21,
    passed:true,
    gpa:3.92
}
console.log(students2)