/*  Q1 for a given array with marks of students -> [85,97,44,37,76,60] find the avg of the marks of 
entire class avg = (sum of all )/ total number */

// let marks = [85,97,44,37,76,60];
// let sum = 0 ;
// for(let i of marks){
//     sum += i;
// }
// let avg = sum/marks.length;
// console.log(`The average marks of class is = ${avg}`);

/* Q2. For a given array with price of 5 items -> [250,645,300,900,50] all product have an offer of 10% 
off on them . Change the array to store  final price after applying offer.*/

let price = [250,645,300,900,50];
let finalAmt = [];
console.log(finalAmt);
for(let i =0 ; i< price.length ; i++){
    let amt = i/10;
    i -= amt;
    price = finalAmt[i];
}
console.log(finalAmt);