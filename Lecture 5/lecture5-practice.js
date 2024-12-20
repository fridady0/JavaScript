// /* Q1. Create a function using the "function" leuword that takes a string as an argument and return the 
// number of vowels in the string. */

// function vowelCount(str){
//     let vowels = ["a","e","i","o","u","A","E","I","O","U"];
//     let count = 0;
//     for(let i=0; i<str.length ; i++){
//         for(let j=0; j<vowels.length;j++){
//             if (str[i] == vowels[j]){
//                 count ++;            
//         }
//     }
// }
// return `The number of vowels in ${str} = ${count}` ;    
// }
// vowelCount("Vatsalya");

// // Q2. Create an arrow function to perform same task 

// let countVowel = (str) => {
//     let vowels = ["a","e","i","o","u","A","E","I","O","U"];
//     let count = 0;
//     for(let i=0; i<str.length ; i++){
//         for(let j=0; j<vowels.length;j++){
//             if (str[i] == vowels[j]){
//                 count ++;            
//         }
//     }
// }
// return `The number of vowels in ${str} = ${count}` ; 
// }

// countVowel("Vatsalya");

// Q3. For a given array of number , print the square of each number value using forEach loop

// let num = [1,2,3,4,5,6];
// num.forEach((val) =>{
//     console.log(`The Square of the ${val} = ${val**2}`);
// } )

// Q4. We are given array of marks of students.Filter out of the marks of the student that scored 90+

// let marks = [40,78,44,92,94,56,89,98];
// let topper = marks.filter((mark) => {
//     return mark > 90 ;

// })

// console.log(`The Student scoring more than 90 are : ${topper}`);

/* Q4. Take a number n as input from user. Create an array of number from 1 to n.
        Use the reduce method to calculate sum of all the numbers in the array.
        Use the reduce method to calculate product of number in the array.
*/

let n = prompt("Enter a number : ");
let arr = [];
for(let i = 1 ; i <= n ; i++ ){
    arr.push(i);
}

console.log(arr);
let sum = arr.reduce((res,curr) => {
    return res + curr;
})
console.log(`The sum = ${sum}`);

let prod = arr.reduce((res,curr) => {
    return res * curr;
})
console.log(`The product = ${prod}`);