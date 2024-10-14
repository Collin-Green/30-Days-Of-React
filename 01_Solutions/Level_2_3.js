//UI loop
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const monthMap = {
    'january': 31,
    'february': [28, 29],
    'march': 31,
    'april': 30,
    'may': 31,
    'june': 30,
    'july': 31,
    'august': 31,
    'september': 30,
    'october': 31,
    'november': 30,
    'december': 31
}

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

rl.question("Enter a month: ", 
    (month) => {
        const lc_month = month.toLowerCase();
        if (lc_month == 'february'){
            console.log(capitalize(lc_month) + " has " + monthMap[lc_month][0] + " days normally and " + monthMap[lc_month][1] + " during a leap year.");
        }
        else console.log(capitalize(lc_month) + " has " + monthMap[lc_month] + " days.");
        rl.close();
    }
)