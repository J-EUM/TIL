/* 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

**숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.**

예를 들어, **123456789**를 입력받았으면 **123,456,789**를 출력해야 합니다. */

function withComma(n){
    let nComma = [];    // 숫자를 옮겨오면서 콤마를 추가해서 넣을 배열
    let cnt = 0;

    while(n.length > 0){ // 원래 배열이 다 비워질때까지 반복
        if(cnt % 3 === 0 && cnt !== 0){ // 숫자가 3의 배수로 들어가있는데 새로운 숫자를 앞에 넣을때는 컴마를 추가한다. 아무것도 없을때는 제외
            nComma.unshift(',');
        }
        nComma.unshift(n.pop()); // 원래 배열의 맨 뒤 요소를 빼서 새로운 배열 앞에 채운다.
        cnt++;  // 옮긴 숫자 개수를 센다
    }
    return nComma.join(''); // 배열에 있는 숫자와 컴마를 하나의 문자열로 바꿔서 리턴한다.
}

const n = prompt('금액입력').split('');
console.log(withComma(n));

/* 답안 */
// 내장함수 사용
// const n = prompt('숫자를 입력해주세요.');
// parseInt(n, 10);

// console.log(n.toLocaleString());

// // 재귀함수 사용
// function comma(s) {
//   if (s.length <= 3) {
//     return s;
//   } else {
//     return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
//   }
// }

// const n = prompt('숫자를 입력해주세요.');
// console.log(comma(n));
