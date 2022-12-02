// let js = "amazing";
// console.log(48 + 28 + 12 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

const country = "USA";
// const continent = "North America";
// let population = 331900000;
let population = 49;
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
isIsland = false;

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
// const markMass = 78;
// const markHeight = 1.69;
// const markMass = 95;
// const markHeight = 1.88;

//John
// const johnMass = 92;
// const johnHeight = 1.95;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / (johnHeight * johnHeight);
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

//why isn't this outputting?
// if (markHigherBMI) {
//   console.log(
//     `Mark's BMI (${Math.round(markBMI)}) is higher than John's (${Math.round(
//       johnBMI
//     )})!`
//   );
// } else {
//   console.log(
//     `John's BMI (${Math.round(johnBMI)}) is higher than Mark's (${Math.round(
//       markBMI
//     )})!`
//   );
// }

// console.log(markBMI, johnBMI, markHigherBMI);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

let language = "english";
// let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// const age = 14;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start driving license 🪪");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// let century;
// const birthYear = 1991;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   let century = 21;
// }

// console.log(century);

// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average`
//   );
// }

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);

// console.log(Number("Jonas")); //NaN means not a number

// console.log(String(23));

// console.log("9" - "5");
// console.log("19" - "13" + "17"); // why is this 617?
// console.log("19" - "13" + 17); //no it's showing the correct value 23
// console.log("123" < 57); //shows false falue no matter if 123 is a string or not
// console.log(5 + 6 + "4" + 9 - 4 - 2); //18 if four is just regular number but 1143 if four is a string

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("you should get a job!");
// }

// let height = 123;
// if (height) {
//   console.log("hieght defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// if (0 === undefined) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//LECTURE: Equality Operators: == vs. ===

// declare variable 'numNieghbors'
// let numNeighbours = prompt("How many neighbor countries does your country have?");

// console.log(typeof numNeighbours)
// console.log(typeof )
// console.log('1' === 1)
// if there is only one neighbour log into the console 'Only 1 border' (use loose equality == for now)
// if (Number(numNeighbours) === 1) {
//   console.log("Only 1 border");
// }
// // Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than one
// else if (Number(numNeighbours) > 1) {
//   console.log("More than 1 border");
// }
// // Use an else block to log 'No Borders' (this block will be executed when 'numNieghbours' is 0 or any other value)
// else {
//   console.log("No Borders")
// }
//√√ Test the code with different values of 'numNieghbors', including 1 and 0.

//√√ Change == to ===, and test the code again, with the same values of 'numNeighbors'. Notice what happens when there is exactly 1 border! Why is this happening? I got no border, I wonder, why? Because numNeighbours is typeof string. Due to strict equality 1 does not equal '1'. So the code takes it as undefined? So it goes to the last conditional statement

// Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1
//It's not doing it for me
//It's still not working for me...
//I get "no borders" should be "only 1 border"

// Reflect on why we should use the === operator and type conversion in this situation
// To avoid a bug

// LECTURE: Logical Operators
//√√ 1. Comment out the previous code so the prompt doesn't get in the way

// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.

// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.

// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('

// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)

const hasDriverLicense = true;
const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = true;
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if(hasDriverLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log('Someone else should drive...')
// }

// const shouldDrive =

// let population;

// if(population < 50000000){

// }

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

//Challenge #3

//TEST DATA: Dolphins score 96, 108, and 89. Koalas score 88, 91, 110

// Test Case
// Description: Find average of score for each team
// Step 1) cycle through each number
// EXPECTATION:
// ACTUAL:

// Step 2) each single iteration store number into a variable
// EXPECTATION:
// ACTUAL:

// Step 3) add each number to the one before it into the variable
// EXPECTATION:
// ACTUAL:

const Dolphins = [96, 108, 89];

let total = 0;

for (let i = 0; i < Dolphins.length; i++) {
  const element = Dolphins[i];
  // console.log(element)

  total += element

  console.log(total)
}
