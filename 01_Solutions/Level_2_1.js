const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//1.
rl.question("Enter which section to start: ", 
    (qKey) => {
        switch (qKey){
        case "1":
            rl.question("Enter your age: ", 
                (age) => {
                    if (age < 18){
                        console.log("You are left with " + (18 - age) + " years left to drive");
                    }
                    else{
                        console.log("You are old enough to drive");
                    }
                    rl.close();
                }
            )
            break;
//2.
        case "2":
            rl.question("Enter your age: ", 
                (myAge) => {
                    rl.question("Enter my age:", 
                        (yourAge) => {
                            const diff = Math.abs(myAge - yourAge);
                            if (myAge > yourAge){
                                console.log("I am " + diff + " years older than you");
                            }
                            else if (myAge < yourAge){
                                console.log("You are " + diff + " years older than me");
                            }
                            else{
                                console.log("We are both " + myAge + " years old");
                            }
                            rl.close();
                        }
                    )
                }
            )
            break;
        case "4":
            rl.question("Enter a number to check if even: ", 
                (num) => {
                    if (num % 2 == 0){
                        console.log(num + " is an even number");
                    }
                    else{
                        console.log(num + " is an odd number.");
                    }
                    rl.close();
                }
            )
            break;
        default:
            console.log("Incorrect type entered");
            rl.close();
        }
    }
);

//3.
function ifElse(a, b){
    if (a > b){
        return "a is greater than b";
    }
    return "b is greater than a";
}
function ternary(a, b){
    return a > b 
    ? "a is greater than b" 
    : "b is greater than a"
}

console.log(ifElse(1, 2));
console.log(ifElse(2, 1));
console.log(ternary(1, 2));
console.log(ternary(2, 1));

//4.
