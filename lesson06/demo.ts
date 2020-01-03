function identity<T>(args: Array<T>): T {
    console.log(args.length)
    return args[0]
}

console.log(identity<string>(['abc']))
console.log(identity<number>([1, 2]))


interface LengthNeed {
    length: number;
}

function test<T extends LengthNeed>(arg: T): T {
    console.log(arg.length)
    return arg;
}

interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity2


class GenNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenNumber = new GenNumber<number>();
myGenNumber.zeroValue = 0
myGenNumber.add = function(x, y) {
    return x + y
}