// add7 - Arrow function syntax
const add7 = (num) => num + 7;

// Grade Checker - switch statement with default
function getGradeScore(grade) {
  let score;
  switch(grade) {
    case "A":
      score = 80;
      break;
    case "B":
      score = 70;
      break;
    case "C":
      score = 60;
      break;
    case "D":
      score = 50;
      break;
    case "E":
      score = 40;
      break;
    default:
      score = "Invalid grade";
  }
  return score;
}

//  Countdown - while loop
function countdown(n) {
  while(n >= 1) {
    console.log(n);
    n--;
  }
}

//  Secret Finder - do...while loop
function findSecret() {
  let i = 0;
  do {
    if(i === 13) {
      console.log("Found the secret number: 13");
      break;
    }
    console.log(i);
    i++;
  } while(i <= 20);
}

// Testing - call functions at bottom 
console.log(add7(10));              // 17
console.log(getGradeScore("A"));    // 80
console.log(getGradeScore("C"));    // 60
countdown(5);                       // logs 5 down to 1
findSecret();                       // logs 0 to 12 then "Found the secret number: 13"