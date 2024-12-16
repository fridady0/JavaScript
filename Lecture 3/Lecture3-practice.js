// Q1. Print all even numbers from 0 - 100

// console.log("Even numbers from 0 to 100 are");
// for(let i = 0 ; i <= 100 ; i++ ){
//     if(i%2===0){
//     console.log(i);
//     }        
// }

/* Q2. Create a game where you start with any random game number.Ask the user to keep guessing the game 
number until the user enters correct value */

let gameNum = 5;
let userNum = prompt("Guess the game number :");

while(userNum != gameNum){
    userNum=prompt("You entered wrong number. Guess again");
}

console.log("Congratulation you choose the right number.");
