   // class person {

   //          constructor(name, age) {
   //              this.name = name;
   //              this.age = age;

   //          }

   //          greet() {
   //              console.log(`Hello,my name is ${this.name},I am ${this.age} years old.`);
   //          }

   //      }

   //      new person();
   //      let access = new person("dharmidner", "38");
   //      access.greet();


   //      // Create an Employee Class:
   //      class Employee {
   //          constructor(name, age, jobtitle) {
   //              this.name = name;
   //              this.age = age;
   //              this.jobtitle = jobtitle;
   //          }
   //          joggreet() {
   //              console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobtitle}.`);
   //          }
   //      }


   //      let some = new Employee("dharmidner", "25", "software developer");
   //      some.joggreet();
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

let access = new Person("Dharminder", 38);
access.greet();

let some = new Employee("Dharminder", 25, "Software Developer");
some.jobGreet();
