// 비트연산자

let a = 1;  // 00000001
let b = 5;  // 00000101
console.log(a & b);     // 00000001
console.log(a | b);     // 00000101
console.log(a << b);    // 00100000
console.log(a >> b);

let c = -5;              // 00111111111111111111111111111110
console.log(c >> 2);     // 11111111111111111111111111111110
console.log(c >>> 2); // 