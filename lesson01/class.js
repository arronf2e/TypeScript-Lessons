var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(stud) {
    return "Hello, " + stud.firstName + " " + stud.middleInitial + " " + stud.lastName;
}
var std = new Student('Arron', 'Mr.', 'Zhang');
console.log(greeter(std));
