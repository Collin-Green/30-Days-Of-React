function getPersonInfo(per){
    // Regular:
    console.log("Regular method");
    for (let detail in per){
        console.log(detail);
    }

    // Destructuring:
    console.log("Destructuring method");
    const {firstName: fN, lastName: lN, age: age, country: coun, job: job, skills: skills, languages: langs} = per;
    console.log(fN, lN, age, coun, job, skills, langs);
}

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

getPersonInfo(person);