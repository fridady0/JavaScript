// let div = document.querySelector(".box");
// console.log(div);

// let id = div.getAttribute("class");
// console.log(id);

// let name = div.setAttribute("name","new class");
// console.log(name);

// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";

// div.style.fontSize = "25px";
// div.innerText = "Hello";

let newBtn = document.createElement("button");
newBtn.innerText = "Click me !";
console.dir(newBtn);

let div = document.querySelector(".box");
div.after(newBtn);