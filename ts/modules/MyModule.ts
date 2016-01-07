
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

export class Host {
    title: string;
    person: Person;
    constructor(title: string, person: Person) {
        this.title = title;
        this.person = person;
    }
    sayHello() {
        return "Hello, " + this.title + ", " + this.person.fullName() + "!";
    }
    sayGoodbye() {
        return "Goodbye, " + this.title + ", " + this.person.fullName() + "!";
    }
}
