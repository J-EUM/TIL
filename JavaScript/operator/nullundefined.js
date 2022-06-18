let name1;           // 변수를 선언하면 컴퓨터는 메모리의 빈 공간에 식별자를 할당하고 자동으로 undefined를 저장한다.
let name2 = null;    // 사용자가 명시적으로 '없음'을 표현하기 위해 대입한 값.

console.log(name1);	
// 결과: undefined
console.log(name2);	
// 결과: null

console.log(null == undefined);   
// 결과: true
console.log(null === undefined);
// 결과: false


console.log(name1 == null);   
// 결과: true
console.log(name2 === null);
// 결과: true