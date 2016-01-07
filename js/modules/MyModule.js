var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
})();
exports.Person = Person;
var Host = (function () {
    function Host(title, person) {
        this.title = title;
        this.person = person;
    }
    Host.prototype.sayHello = function () {
        return "Hello, " + this.title + ", " + this.person.fullName() + "!";
    };
    Host.prototype.sayGoodbye = function () {
        return "Goodbye, " + this.title + ", " + this.person.fullName() + "!";
    };
    return Host;
})();
exports.Host = Host;
//# sourceMappingURL=MyModule.js.map