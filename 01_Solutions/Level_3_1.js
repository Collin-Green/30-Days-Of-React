//1.
const dog = {};

//2.
console.log(dog);

//3.
dog.name = "Fido";
dog.legs = 4;
dog.color = "Brindol";
dog.age = 10;
dog.bark = () => console.log("Bark Bark");

//4.
for (const key in dog){
    if (typeof dog[key] === "function") dog[key]();
    else console.log(dog[key]);
}

//5.
dog.breed = "Labrador";
dog.getDogInfo = () => console.log(this);