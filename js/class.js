"use strict";
/* use private keyWord for private variable(_name) */
class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('toyota', 100000);
const total = toyota.getTotalPrice(10);
console.log(total);
