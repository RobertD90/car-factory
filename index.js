class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return (`${this.make}, ${this.model}, ${this.year}`)

    }
}
const carDescription = new Car(`Fiat`, `Regata`, `1984`)
console.log(carDescription.getDescription())

class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year)
        this.range = range
    }
    getDescription() {
        return `${super.getDescription()},range: ${this.range} }`
    }
}
const carDescription2 = new ElectricCar(`Tesla`, `3`, "2020", "350")
console.log(carDescription2.getDescription())