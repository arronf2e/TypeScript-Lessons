// function printLabel(labelledObj: {label: string}) {
//     console.log(labelledObj.label)
// }

// let myObj = {
//     size: 10,
//     label: 'Size 10 Object'
// }

// printLabel(myObj)

// 使用 interface 重写以上代码 

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}
let myObj = {
    size: 10,
    label: 'Size 10 Object'
}

printLabel(myObj)


interface Person {
    readonly firstName: string,
    lastName?: string,
    sayHi: () => string
}

let arron: Person = {
    firstName: 'arron',
    // lastName: 'zhang',
    sayHi: ():string => {
        return `hi, Here`
    }
}

console.log("arron 对象 ") 
console.log(arron.firstName) 
console.log(arron.lastName) 
console.log(arron.sayHi()) 



interface nameList {
    [index: number]: string​
}
let nlist: nameList = ['arron', 'err', 'jack'​]



interface ageList {
    [index: string]: number​
}
​
let alist: ageList

alist['arron'] = 15

console.log(alist)


interface Cat {
    name: string,
    age: number
}

interface Tiger extends Cat {
    weight: number
}

interface Animal extends Cat, Tiger {
    height: number
}

let tg: Animal = {
    name: 'TG',
    age: 3,
    weight: 20,
    height: 10
}


class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let p3d: Point3d = {
    x: 1,
    y: 2,
    z: 3
}