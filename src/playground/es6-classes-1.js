class Person {
  // constructor(name = "Anonymous") {
  //   this.name = name;
  // }

  // Setup constructor to take name and age (default to 0)
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  //getDescription - Matthew Frani is 29 year(s) old.
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }

  getGreeting() {
    //return "Hi! " + this.name + "!";
    return `Hi. I am ${this.name}!`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

//Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Matthew Frani. I'm visiting from Pheladelphia.
// 2. Hi. I am Matthew Frani.

class Traveler extends Person {
  constructor(name, homeLocation) {
    super(name);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveler(undefined, "");
console.log(me.getGreeting());

const me2 = new Traveler("Matthew Frani", "California");
console.log(me2.getGreeting());
