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

  // Private Method
  #calculate_Monthly_Interest_Rate() {
    return this.interestRate / 100 / this.#month;
  }

  // Public Method
  calculate_EMI() {
    const r = this.#calculate_Monthly_Interest_Rate();
    const m = this.#month;

    return Math.round(
      (this.#loanAmount * r * Math.pow(1 + r, m)) / (Math.pow(1 + r, m) - 1)
    );
  }

  // Getter mathod
  getLoanAmount() {
    return this.#loanAmount
  }

  // Setter mathod
  setMonth(month) {
    return this.#month = month
  }

  // Use this method for Polymorphism in future
  getLoanMessage() {
    return `Your rest of loan amount is ${this.#loanAmount} tk.`
  }
}

// Create new Instance samsung
const phone = new Mobile("Samsung", "125gm", 2024, 22500, 10000, 5.5);
// console.log("Phone name: " + phone.name + ", " + "model is: " + phone.model);
// console.log("Monthly EMI is :", phone.calculate_EMI());

// Abstraction layer that interacts with the Mobile class
class MobileStore {
  #products

  constructor() {
    this.#products = [];
  }

  // Abstraction method to add a product
  addProduct(product) {
    if (!(product instanceof Product)) {
      throw new Error("Only products can be added.");
    } else {
      this.#products.push(product);
    }
  }

  // Abstraction method to list all products with their EMI
  listProductsWithEMI() {
    this.#products.forEach((product) => {
      console.log(`This ${product.name} is ${product.model} and your monthly EMI is ${product.calculate_EMI()}`)
    })
  }
}

// Create new instances
const samsung = new Mobile("Samsung", "175gm", 22000, 22500, 10000, 5.5);
const redmi = new Mobile("Redmi", "165gm", 23500, 22500, 5000, 6.0);

// Create instance
let store = new MobileStore()
store.addProduct(samsung)
store.addProduct(redmi)

console.log(store.listProductsWithEMI())


// Polymorphism
class Message extends Mobile {
  constructor(name, weight, model, payment, downPayment, interestRate) {
    super(name, weight, model, payment, downPayment, interestRate)
  }

  // Polymorphism method that is override the actual Moble class method getLoanMessage()
  getLoanMessage() {
    console.log(`আপনার বাকি ঋণের পরিমাণ হল ${this.getLoanAmount()} টাকা।`)
  }
}

const loanMessage = new Message("Apple", "125gm", 2024, 2500, 100, 2)

// console.log(loanMessage.getLoanMessage())
// console.log(phone.getLoanMessage());