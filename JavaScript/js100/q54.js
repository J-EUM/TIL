const arr = prompt('숫자입력').split(' ').map(function(n){
    return parseInt(n, 10);
  });
  let cnt = 0;
  
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i+1] === arr[i] + 1){ //조건식을 !==로 했으면 아닐때 바로 no를 출력하도록 해서 count연산이나 아래 또다른 조건식을 돌릴 필요가 없었음.
      cnt += 1;
    }
  }
  if(cnt === arr.length - 1){
    console.log('yes');
  }else{
    console.log('no');
  }


  /* 답안
  function sol(l){
  l.sort((a,b) => {
    return a-b;
  });

  for (let i=0; i<l.length-1; i++){
    if(l[i]+1 !== l[i+1]){
      return 'NO';
    }
  }
  return 'YES';
}

const n = prompt('입력해주세요').split(' ').map(n => parseInt(n, 10));

console.log(sol(n));


함수를 이용해서 return값으로 no/yes가 출력되게 했다.
조건을 같지 않을때로 둬서 내 코드에 들어간 count에 1씩 더하는 연산이랑 count값에 따른 if문이 없도록 했다.

*/