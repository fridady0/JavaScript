let str = "Vatsalya";
let str2 = 'Hello';

// console.log(str[0]);

// Template Litreal
let SpecialString = `This is a template litreal ${1+2+3}`;
const obj = {
    item : "Pen",
    price : 10
};
//   to print the item and its price we generally do 
console.log("The price of the" ,obj.item , "is" , obj.price);
//  but instead of this we can use template litreal to embed values directly into string 
let templateLiteral = `The price of the ${obj.item} is ${obj.price}`;
console.log(templateLiteral);