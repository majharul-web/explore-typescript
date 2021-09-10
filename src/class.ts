/* use private keyWord for private variable(_name) */

class Car{
    name:string;
    price:number;
    constructor(name:string,price:number){
        this.name=name;
        this.price=price;
    }

    getTotalPrice(tax:number):number{
        const taxAmount=this.price*tax/100;
        const total=this.price+taxAmount;
        return total;
    }
}

const toyota=new Car('toyota',100000);
const total:number=toyota.getTotalPrice(10);
console.log(total)