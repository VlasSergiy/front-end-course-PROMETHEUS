const person = {
    firstName: "Svitlana",
    lastName: "Sikora",
    hobbies: ["codding", "reading"]
};

let {firstName, lastName: surname, hobbies: personHobbies} = person;

console.log(firstName); /* => "Svitlana" */
console.log(surname); /* => "Sikora" */
console.log(personHobbies); /* => ["codding", "reading"] */
      