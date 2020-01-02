var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var gt = new Greeter('world');
console.log(gt.greet());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof Woof !");
    };
    return Dog;
}(Animal));
var dd = new Dog('dd');
dd.move(10);
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
var RO = /** @class */ (function () {
    function RO(name) {
        this.name = name;
    }
    return RO;
}());
var ro = new RO('jerry');
// ro.name = 'ccc'
var passcode = 'secret passcode';
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    Object.defineProperty(Employee2.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode === 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee2;
}());
var ep = new Employee2();
ep.fullName = 'Arron F2e';
if (ep.fullName) {
    console.log(ep.fullName);
}
var Gird = /** @class */ (function () {
    function Gird() {
    }
    Gird.origin = {
        x: 0,
        y: 0
    };
    return Gird;
}());
console.log(Gird.origin);
var Animal45 = /** @class */ (function () {
    function Animal45() {
    }
    return Animal45;
}());
var al = new Animal45();
