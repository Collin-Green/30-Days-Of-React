//1. 
function userIdGeneratedByUser(){
    const chars = prompt('Enter number of character');
    const ids = prompt("Enter number of Id's");
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let res = Array(ids).fill('');
    for (let i = 0; i < ids; i++){
        let count = 0;
        while (count < chars){
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            count++;
        }
        return result;
    }
}

//2.
// Skip

//3.
function shuffleArray(arr){
    const mid = Math.floor(arr.length/2);
    const arr1 = arr.slice(0, mid);
    const arr2 = arr.slice(mid);
    const merge = (a, b) => {
        let aptr = 0;
        let bptr = 0;
        let res = [];
        while (aptr < a.length && bptr < b.length){
            res.push(a[aptr]);
            aptr++;
            res.push(b[bptr]);
            bptr++;
        }
        while (aptr < a.length){
            res.push(a[aptr]);
            aptr++;
        }
        while (bptr < b.length){
            res.push(b[bptr]);
            bptr++;
        }
        return res;
    }    
    return merge(arr1, arr2)
}

//Test 3.
const a1 = [1, 2, 3, 4, 5];
const a2 = [6, 7, 8, 9, 10, 11];
console.log(shuffleArray(a1));
console.log(shuffleArray(a2));

//4.
function factorial(n){
    let sol = 1;
    while (n > 1){
        sol *= n;
        n--;
    }
    return sol;
}

//Test 4.
console.log(factorial(5));
console.log(factorial(50));

//5.
// ???

//6.
function average(arr){
    let sum = 0;
    for (let a of arr){
        if (typeof a !== 'number') return 'Array given is not exclusively numbers';
        sum += a;
    }
    return sum / arr.length;
}

//Test 6.
console.log(average([1, 2, 3, 4, 5]));
console.log(average([1, 2, 3, '4', 5]));

