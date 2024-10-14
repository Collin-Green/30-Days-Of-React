//1.

function fullName (firstName, lastName){
    return `${firstName} ${lastName}`;
}

//2.

function addNumbers(a, b){
    return a + b;
}

//3.
function _areaOfCircle(radius){
    return Math.PI * (radius ** 2);
}

//4.
function convertCelciusToFahrenheit(c){
    return (c * 9/5) + 32;
}


//5.
function bmiCalc(weight, height){
    const myBmi = weight/(height ** 2);
    if (myBmi >= 30){
        return {bmi: myBmi, weightClass: 'Obese'};
    }
    if (myBmi >= 25){
        return {bmi: myBmi, weightClass: 'Overweight'};
    }
    if (myBmi >= 18.5){
        return {bmi: myBmi, weightClass: 'Normal weight'};
    }
    return {bmi: myBmi, weightClass: 'Under seight'};
}

//6.
//Already done before sometime I don't remember

//Tests

console.log(fullName('Collin', 'Green'));
console.log(addNumbers(3, 6));
console.log(_areaOfCircle(Math.sqrt(2)));
console.log(convertCelciusToFahrenheit(37));
console.log(bmiCalc(80, 1.8));