//1
function grades(val){
    if (val > 89){
        return "A";
    }
    if (val > 79){
        return "B";
    }
    if (val > 69){
        return "C";
    }
    if (val > 59){
        return "D";
    }
    return "F";
}
//2
function seasons(season){
    if (season == "September" ||
        season == "October" ||
        season == "November")
    {
        return "Autumn";
    }
    if (season == "December" || 
        season == "January" ||
        season == "February"
    ){
        return "Winter";
    }
    if (season == "March" ||
        season == "April" ||
        season == "May"
    ){
        return "Spring";
    }
    else{
        return "Summer";
    }
}

//3.
function weekendCheck(day){
    const weekends = ["saturday", "sunday"];
    if (weekends.indexOf(day.toLowerCase()) == -1){
        return false;
    }
    return true;
}


//UI loop
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an exercise number to test: ", 
    (qKey) => {
        switch (qKey){
            case "1":
                rl.question("Enter a test score to grade: ", 
                    (grade) => {
                        console.log(grades(grade));
                        rl.close();
                    }
                )
                break;
            case "2":
                rl.question("Enter a month: ",
                    (month) => {
                        console.log(seasons(month));
                        rl.close();
                    }
                )
                break;
            case "3":
                rl.question("Enter a day of the week: ",
                    (day) => {
                        if (weekendCheck(day)){
                            console.log(day + " is a weekend.");
                        }
                        else{
                            console.log(day + " is a working day.");
                        }
                        rl.close();
                    }
                )
                break;
            default:
                console.log("Invalid input");
        }
    }
)