// Class is a BluePrint/Structure of actual Object.

// Create Class
class Product {
  // constructor is a build-in function that call autometically when a class create new instance.
  constructor(name, weight, model) {
    this.name = name;
    this.weight = weight;
    this.model = model;
  }
}

// Create new Instance
let firstProduct = new Product("Samsung", "175gm", 22000);
let secondProduct = new Product("Redmi", "165gm", 23500);

// console.log("First Product Price :", firstProduct.price); // 22000
// console.log("Second Product Price :", secondProduct.price); // 23500

// Inheritance And Encapsulation
// Inherite Product Class
class Mobile extends Product {
  // private properties
  #month;
  #loanAmount;

  constructor(name, weight, model, payment, downPayment, interestRate) {
    // call parent class Product constructor
    super(name, weight, model);

    this.payment = payment;
    this.downPayment = downPayment;
    this.interestRate = interestRate;

    // private Properties
    this.#month = 12;
    this.#loanAmount = this.payment - this.downPayment;
  }

  // private Method
  #calculate_Monthly_Interest_Rate() {
    return this.interestRate / 100 / this.#month;
  }

  calculate_EMI() {
    const r = this.#calculate_Monthly_Interest_Rate();
    const m = this.#month;

    return Math.round(
      (this.#loanAmount * r * Math.pow(1 + r, m)) / (Math.pow(1 + r, m) - 1)
    );
  }
}

// Create new Instance samsung
const phone = new Mobile("Samsung", "125gm", 2024, 22500, 10000, 5.5);

// console.log("Phone name: " + phone.name + ", " + "model is: " + phone.model);
// console.log("Monthly EMI is :", phone.calculate_EMI());
