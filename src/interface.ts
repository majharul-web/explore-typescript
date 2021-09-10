// example 01:simple
interface Player{
    name:string,
    age:number
}
const cricket:Player={
    name:'tamim',
    age:18
}
console.log(cricket)

// example 02:extends
interface Person{
    name:string,
    age:number
}

interface Biodata extends Person{
    district:string,
    job:string
}

const man:Biodata={
    name:'jony',
    age:25,
    district:'dinajpur',
    job:'wd'
}
console.log(man)