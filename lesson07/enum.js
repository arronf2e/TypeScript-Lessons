var Rank;
(function (Rank) {
    Rank[Rank["first"] = 0] = "first";
    Rank[Rank["second"] = 1] = "second";
    Rank[Rank["third"] = 2] = "third";
    Rank[Rank["fourth"] = 3] = "fourth";
})(Rank || (Rank = {}));
console.log(Rank.first);
var Rank2;
(function (Rank2) {
    Rank2[Rank2["first"] = 1] = "first";
    Rank2[Rank2["second"] = 2] = "second";
    Rank2[Rank2["third"] = 3] = "third";
    Rank2[Rank2["fourth"] = 4] = "fourth";
})(Rank2 || (Rank2 = {}));
console.log(Rank2.first); // 0，数字枚举默认从0开始，后续依次+1递增
console.log(Rank2.second); // 1
console.log(Rank2.third); // 2
console.log(Rank2.fourth); // 4
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Up);
