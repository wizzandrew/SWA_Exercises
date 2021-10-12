function names(persons) {
    let ns = []
    for(let i = 0; i < persons.length; i++) {
      ns.push(persons[i].name)
    }
    return ns
  }

  function adults(persons) {
    let as = []
    for(let i = 0; i < persons.length; i++) {
      if (persons[i].age >= 18) {
        as.push(persons[i])
      }
    }
    return as
  }

  function oldest_person(persons) {
    let oldest = null
    for(let i = 0; i < persons.length; i++) {
      if (!oldest || persons[i].age > oldest.age) {
        oldest = persons[i]
      }
    }
    return oldest
  }

  function total_salaries_of_seniors(persons) {
    let total = 0
    for(let i = 0; i < persons.length; i++) {
      if (persons[i].age >= 60) {
        total += persons[i].salary
      }
    }
    return total
  }  


  const persons = [
      {name: 'Andrei', age: 22, salary: 0},
      {name: 'Luis', age: 17, salary: 0},
      {name: 'Carlos', age: 62, salary: 3500}
  ];

  console.log(names(persons));
  console.log(adults(persons));
  console.log(oldest_person(persons));
  console.log(total_salaries_of_seniors(persons));
  