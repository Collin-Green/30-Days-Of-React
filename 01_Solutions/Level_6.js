
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

//1.
products.forEach((prod) => {
    console.log(prod);
})

//2.
products.forEach((prod) => {
    console.log(`The price of ${prod.product} is ${typeof prod.price === 'number' ? prod.price : 'unknown'}`);
})

//3.
let sum = 0;
products.forEach((prod) => {
    sum += typeof prod.price === 'number' ? prod.price : 0;
})
console.log(sum);

//4.
const prices = products.map((prod) => {
    return typeof prod.price === 'number' ? prod.price : 'unknown';
})
console.log(prices);

//5.
const valid_products = products.filter((prod) => {
    return typeof prod.price === "number";
})
console.log(valid_products);

//6.
const valid_sum = products
.map(prod => prod.price)
.filter(price => typeof price === "number")
.reduce((acc, cur) => acc + cur);

console.log(valid_sum);

//7.
const red_sum = products.reduce((acc, cur) => {
    return acc + (typeof cur.price === 'number' ? cur.price : 0);
}, 0)

console.log(red_sum);

//8.
const {product: firstEmpty,} = products.find((prod) => {
    return typeof prod.price !== 'number';
})

console.log(firstEmpty);

//9.
const firstEmptyIdx = products.findIndex((prod) => {
    return typeof prod.price !== 'number';
})

console.log(firstEmptyIdx);

//10.
const someEmpty = products.some((prod) => {
    return typeof prod.price !== 'number';
})

console.log(`Some empty?: ${someEmpty}`);

//11.
const noneEmpty = products.every((prod) => {
    return typeof prod.price !== 'number';
})

console.log(`None empty?: ${noneEmpty}`);

//12.
// forEach iterates every element of an array and gives index as well
// map iterates every element and changes it to the returned value
// reduct iterates every element and accumulates a single returned value

//13.
// filter iterates every element of an array and removes those that don't return true
// find iterates every element of an array until it returns true and then returns that value
// findIndex does the same as find but returns the index instead of the valeu

//14.
// Some iterates over every element of an array and returns true if at least one array element return true
// Every itereates over every elemtn of an array and returns true if all elements of the array return true
