function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
}
Person.prototype.getAge = function() {
    console.log("I am " + this.age + " years old");
}

const John = new Person("John", 30);
John.greet(); // Hello, my name is John
console.log(John instanceof Person); // true
console.log(John instanceof Object); // true
console.log(John.__proto__); // true
console.log(John.__proto__ === Person.prototype); // true
console.log(John.__proto__.__proto__); // true
console.log(Person.prototype); // true
console.log(Person.prototype.constructor); // true);

