/* Q1) Create a new button element . Give it a text "Click me", background color of red and text color
of white. Insert the button as the first element of the body tag
*/

let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
console.dir(btn);

let h1 = document.querySelector("h1");
h1.before(btn);

/* Q2) Create a <p> tag in HTML , give it a class and some styling . Now create a new class in css and 
try to append this class to the <p> element.
*/

let para = document.createElement("p");
para.setAttribute("class" , "newClass");
para.innerText = "Completing my lectures practice problems";
para.style.color = "red";
console.dir(para);
h1.after(para);
para.classList.add("new");      // this was done using clasList property