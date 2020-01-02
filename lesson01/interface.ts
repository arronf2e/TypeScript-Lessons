interface Person {
    firstName: string;
    lastName: string;
}

function sayHello(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`
}

let user = {
    firstName: 'arron',
    lastName: 'zhang'
}

const result:string = sayHello(user)

console.log(result)