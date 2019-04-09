//arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1));

//this keyword- no longer bound

const user = {
  name: "Matthew",
  cities: ["San Diego", "New York", "Union City"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
    // this.cities.forEach(city => {
    //   console.log(this.name + "has lived in " + city);
    // });
  }
};

console.log(user.printPlacesLived());

//challenge area

const multiplier = {
  //numbers - array of numbers
  numbers: [4, 6, 8],
  //multiplyBy - single number
  multiplyBy: 5,
  //multiply - return a new array where the numbers have been multiplied
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
