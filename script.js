// class is a BluePrint/Structure of actual Object.
class Mobile {
  // constructor is a build-in function that call autometically when a class create new instance.
  constructor(name, weight, width, model) {
    this.name = name;
    this.weight = weight;
    this.width = width;
    this.model = model;
  }
}

// Create new Instance firstPersonMob
let firstPersonMob = new Mobile("Samsung", "175gm", 6.5, 2023);
let secondPersonMob = new Mobile("Redmi", "165gm", 6.2, 2019);

console.log("Model", firstPersonMob.model); // 2023
console.log("Model", secondPersonMob.model); // 2019
