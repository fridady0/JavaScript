// /*  Q1 for a given array with marks of students -> [85,97,44,37,76,60] find the avg of the marks of 
// entire class avg = (sum of all )/ total number */

// // let marks = [85,97,44,37,76,60];
// // let sum = 0 ;
// // for(let i of marks){
// //     sum += i;
// // }
// // let avg = sum/marks.length;
// // console.log(`The average marks of class is = ${avg}`);

// /* Q2. For a given array with price of 5 items -> [250,645,300,900,50] all product have an offer of 10% 
// off on them . Change the array to store  final price after applying offer.*/

// let items = [250,645,300,900,50];
// let index = 0;
// //using for of loop 
// // for(let i of items){
// //     let offer = i/10;
// //     items[index] -= offer;
// //     console.log(`The values after offer = ${items[index]}`);
// //     index++;
// // }


// // using simple for loop 
// for(let i =0 ; i < items.length ; i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
//     console.log(`The values after offer = ${items[i]}`);
// }
// console.log(items);

/* Q2. Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
        a)  Remove the first company from the array 
        b)  Remove Uber and add Ola in its place
        c)  Add Amazon at the end  */

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(1,1,"Ola");
companies.push("Amazon");
console.log(companies);