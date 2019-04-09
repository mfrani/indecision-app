// function square(x) {
//   return x * x;
// }
// console.log(square(3));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(10));

//Challenge - Use arrow functions
//getFirstName('Mike Smith') -> "Mike"
//Create regular arrow function
//Create arrow function using shorthand syntax
const fullName = "Mike Smith";

const getFirstName = fullName => {
  return fullName.split(" ")[0];
};

console.log(getFirstName(fullName));

const getFirstName2 = fullName => fullName.split(" ")[0];

console.log(getFirstName2(fullName));
