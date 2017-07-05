// console.log("******Problem 1*******")
// let x = true;
// console.log(typeof x)
//
// console.log("******Problem 2*******");
// let y = null;
// console.log(typeof y);
//
// console.log("********Problem 3*******");
// let z = undefined;
// console.log(typeof z);
//
// console.log("*******Problem 4********");
// let a = 15;
// console.log(typeof a);
//
// console.log("*******Problem 5*********");
// let b = "hello";
// console.log(typeof b);


console.log("*********Rock Paper Scissors**************");

let choice = ["rock", "paper", "scissors"]; //ARARY OF CHOICES//


const computer = choice[Math.floor(Math.random() * choice.length)] //COMPUTER CHOICE RANDOMIZED//

let me = choice[Math.floor(Math.random() * choice.length)]; //MY CHOICE IS RANDOMIZED//

let meRock = me === "rock";     // ABBREVIATION//
let mePaper = me === "paper";   // ABBREVIATION//
let meScissors = me === "scissors"     // ABBREVIATION//

let compRock = computer === "rock";     // ABBREVIATION//
let compPaper = computer === "paper";     // ABBREVIATION//
let compScissors = computer === "scissors";     // ABBREVIATION//

if (me === computer) {
  console.log("Looks like a tie!");
}
else if (meRock && compScissors ) {
  console.log("I win!");
}                                            //************************************//
else if (mePaper && compRock) {             //**************LOGIC********************//
  console.log("I win!");                    //**************************************//
}
else if (meScissors && compPaper) {
  console.log("I win!");
}
else {
  console.log("I lose!")
}










//
