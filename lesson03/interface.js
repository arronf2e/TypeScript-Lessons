// function printLabel(labelledObj: {label: string}) {
//     console.log(labelledObj.label)
// }
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = {
    size: 10,
    label: 'Size 10 Object'
};
printLabel(myObj);
var arron = {
    firstName: 'arron',
    // lastName: 'zhang',
    sayHi: function () {
        return "hi, Here";
    }
};
console.log("arron 对象 ");
console.log(arron.firstName);
console.log(arron.lastName);
console.log(arron.sayHi());
var nlist = ['arron', 'err', 'jack'];
var alist;
alist['arron'] = 15;
console.log(alist);
var tg = {
    name: 'TG',
    age: 3,
    weight: 20,
    height: 10
};
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var p3d = {
    x: 1,
    y: 2,
    z: 3
};
