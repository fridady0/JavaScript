// let str = "Vatsalya";
// let str2 = 'Hello';

// // console.log(str[0]);

// // Template Litreal
// let SpecialString = `This is a template litreal ${1+2+3}`;
// const obj = {
//     item : "Pen",
//     price : 10
// };
// //   to print the item and its price we generally do 
// console.log("The price of the" ,obj.item , "is" , obj.price);
// //  but instead of this we can use template litreal to embed values directly into string 
// let templateLiteral = `The price of the ${obj.item} is ${obj.price}`;
// console.log(templateLiteral);

// // Escape Characters 
// console.log("Vatsalya \n Prasad");

let str = "Vatsalya";
let str2 = "  Prasad    ";
console.log(str2);
// String Methods  1) toUpperCase();

console.log(str.toUpperCase());
// 2) toLowerCase();
console.log(str.toLowerCase());
// 3) to remove white space str.trim();
console.log(str2.trim());
// 4) to get a part of string Slicing str.slice(start,end); the end value in not included
console.log(str.slice(2,6))  // tsal
// 5) to joing 2 strings 2 ways either user "+" operator or use str.concat() method
console.log(str.concat(str2));
// 6) to replace a vale or number of value in string str.replace();

let string = "Hellolololo";
console.log(string.replace("lo" , "p")); // replaces first match 
console.log(string.replaceAll("lo" , "p")); // replace every match 
// to replace in main string str[0] = 1 wont work instead use replace method
string = string.replace("H","Y");
console.log(string);

// 7) to know char at certain index str.charAt(index);
console.log(str.charAt(3)); // s