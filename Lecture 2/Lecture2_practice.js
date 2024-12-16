// Q1.Get user to input a number using promt("Enter a number:") check if the number is a multiple of 5 or not


// let num = prompt("Enter a number : ");
// if(num % 5 === 0){
//     console.log(num, "is a multiple of 5.");
// }
// else{
//     console.log(num , "is not not a multiple of 5.");
// }

/* Q2.Write a code which can give grades to students according to their scores
    80 - 100 A
    70 - 89  B
    60 - 69  C
    50 - 59  D
    0 - 49   F */

let score = prompt("Enter your score (0-100): ");
let grade ;

if(score <= 100 && score >= 80  ){
    grade = "A";
}
else if(score < 80 && score >= 70 ){
    grade = "B";
}
else if(score < 70 && score >= 60 ){
    grade = "C";
}
else if(score < 60 && score >= 50 ){
    grade = "D";
}
else if(score < 49 && score >= 0 ){
    grade = "F";
}

console.log("According to your score your grade is : ",grade);