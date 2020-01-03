function add(x, y) {
    return x + y;
}
var sum = add(3, 5);
console.log(sum);
function add2(x, y) {
    console.log(y, '1');
    return x + y;
}
var sum2 = add2(3);
console.log(sum2);
function add3(x, y) {
    if (y === void 0) { y = 2; }
    return x + y;
}
var sum3 = add3(3);
console.log(sum3);
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(restOfName);
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
