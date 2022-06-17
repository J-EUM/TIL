// 총 문자열의 길이는 50으로 제한하고 
// 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 
// 나머지 빈 부분에는 '='을 채워 넣어주세요.

// 입력
// hi

// 출력
// ========================hi========================

const s = prompt('입력: 50자 제한').split('');  // 입력받아서 배열에 한글자씩 넣음
let arr = new Array(50).fill('=')   // 길이 50짜리 배열을 만들고 모든 값을'='로 초기화

if(s.length > 50){ // 입력 문자열이 50자 넘으면 잘라준다
  s.splice(50);
}
let start = 24 - Math.floor(s.length / 2); // 채워넣을 시작인덱스 지정

for(let i = 0; i < s.length; i++){
    arr.splice(start + i, 1, s[i]); // 시작인덱스부터 한글자씩 교체한다
}
console.log(arr.join(''));

/* 답안 */
// const str = prompt('문자열을 입력해주세요.');

// const n = 25 + parseInt((str.length/2), 10);

// //왼쪽부터 채우기
// const a = str.padStart(n, '='); 

// //오른쪽까지 채워서 출력
// console.log(a.padEnd(50, '='));

// //padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
// //padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움