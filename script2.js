// Class is a Blueprint / Structure of actual object.
class Vehical {
    // Private properties
    #downpayment
    #price
    // Constructor is a build-in function that call autometically when a class create an instance.
    constructor(name, model, weight, price, downpayment) {
        // Public Properties
        this.name = name;
        this.model = model;
        this.weight = weight
        this.#price = price;
        this.#downpayment = downpayment;
    }

    // Polymorphism
    getDetails() {
        console.log(`This ${this.name} is ${this.model} and vehical weight is ${this.weight}`)
    }

    // public methiods
    vehicalLoan() {
        return this.#price - this.#downpayment + " tk rest of vehical loan"
    }

    getPrice() {
        return this.#price
    }

    setPrice(price) {
        return this.#price = price
    }
}

// Inheritance and Encapsulation
class Bike extends Vehical {
    constructor(name, model, weight, price, downpayment, wheel, color) {
        super(name, model, weight, price, downpayment)
        this.numberOfWheel = wheel;
        this.color = color;
    }

    // Polymorphism
    getDetails() {
        console.log(`${this.name} is new model ${this.model} bike. Color is ${this.color}.`)
    }
}

// Inheritance
class Car extends Vehical {
    constructor(name, model, weight, price, downpayment, wheel, color) {
        super(name, model, weight, price, downpayment)
        this.wheel = wheel;
        this.color = color;
    }

    // Polymorphism
    getDetails() {
        console.log(`${this.name} is new model ${this.model} car. Color is ${this.color}.`)
    }
}

// Abstruction
class VehicalProduct {
    constructor() {
        this.products = [];
    }

    // Hide Implemantation
    addVehical(vehical) {
        if (vehical instanceof Vehical) {
            this.products.push(vehical)
        } else {
            throw new Error("vehical is not Instance of Vehical")
        }
    }
    // Hide Implemantation
    showList() {
        this.products.forEach((ele) => {
            console.log(`${ele.name} is added.`)
        })
    }
}


let store = new VehicalProduct()

function GetDetails(instanceName) {
    if (instanceName instanceof Vehical) {
        instanceName.getDetails()
    }
}
// Instance 
let suzuki = new Bike("Suzuki", 2024, "880kg", 250000, 180000, 2, "red")
let honda = new Car("Honda", 2023, "880kg", 2500000, 100000, 4, "White")


// store.addVehical(suzuki)
// store.addVehical(honda)
// store.showList()

// console.log(suzuki.vehicalLoan())
// suzuki.setPrice(500000)
// console.log(suzuki.getPrice())

// console.log(honda.vehicalLoan())

GetDetails(suzuki)
GetDetails(honda)

