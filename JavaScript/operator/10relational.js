// 관계연산자

/* in 연산자는 지정한 속성이 지정한 객체에 존재할 경우 true를 반환합니다. 구문은 다음과 같습니다.
*/
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees;        // true 반환
3 in trees;        // true 반환
6 in trees;        // false 반환
"bay" in trees;    // false 반환 (인덱스에 위치한 값이 아니라
                   // 인덱스 자체를 지정해야 함)
"length" in trees; // true 반환 (length는 Array의 속성임)

// 내장 객체
"PI" in Math;          // true 반환
console.log(Math.PI);
// Math는 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체입니다. 함수 객체가 아닙니다.


// 사용자 정의 객체
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar;  // true 반환
"model" in mycar; // true 반환
1998 in mycar; // false

/* instanceof */
// instanceof 연산자는 지정한 객체가 지정한 객체 타입에 속하면 true를 반환합니다.
var theDay = new Date(1995, 12, 17);
theDay instanceof Date; // true