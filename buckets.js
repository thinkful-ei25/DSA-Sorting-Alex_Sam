'use strict';
/*

function bucketSort(arr, min, max){
  let buckets = [b1,b2,b3,b4];
  for i=0 to arr.length-1
    insert arr[i] into bucket
}

*/

function bSort(arr, min, max){
  let map = new Map();
  let output=[];
  for(let i=min; i<=max;i++){
    map.set(i, []);
  }
  for(let i=0; i<arr.length; i++){
    let temp = map.get(arr[i]);
    map.set(arr[i], [...temp, arr[i]]);
  }
  for(let i=min; i<=max; i++){
    output = [...output, ...map.get(i)];
  }
  console.log(output);
}

bSort([10,4,3,6,7,8,2,1,5,5,9,9],1,10);