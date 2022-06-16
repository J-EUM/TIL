/* 데이터
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

출력
England 22023 */

function getSimilar(obj){
    let countries = Object.keys(obj);
    let width = Object.values(obj); // [면적, 면적, ...]
    let difference = []; // 면적차이를 저장하는 배열
    let min; // 최소면적차이를 저장하는 변수
    let widthDifference = {}; // 나라이름: korea면적과 면적차 가 담긴 객체

    for(let i = 0; i < width.length; i++){
        difference[i] = Math.abs(width[i] - obj['korea']);
    } // 배열에 면적차를 담는다
    
    for(let i = 0; i < countries.length; i++){
        widthDifference[countries[i]] = difference[i];
    } //나라이름: 면적차 가 담긴 객체를 만든다

    // 자기자신제외한 최소차이값을 구한다.
    //difference.indexOf(0); // 0값을 갖고있는 인덱스 구하는법
    difference.splice(difference.indexOf(0), 1); // 배열에서 0값 제거 
    min = Math.min.apply(null, difference); // 0 제외한 배열에서 최소값 구하기

    function getKeyByValue(object, value) { // 객체에서 value값을 가지고 있는 key 찾는 함수
        return Object.keys(object).find(key => object[key] === value);
    }

    return getKeyByValue(widthDifference, min) + ' ' + min;
}

const nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
}
console.log(getSimilar(nationWidth));

/* 답안
const nationWidth = {
	'korea': 220877,
	'Rusia': 17098242,
	'China': 9596961,
	'France': 543965,
	'Japan': 377915,
	'England' : 242900,
};

const w = nationWidth['korea']; // korea의 값을 저장하고
delete nationWidth['korea']; // 객체에서 값을 삭제한다.
const entry = Object.entries(nationWidth);
// [
//     [ 'Rusia', 17098242 ],
//     [ 'China', 9596961 ],
//     [ 'France', 543965 ],
//     [ 'Japan', 377915 ],
//     [ 'England', 242900 ]
//   ]
const values = Object.values(nationWidth);
// [ 17098242, 9596961, 543965, 377915, 242900 ]

//gap에 최댓값 저장
let gap = Math.max.apply(null, values); // 17098242
let item = [];

for (let i in entry){
  if (gap > Math.abs(entry[i][1] - w)){  // korea랑 면적 차이가 원래 gap값보다 작으면
    gap = Math.abs(entry[i][1] - w);     // gap = 면적차 해서 면적 차이가 제일 적은 값이 gap에 들어가게됨
    item = entry[i];                     // 그 제일 작은 값이 있는 인덱스의 값을 item에 넣음 item = [ 'England', 242900 ]
  }
}
console.log(item[0], item[1] - w); 
*/