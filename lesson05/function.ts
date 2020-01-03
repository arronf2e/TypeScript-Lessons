function add(x: number, y: number): number {
    return x + y
}

let sum = add(3, 5)

console.log(sum)


function add2(x: number, y?: number): number {
    console.log(y, '1')
    return x + y
}
let sum2 = add2(3) 

console.log(sum2)​


function add3(x: number, y: number = 2​): number {
    return x + y
}
let sum3 = add3(3)
​console.log(sum3)​


function buildName(firstName: string, ...restOfName: string[]): void {
    console.log(restOfName)
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName)