// let js = "amazing";
// console.log(48 + 28 + 12 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

const country = "USA";
const continent = "North America";
let population = 331900000;
// let population = 130
// let populationDivided = population / 2;

// console.log(populationDivided / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population > 3);

// let language = "english";
// let description =
//   country +
//   " is in " +
//   continent +
//   " , and its " +
//   population +
//   " million people speak " +
//   language;
// console.log(description);

// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = "USA";
// isIsland = true;

// console.log(typeof isIsland)
// console.log(typeof population)
// console.log(typeof country)
// console.log(typeof language)

////////////////////////////////
//Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass/height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall
*/

//Marks
const markMass = 78;
const markHeight = 1.69;
// const markMass = 95;
// const markHeight = 1.88;

//John
const johnMass = 92;
const johnHeight = 1.95;
// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//why isn't this outputting?
if (markHigherBMI) {
  console.log(
    `Mark's BMI (${Math.round(markBMI)}) is higher than John's (${Math.round(
      johnBMI
    )})!`
  );
} else {
  console.log(
    `John's BMI (${Math.round(johnBMI)}) is higher than Mark's (${Math.round(
      markBMI
    )})!`
  );
}

console.log(markBMI, johnBMI, markHigherBMI);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

let language = "english";
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

const age = 14;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🪪");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

let century;
// const birthYear = 1991;
if (birthYear <= 2000) {
  century = 20;
} else {
  let century = 21;
}

console.log(century);

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

const inputYear = "1991";
console.log(Number(inputYear), inputYear)
console.log(inputYear + 18);

console.log(Number('Jonas')) //NaN means not a number

console.log(String(23))
