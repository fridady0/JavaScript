// // push() : adds value to end

// let foodItems = ["paneer" , "tomato" , "onion" , "corn" ];
// console.log(foodItems);
// foodItems.push("chips");
// foodItems.push("lemon", "apple", "banana");
// console.log(foodItems);

// // pop() : delete from end and return 

// let delVal = foodItems.pop();
// console.log(delVal);

// // toString() : converts array to string

// let str = foodItems.toString();
// console.log(str);
// console.log(foodItems);

// // concat() : joins multiple array and return the result 

// let marvelHeros = ["thor","loki","hulk","iron man"];
// let dcHeros = ["batman","superman"];
// let indianHeros = ["shaktiman","krish"];
// let heros = marvelHeros.concat(dcHeros,indianHeros);
// console.log(heros);

// unshift() : adds to start 

// let marvelHeros = ["thor","loki","hulk","iron man"];
// marvelHeros.unshift("antman");
// console.log(marvelHeros);

// shift() : delete from start and returns value

// let marvelHeros = ["thor","loki","hulk","iron man"];
// let del = marvelHeros.shift();
// console.log(del);

// slice : returns a piece of array & last index is not included 

// let marvelHeros = ["thor","loki","hulk","iron man","Dr.Strange"];
// console.log(`Orignal array : ${marvelHeros}`);
// console.log(`Sliced array havind start & end : ${marvelHeros.slice(1,3)}`);
// console.log(`Sliced array havind start only : ${marvelHeros.slice(1)}`);

// splice() :   changes orignal array (add ,remove, replace) {Start,delCount,newEle}

let marvelHeros = ["thor","loki","hulk","iron man","Dr.Strange"];
console.log(marvelHeros.splice(1,2,"antman","cAmerica"));
console.log(marvelHeros);

// adding element using splice 
marvelHeros.splice(2,0,101);

// Deleting element using splice 
marvelHeros.splice(1,1,);
console.log(marvelHeros);
// Replace element using splice 
marvelHeros.splice(2,1,"Odin");
console.log(marvelHeros);

marvelHeros.splice(3);
console.log(marvelHeros);