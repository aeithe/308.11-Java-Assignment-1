// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
//const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
//const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
//const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
//const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
//const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.


/**const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
  */

//this is to check if all the numbers are divisible by 5
  
const divBy5 = n1%5 && n2%5 && n3%5 && n4%5;

//this was to test if div by 5 
console.log(`The four numbers are valid according to the fact that they're all divisible by 5: ${n1%5 === 0 && n2%5 === 0 && n3%5 === 0 && n4%5 === 0}.`);



//this is to check if the first number is larger than the rest

const is1LargerThan4 = n1 > n4;

//this was to test if true
console.log(`The first number is larger than the fourth number: ${is1LargerThan4}.`);

/**
 * Accomplished the following arithmetic chain:
Subtracted the first number from the second number.
Multiplied the result by the third number.
Found the remainder of dividing the result by the fourth number.
 */

const arithmetic = (n2-n1);
const multiplication = arithmetic * n3;
const result = multiplication / n4;

//this is to calculate arithmatic
console.log(`When you subtract the first number from the second number, then multiply the result by the third number, and lastly divide it by the fourth number the result is: ${result}.`);

/**
 * Changed the way that isOver25 calculates so that we do not need to
 *  use the NOT operator 
 * (!) in other logic comparisons. Rename the variable as appropriate.
 */

const under25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

//checked if under 25
console.log(`The selected numbers are all under 25: ${under25}.`);


/**
 * The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation or template literals.
 */

const totalTrip = 1500;
const costOfFuel = 3; 
const fuelBudget = 175;
const scenario1 = 55/30;
const scenario2 = 60/28;
const scenario3 = 75/23;

const hoursTrip1 = totalTrip/55;
const hoursTrip2 = totalTrip/60;
const hoursTrip3 = totalTrip/75;

const gallonsTrip1 = hoursTrip1*scenario1
const gallonsTrip2 = hoursTrip2*scenario2
const gallonsTrip3 = hoursTrip3*scenario3

const costTrip1 = gallonsTrip1*3;
const costTrip2 = gallonsTrip2*3;
const costTrip3 = gallonsTrip3*3;

let trip1InBudget = costTrip1 <= fuelBudget
let trip2InBudget = costTrip2 <= fuelBudget
let trip3InBudget = costTrip3 <= fuelBudget

console.log(`For the first scenario, going 55 mPH, the entire trip will take you ${hoursTrip1} hours, ${gallonsTrip1} \
gallons, with a total cost of ${costTrip1} dollars - not exceeding the budget: ${trip1InBudget}.`);
console.log(`For the second scenario, going 60 mPH, the entire trip will take you ${hoursTrip2} hours, ${gallonsTrip2} \
gallons, with a total cost of ${costTrip2} dollars - not exceeding the budget: ${trip2InBudget}.`);
console.log(`For the third scenario, going 75 mPH, the entire trip will take you ${hoursTrip3} hours, ${gallonsTrip3} \
gallons, with a total cost of ${costTrip3} dollars - not exceeding the budget: ${trip3InBudget}.`);


  


