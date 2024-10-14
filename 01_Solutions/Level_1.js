//1.
const arr = [];

//2.
const arr2 = Array(5).fill(0);

//3.
const len2 = arr2.length;

//4.
const front2 = arr2[0];
const middle2 = arr2[Math.floor(len2/2) - 1];
const end2 = arr2[len2 - 1];

//5.
const mixedDataTypes = [
    0,
    234,
    2.453,
    "Hello JS",
    [1, 2, 3, 4, 5],
    {memes: "Dank", rizz: "Gyat"}
];

//6.
let itCompanies = ["Facebook", 
    "Google", 
    "Microsoft", 
    "Apple", 
    "IBM", 
    "Oracle",
    "Amazon"
];

//7.
console.log(itCompanies);

//8.
console.log(itCompanies.length);

//9.
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length/2) - 1]);
console.log(itCompanies[itCompanies.length - 1]);

//10.
console.log(itCompanies);

//11.
const upperCaseCompanies = itCompanies.join(",")
upperCaseCompanies.toUpperCase().split(",");
console.log(upperCaseCompanies);

//12.
const endComps = itCompanies.splice(itCompanies.length - 2, 2);
console.log(itCompanies.join(", ") + " " + endComps.join(" and ") + " are big IT companies.");
itCompanies = itCompanies.concat(endComps);


//13.
function findComp(comp){
    const index = itCompanies.indexOf(comp);
    if(index == -1){
        return "Company not found";
    }
    return comp;
}
console.log(findComp("Facebook"));
console.log(findComp("Meta"));

//14.
let removedOs = itCompanies;
removedOs = removedOs.slice(-4, removedOs.length);
console.log(removedOs);

//15.
console.log(itCompanies.sort());

//16.
console.log(itCompanies.reverse());

//17.
console.log(itCompanies.slice(3));

//18.
console.log(itCompanies.slice(-3));

//19.
console.log(itCompanies.slice(Math.floor(itCompanies.length/2),Math.ceil(itCompanies.length/2)));

//20.
console.log(itCompanies.shift());

//21.
console.log(itCompanies.splice(Math.floor(itCompanies.length/2)-1, 1));

//22.
console.log(itCompanies.pop());

//23.
console.log(itCompanies.splice(0,itCompanies.length));
console.log(itCompanies);