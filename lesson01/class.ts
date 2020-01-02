class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`
    }
}

interface Stud {
    firstName: string;
    lastName: string;
    middleInitial: string;
}

function greeter(stud: Stud) {
    return `Hello, ${stud.firstName} ${stud.middleInitial} ${stud.lastName}`
}

let std = new Student('Arron', 'Mr.', 'Zhang')

console.log(greeter(std))