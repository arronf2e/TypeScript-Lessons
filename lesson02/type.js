// 布尔值
var isDone = true;
// 字符串
var name1 = 'arron';
var helloName = "Hello, " + name1;
// 数组
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// 元组
var x = ['arron', 23];
var y = [23, 'arron', true];
var Fruit;
(function (Fruit) {
    Fruit["apple"] = "apple";
    Fruit["banana"] = "banana";
    Fruit["li"] = "li";
})(Fruit || (Fruit = {}));
var c = Fruit.banana;
console.log(c);
var some = 'hello world';
some = 23;
some = true;
function test() {
    console.log('hello world');
}
// 声明一个 void 的变量基本没用，因为它只能被赋值为 undefined 和 null
var a = undefined;
var b = null;
function test1() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
