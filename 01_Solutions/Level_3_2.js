const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

//1.
const maxs = {
    max: users.Alex.skills.length,
    max_name: "Alex"
}

for (const name in users){
    const skill_count = users[name].skills.length;
    if (users[name].skills.length > maxs.max){
        maxs.max = skill_count;
        maxs.max_name = name;
    }
}
console.log(maxs);



//2.
let logged_in = 0;
let fifty_plus_count = 0;

for (const name in users){
    if (users[name].isLoggedIn) logged_in++;
    if (users[name].points >= 50) fifty_plus_count++;
}
console.log("Logged in: " + logged_in + "\n50 >= count: " + fifty_plus_count);

//3.
function isMern(user){
    const mStack = ["MongoDB", "Express", "React", "Node"];
    for (const tech of mStack){
        if (user.skills.indexOf(tech) == -1) return false;
    }
    return true;
}

for (const user in users){
    console.log(isMern(users[user]));
}

//4.
users.Collin = {
    email: 'collin@collin.com',
    skills: ['Nothing'],
    age: 26,
    isLoggedIn: false,
    points: 50000
}

//5.
console.log(Object.keys(users));
//6.
console.log(Object.values(users));
//7.
console.log(Object.entries(users));