function sayHello(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: 'arron',
    lastName: 'zhang'
};
var result = sayHello(user);
console.log(result);
