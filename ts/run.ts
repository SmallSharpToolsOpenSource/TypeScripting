
import MyModule = require("./modules/MyModule");

let person = new MyModule.Person("John", "Smith");
let host = new MyModule.Host("friend", person);

let hello = host.sayHello();
let goodbye = host.sayGoodbye();

console.log(hello);
console.log(goodbye);
