//1.
class Animal{
    constructor(name = "Fido", age = 7, color = 'Golden', legs = 4){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    get getName(){
        return this.name;
    }
    get getAge(){
        return this.age;
    }
    get getColor(){
        return this.color;
    }
    get getLegs(){
        return this.legs
    }
    set setName(name){
        this.name = name;
    }
    set setAge(age){
        this.age = age;
    }
    set setColor(color){
        this.color = color;
    }
    set setLegs(legs){
        this.legs = legs;
    }
    speak(){
        console.log("EEE");
    }
}

//Testing 1.
const dog1 = new Animal();
const dog2 = new Animal('Fido2', 2, 'Brown', 3);
console.log(dog1.getName);
console.log(dog2.getName);

//2. and Level 2

class Dog extends Animal{
    constructor(name = "Fido", age = 7, color = 'Golden', legs = 4){
        super(name, age, color, legs);
    }
    speak(){
        console.log("Bark!");
    }
}
class Cat extends Animal{
    constructor(name = "Amy", age = 10, color = 'Calico', legs = 4){
        super(name, age, color, legs);
    }
    speak(){
        console.log("Meow!");
    }
}

//Testing 2. and Level 2
//And Polymorphism

const animals = [new Animal(), new Dog(), new Cat()];
for (let animal of animals){
    animal.speak();
}