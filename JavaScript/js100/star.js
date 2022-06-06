
let n = 10; //n 줄 출력하는 코드
let i = 0;

console.log("삼각형");
for( i ; i < n; i++ ){
    console.log("*".repeat(i+1));
}

console.log("\n오른쪽축 삼각형");
for( i = 0; i < n; i++ ){
    console.log(" ".repeat(n-i-1) + "*".repeat(i+1));
}

console.log("\n거꾸로삼각형");
for( i = n; i > 0 ; i-- ){
    console.log("*".repeat(i));
}

console.log("\n오른축 거꾸로삼각형");
for( i = n; i > 0 ; i-- ){
    console.log(" ".repeat(n-i) + "*".repeat(i));
}

console.log("\n트리");
for( i = 0; i < n ; i++ ){
    console.log( " ".repeat( n - i - 1 ) + "*".repeat( i * 2 + 1 ));
}

console.log("\n거꾸로트리");
for( i = 0; i < n ; i++ ){
    console.log( " ".repeat( i ) + "*".repeat( 2 * n - 2 * i ));
}



// 다이아몬드
console.log("\n다이아몬드");

/*
if( n % 2 == 0 ){      // n이 짝수일때
    for( i = 0 ; i < n / 2 ; i++ ){    
        console.log( " ".repeat( n / 2 - i) + "*".repeat( i * 2 + 1 ) );
    }
    for( i-- ; i >= 0 ; i-- ){
        console.log( " ".repeat( n / 2 - i) + "*".repeat( i * 2 + 1 ) );
    }
}
else {                 // n이 홀수일때
    for( i = 0 ; i < n / 2 ; i++ ){    
        console.log( " ".repeat( n / 2 - i) + "*".repeat( i * 2 + 1 ) );
    }
    for( i -= 2 ; i >= 0 ; i-- ){
        console.log( " ".repeat( n / 2 - i) + "*".repeat( i * 2 + 1 ) );
    }
}
*/

for( i = 0 ; i < n / 2 ; i++ ){    
    console.log( " ".repeat( n / 2 - i) + "*".repeat( i * 2 + 1 ) );
}
if( n % 2 == 0 ){       // n이 짝수일때
    for( i-- ; i >= 0 ; i-- ){
        console.log( " ".repeat( n / 2 - i) + "*".repeat( i * 2 + 1 ) );
    }
 }
 else{                  // n이 홀수일때
    for( i -= 2 ; i >= 0 ; i-- ){
        console.log( " ".repeat( n / 2 - i) + "*".repeat( i * 2 + 1 ) );
    }
 }





/*

5줄:
1 3 5 3 1   *
0 1 2 1 0   i
2 1 0 1 2
    i=2 3번째줄까지 출력후 줄어듦
    5/2 : 2.5
7줄:
1 3 5 7 5 3 1
0 1 2 3 4 5 6
      i=3(4)번째줄까지 하고
      7/2 : 3.5

6줄:
1 3 5 5 3 1  *
0 1 2 2 1 0  i
2 1 0 0 1 2 " "
    i=2 3번째줄, i=3 4번째쭐까지 후 줄어듦
6/2 :3

8줄
0 1 2 3   i
3 2 1 0  " "
*/