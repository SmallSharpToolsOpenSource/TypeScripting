var MyModule;
(function (MyModule) {
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
    MyModule.Person = Person;
    var Greeter = (function () {
        function Greeter(message, person) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting + ", " + person.fullName() + "!";
        };
        return Greeter;
    })();
    MyModule.Greeter = Greeter;
})(MyModule || (MyModule = {}));
var person = new MyModule.Person("John", "Smith");
var greeter = new MyModule.Greeter("friend", person);
console.log(greeter.greet());

//# sourceMappingURL=run.js.map
