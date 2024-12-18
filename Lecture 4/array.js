let marks = [55,56,33,21,89];
console.log(marks);
console.log(marks.length);

let heros = ["Ironman","Hulk","Thor","Antman"];
console.log(heros);
console.log(heros.length);

// usage of loops in array
for(let hero of heros){         // for in loop will give the keys or the index of this array
    console.log(hero.toUpperCase());
}
