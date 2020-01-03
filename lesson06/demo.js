function identity(args) {
    console.log(args.length);
    return args[0];
}
console.log(identity(['abc']));
console.log(identity([1, 2]));
function test(arg) {
    console.log(arg.length);
    return arg;
}
function identity2(arg) {
    return arg;
}
var myIdentity = identity2;
var GenNumber = /** @class */ (function () {
    function GenNumber() {
    }
    return GenNumber;
}());
var myGenNumber = new GenNumber();
myGenNumber.zeroValue = 0;
myGenNumber.add = function (x, y) {
    return x + y;
};
