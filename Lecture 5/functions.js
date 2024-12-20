// // Simple function 
// function myfunction(){
//     console.log("HI");
//     console.log("Vatsalya here");

// }

// myfunction();

// // parameterized function 
// function myfun(msg){
//     console.log(msg);
// }

// myfun("Parameterized function");

// // function for calculating 2 numbers

// function sum(a,b){
//     console.log(`Sum of ${a} , & ${b} is : ${a+b}`);
// }

// sum(2,3);

//  Arrow functions : compact way of writting function const fname = (par1,par2) =>{}
// writting sum function in arrow function form 

// const arrowSum = (x,y) => {
//     return x+y;
// }

// let x = arrowSum(4,5);
// console.log(x);

// forEach loop in js 
// let arr = [1,2,3,4,5];
// arr.forEach((val,ind,arr) => {
//     console.log(val,ind,arr);
// })

// let arr = ["delhi", "mumbai", "dehradun","pauri"];
// arr.forEach((city)=>{
//     console.log(city.toUpperCase());    
// })

// map method map(callbackfn(val,ind,arr)=>{    })
// let arr = [1,2,3,4];
// let newArr = arr.map((val)=>{
//     return val**2;
// })

// console.log(newArr);

// filter() method syn- arr.filter((val)=>{     })

let arr = [1,2,4,5,6,7,8];
let filterArr = arr.filter((val) => {
    return val%2 === 0;
})

console.log(filterArr);
console.log(arr);