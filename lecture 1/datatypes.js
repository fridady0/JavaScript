//  Primitive data types 1) number = contains integer(+,-) , float values

let age = 20 ;
let price = 99.9;

// 2) Strings 

let fullName = "Tony Stark";

// 3) Boolean

let isPass = true;

// 4) Undefined

let x ;

// 5) null 

let y = null;

// 6) BigInt = larger integer 

let a = 123;

// 7) Symbol 

let z = Symbol("Hello !");

// Non Primitive 1) object = key value pairs 

const students = {
    Name : "Vatsalya V Prasad" ,
    age : 24 ,
    cgpa : 8.2 , 
    isPass : false 
};

console.log(students);
// to fetch data from object 2 methods 1)
console.log(students.age);
// 2)
console.log(students["isPass"]);
