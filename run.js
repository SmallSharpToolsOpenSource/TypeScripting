var Sayings;
(function (Sayings) {
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
    Sayings.Person = Person;
    var Greeter = (function () {
        function Greeter(message, person) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting + ", " + person.fullName() + "!";
        };
        return Greeter;
    })();
    Sayings.Greeter = Greeter;
})(Sayings || (Sayings = {}));
var person = new Sayings.Person("John", "Smith");
var greeter = new Sayings.Greeter("person", person);
console.log(greeter.greet());

//# sourceMappingURL=run.js.map
