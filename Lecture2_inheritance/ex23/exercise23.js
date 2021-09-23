//creating Person function
function Person(name, age) {
    if(age === undefined) {
        this.name = name;
        this.age = 0;
    }
    else {
        this.name = name;
        this.age = age;
    }
}

//assigning methods to Person prototype
Person.prototype.getName = function() {return this.name;}
Person.prototype.setName = function(name) {this.name = name;}
Person.prototype.getAge = function() {return this.age;}
Person.prototype.setAge = function(age) {this.age = age;}
Person.prototype.toString = function() {return `Name:${this.name} Age:${this.age}`;}
Person.prototype.equals = function(person) {
    if(!Person.prototype.isPrototypeOf(person)) return false;
    return person.name === this.name && person.age === this.age;
}

//creating Employee function
function Employee(name, age, salary) {
    Person.call(this, name, age);
    this.salary = salary;
}

//making Person prototype of Employee
Object.setPrototypeOf(Employee.prototype, Person.prototype);

//assigning methods to Employee prototype
Employee.prototype.getSalary = function() {return this.salary;}
Employee.prototype.setSalary = function(salary) {this.salary = salary;}
Employee.prototype.toString = function() {return `Name:${this.name} Age:${this.age} Salary:${this.salary}`;}
Employee.prototype.equals = function(employee) {
    if(!Employee.prototype.isPrototypeOf(employee)) return false;
    return employee.name === this.name && employee.age === this.age && employee.salary === this.salary;
}


//testing
// console.log('-------------------------person--------------------');
// let pers = new Person('Andrei', 22);
// let pers2 = new Person('Andy', 23);
// console.log(pers.getAge());
// console.log(pers.getName());
// pers.setAge(23);
// pers.setName('Andy');
// console.log(pers.toString());
// console.log(pers.equals(pers2));

// //overloaded constructor
// let pers3 = new Person('Mario');
// console.log(pers3.toString());
// console.log('-------------------------person--------------------');

// console.log('-------------------------employee--------------------');
// let empl = new Employee('Andrei', 22, 25000);
// let empl2 = new Employee('Andy', 23, 35000);
// console.log(empl.getSalary());
// empl.setName('Andy');
// empl.setAge(23);
// empl.setSalary(35000);
// console.log(empl.toString());
// console.log(empl.equals(empl2));

// //overloaded constructor
// let empl3 = new Employee('Mario', undefined, 16000);
// console.log(empl3.toString());
// console.log('-------------------------employee--------------------');



