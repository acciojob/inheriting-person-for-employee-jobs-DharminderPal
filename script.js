// Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Create a new instance of the Person class
let access = new Person("Dharminder", 38);  // Corrected the arguments for age and name.
access.greet();

// Employee class extending Person
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Calls the constructor of Person class
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Create an instance of Employee class
let some = new Employee("Dharminder", 25, "Software Developer");
some.jobGreet();
