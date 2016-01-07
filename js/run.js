var MyModule = require("./modules/MyModule");
var person = new MyModule.Person("John", "Smith");
var host = new MyModule.Host("friend", person);
var hello = host.sayHello();
var goodbye = host.sayGoodbye();
console.log(hello);
console.log(goodbye);
//# sourceMappingURL=run.js.map