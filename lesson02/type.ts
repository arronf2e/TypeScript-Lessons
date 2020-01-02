// 布尔值
let isDone: boolean = true

// 字符串
​let name1:string = 'arron'
let helloName:string = `Hello, ${name1}`


// 数组
let list:number[] = [1,2,3]
let list2:Array<number> = [1,2,3]


// 元组
let x: [string, number] = ['arron', 23]
let y: [number, string, boolean] = [23, 'arron', true]


enum Fruit {
    apple='apple', 
    banana='banana',
    li='li'
}

let c:Fruit = Fruit.banana

console.log(c)

let some: any = 'hello world'
some = 23
some = true​

function test(): void {
    console.log('hello world')
  }
// 声明一个 void 的变量基本没用，因为它只能被赋值为 undefined 和 null
let a: void = undefined
let b: void​ = null

function test1():never {
    while(true){}
}
​
function error(message: string): never {
    throw new Error(message)
}