//1.
function solveQuadratic(a = 0, b = 0, c = 0){
    const discriminant = (b**2) - (4 * a * c);
    if (discriminant < 0){
        return [];
    }
    if (discriminant === 0){
        return (-b/(2*a));
    }
    const root1 = (-b + Math.sqrt(discriminant))/(2*a);
    const root2 = (-b - Math.sqrt(discriminant))/(2*a);
    return [root1, root2];
}

//Testing 1.
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

//2. 
function printArray(arr){
    console.log(arr.join(', '));
}

//Testing 2.
arr = [-1, 0, 1, 2, 3, 4, 5, 6];
printArray(arr);

//3.
function showDateTime(){
    const date = new Date();
    console.log(`${date.getMonth()}/${date.getDay()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
}

//Testing 3.
showDateTime();

//4.
function swapValues(x, y){
    return [y, x];
}

//Testing 4.
console.log(swapValues(3, 4))// x => 4, y=>3
console.log(swapValues(4, 5)) // x = 5, y = 4

//5.
function reverseArray(arr){
    const r_arr = new Array(arr.length);
    for (let i = arr.length-1; i >= 0; i--){
        r_arr[arr.length - 1 - i] = arr[i];
    }
    return r_arr;
}

//Testing 5.
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

//6.
function capitalizeArray(arr){
    for (let i = 0; i < arr.length; i++){
        let temp = arr[i].toLowerCase();
        arr[i] = temp.charAt(0).toUpperCase() + temp.slice(1);
    }
    return arr;
}

//Testing 6.
const a = ['hello', 'WoRLD'];
console.log(capitalizeArray(a));

//7.
function addItem(item, arr){
    arr.push(item);
    return arr;
}

//8.
function removeItem(item, arr){
    const loc = arr.indexOf(item);
    if (loc !== -1){
        arr.splice(loc, 1);
    }
    return arr;
}
//Testing 7 and 8

arr = [1, 2, 3, 4, 5];
console.log(arr);
addItem(6, arr);
console.log(arr);
removeItem(3, arr);
console.log(arr);

//9.
function evensAndOdds(val){
    let odds = Math.ceil(val/2);
    let evens = Math.ceil(val/2);
    if (val%2 == 0) evens++;
    console.log(`The number of odds are ${odds}.`);
    console.log(`The number of evens are ${evens}.`);
}

//Testing 9.
evensAndOdds(2);
evensAndOdds(100);
evensAndOdds(99);

//13.
const dynaSum = (...arr) => {
    let sum = 0;
    for (let val of arr){
        sum += parseInt(val);
    }
    return sum;
}

//Testing 13.
console.log(dynaSum(1, 2, 3));
console.log(dynaSum(1, 2, 3, 4));

//1. again?
function userIdGenerator(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    let count = 0;
    while (count < 7){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        count++;
    }
    return result;
}

console.log(userIdGenerator());
console.log(userIdGenerator());
console.log(userIdGenerator());
console.log(userIdGenerator());
