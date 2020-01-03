enum Rank {
  first,
  second,
  third,
  fourth
}
console.log(Rank.first);

enum Rank2 {
  first = 1,
  second,
  third,
  fourth
}
console.log(Rank2.first); // 0，数字枚举默认从0开始，后续依次+1递增
console.log(Rank2.second); // 1
console.log(Rank2.third); // 2
console.log(Rank2.fourth); // 4


enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

console.log(Direction.Up)