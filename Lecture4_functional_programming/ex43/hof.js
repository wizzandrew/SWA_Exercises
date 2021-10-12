const names = persons => persons.map(person => person.name);

const adults = persons => persons.filter(person => person.age >= 18);

const oldest_person_age = persons => Math.max(...persons.map(p => p.age));
const oldest_person = persons => persons.filter(p => p.age === oldest_person_age(persons));

const seniors = persons => persons.filter(person => person.age >= 60);
const total_salaries_of_seniors = persons => seniors(persons).reduce((s, p) => s + p.salary, 0);


const persons = [
    { name: 'Andrei', age: 22, salary: 0 },
    { name: 'Luis', age: 17, salary: 0 },
    { name: 'Carlos', age: 62, salary: 3500 }
];

//console.log(names(persons));
//console.log(adults(persons));
//console.log(oldest_person(persons));
console.log(total_salaries_of_seniors(persons));