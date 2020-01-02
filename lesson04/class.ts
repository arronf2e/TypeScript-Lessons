class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message
    }
    greet(): string {
        return `Hello, ${this.greeting}`
    }
}

let gt = new Greeter('world')

console.log(gt.greet())


class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    move(meters: number = 0) {
        console.log(`${this.name} moved ${meters}m.`)
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    bark() {
        console.log(`Woof Woof !`)
    }
}

let dd = new Dog('dd')

dd.move(10)


// class Animal2 {
//     private name: string;
//     public constructor(name: string) {
//         this.name = name
//     }
//     public move(meters: number = 0) {
//         console.log(`${this.name} moved ${meters}m.`)
//     }
// }

// let dd2 = new Animal2('jerry')

// console.log(dd2.name)


class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误



class RO {
    readonly name: string;
    constructor(name: string) {
        this.name = name
    }
}

let ro = new RO('jerry')

// ro.name = 'ccc'

let passcode = 'secret passcode'
class Employee2 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName
    }

    set fullName(newName: string) {
        if(passcode && passcode === 'secret passcode') {
            this._fullName = newName
        }else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let ep = new Employee2()

ep.fullName = 'Arron F2e'

if(ep.fullName) {
    console.log(ep.fullName)
}


class Gird {
    static origin = {
        x: 0,
        y: 0
    }
}

console.log(Gird.origin)


abstract class Animal45 {
    abstract makeSound(): void;
}

let al = new Animal45()
