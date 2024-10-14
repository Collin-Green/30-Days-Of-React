//1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
const min = ages[0];
console.log(min);
const max = ages[ages.length - 1];
console.log(max);
const middle = Math.floor(ages.length/2) - 1;
const median = (ages.length % 2 == 0) ? (ages[middle] + ages[middle + 1])/2 : ages[middle];
console.log(median)
const avg = ages.reduce((a, b) => a + b, 0)/ages.length;
console.log(avg);
const range = max - min;
console.log(range);
const upper = Math.abs(max - avg);
const lower = Math.abs(min - avg);
console.log(upper);
console.log(lower);

//2.

const countries = require("./countries").countries;
const first_ten = countries.slice(0, 10);
console.log(first_ten);
function middleArray(arr){
    const m = Math.floor(arr.length/2)-1;
    if (arr.length % 2 == 0){
        return arr.slice(m,m+2);
    }
    return arr.slice(m,m+1);
}
console.log(middleArray(countries));
console.log(middleArray(first_ten));

//3.

function divideArray(arr){
    const m = Math.floor(arr.length/2) - 1;
    if (arr.length % 2 == 0){
        return [arr.slice(0, m+1), arr.slice(m+1, arr.length)];
    }
    return [arr.slice(0, m+2), arr.slice(m+2, arr.length)];
}
console.log(divideArray(countries));
console.log(divideArray(first_ten));