// // 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

// // > 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는

// // 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

// // 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

// // 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

// function mergeSort(arr){
//     if (arr.length <= 1){
//       return arr;
//     }
//    // 1. arr길이가 0,1이 아니면(정렬이 안돼있으면) 반으로 가른다
//     const mid = Math.floor(arr.length / 2); // 2. 7일때 3
//     const left = arr.slice(0,mid); // 3. arr 0-2
//     const right = arr.slice(mid); // 4. arr 3-6
  
//     return merge(mergeSort(left), mergeSort(right));
//     // 5. 왼쪽만 두번돌아가면 merge([10], mergesort([13, 40]))
//     //            ->merge([10], merge([13], [40]))
//     // 14. merge([10], [13, 40])
//     // 19. [10, 13, 40]
//     // 20, merge([10, 13, 40], merge(merge(merge([9], [80]), (merge([45], [30])))
//     // 21. merge([10, 13, 40], merge([9, 80], [45, 30]))
//   }
  
//   function merge(left, right){
//      // 6. merge([13], [40])부터 하면
//      // 15. left = [10], right = [13, 40]
//      // 22. left = [9, 80], right = [45, 30]
//     let result = [];
  
//     while (/*빈칸을 채워주세요*/ && /*빈칸을 채워주세요*/){
//       if (/* 8 */ left[0] < right[0]){
//         result.push(left.shift()); 
//         // 7. left의 첫요소를 result에 넣는다 왜? 그게 남은것중에 제일 작은거니까, right의 첫번째보다 작으니까 그럼 둘이 비교하고 작은거 넣는거
//         // 9. result = [13]
//         // 16. result = [10]
//         // 23. result = [9]
//         //     left = [80], right = [45, 30]
//       } else {
//         result.push(right.shift());
//       }
//     }
//     while (left.length) {
//       /*빈칸을 채워주세요*/
//       // left 요소가 다 없어질때까지 반복 뭐를..?
//       // 10. left.length는 이제 없음
//     }
//     while (right.length) {
//       /*빈칸을 채워주세요*/
//       // 11. right는 [40]인데 뭘해야될까 -> result에 넣어서 반환해서 다시 남은거랑 merge
//       /* 12 */
//       result.push(right.shift());
//       // 17. [13, 40]인데 이건 아까 merge([13], [40])를 통해 정렬한거니까 일단 차례로 넣는걸로 진행
//     }
  
//     return result; 
//     // 13. return [13, 40]
//     // 18. return [10, 13, 40]
//   }
  
//   const array = '10 13 40 9 80 45 30'.split(' ').map(n => parseInt(n, 10));
  
//   console.log(mergeSort(array)); 