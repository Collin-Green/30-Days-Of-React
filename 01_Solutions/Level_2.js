//1.
const countries = require('./countries');
const webTechs = require('./web_techs');
console.log(countries);
console.log(webTechs);

//2.
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.split(".").join(",").split(",").join(" ").split(" ").filter(String);
console.log(words);
console.log(words.length);

//3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
const alergic = true;
if (shoppingCart.indexOf('Honey') != -1 && alergic)
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
console.log(shoppingCart);
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');
console.log(shoppingCart);

//4.

if (countries.countries.indexOf('Ethiopia') == -1){
    countries.countries.push('Ethiopia');
}
else{
    console.log("ETHIOPIA");
}

//5.
const wt = webTechs.webTechs;
if (wt.indexOf('Sass') != -1){
    console.log("Sass is a CSS preprocess");
}
else{
    wt.push("Sass");
    console.log(wt);
}

//6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)