module Sayings {
    export class Person {
        firstName: string;
        lastName: string;
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        fullName() {
            return this.firstName + " " + this.lastName;
        }
    }
    
    export class Greeter {
        greeting: string;
        constructor(message: string, person: Person) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting + ", " + person.fullName() + "!";
        }
    }
}

var person = new Sayings.Person("John", "Smith");
var greeter = new Sayings.Greeter("person", person);
console.log(greeter.greet());
