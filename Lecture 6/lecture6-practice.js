/* Q1) create a h2 heading element with text - "Hello JavaScript". Append "From Dehradun " to this text
using js */ 


// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2 = h2.innerText + "From Dehradun";
// console.dir(h2);

/* Q2) Create 3 divs with common class name - "box" . access them and add a unique text to them */

let divs = document.querySelectorAll(".box");
console.log(divs);
idx = 0;
for(div of divs){
    div.innerText = `new unique vale ${idx}`;
    idx++;
}

