const ageToVote = 18;

const user = {
  name: "Sherlock Holmes",
  address: {
    street: "221B Baker Street",
    city: "London",
  },
};

const cases = [
  { title: "The Hound of the Baskervilles", releaseYear: 1901 },
  { title: "The Adventure of the Empty House", releaseYear: 1903 },
  { title: "The Adventure of the Norwood Builder", releaseYear: 1903 },
  { title: "The Adventure of the Dancing Men", releaseYear: 1903 },
  { title: "The Adventure of the Solitary Cyclist", releaseYear: 1904 },
];

// YOUR JS CODE

// CREATE VARIABLE AND FUNCTIONS
let currentYear = 2022;
let jsReleaseYear = 1995;
console.log(currentYear - jsReleaseYear);

function ageOfJavascript() {
  return "current age of Javascript is"(currentYear - jsReleaseYear);
}

// CONDITIONAL STATEMENT
//See above for the defined variable for ageToVote)

if (ageToVote >= 18) {
  console.log("JavaScript is old enough to vote");
}

if (ageToVote <= 18) {
  console.log("JavaScript is not old enough to vote");
}

// CREATE LOOPS

// LOOP THAT LOGS 0-100
//for (i = 0; i <= 100; i++) {
//  console.log(i);
//}

// LOOP THAT LOGS 0-100, ONLY MULTIPLES OF 10 THOUGH
//for (i = 0; i <= 100; i++) {
//  if (i % 10 === 0) {
//    console.log(i);
//  }
// % modulus is the remainder for unequal division
//10 % 9 == 1 (this is just the numerator in the remainder)
//}

// SAME LOOP THAT LOGS 0-100, ONLY MULTIPLES OF 10 THOUGH,
//ADD STRING 'Starting' before the loop runs
//ADD CONDITIONAL TO LOG MESSAGE HALFWAY
//ADD STRING 'Finished' WHEN LOOP CONCLUDES

for (i = 0; i <= 100; i++) {
  if (i % 10 === 0) {
    console.log(i);
  }
  if (i === 0) {
    console.log("Starting");
  }
  if (i === 50) {
    console.log("Halfway");
  }
  if (i === 100) {
    console.log("Finished");
  }
  // % modulus is the remainder for unequal division
  //10 % 9 == 1 (this is just the numerator in the remainder)
}

//ACCESS PROPERTIES OF AN OBJECT
//console.log(
//  user.name + " lives at " + user.address.street + ", " + user.address.city
//);

//ITERATE OVER THE CASES ARRAY OF OBJECTS AND LOG TITLE AND YEAR
//for (let i = 0; i < cases.length; i++) {
//  const item = cases[i];
//  console.log(item.title, item.releaseYear);
//}

//ITERATE OVER THE CASES ARRAY OF OBJECTS AND LOG TITLES OF CASES FROM YEAR 1903
for (let i = 0; i < cases.length; i++) {
  const item = cases[i];
  if (item.releaseYear == "1903") {
    console.log(item.title, item.releaseYear);
  }
}
