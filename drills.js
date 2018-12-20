'use strict';

let countQ = 0;

function qSort(arr, start=0, end=arr.length){
  countQ++;
  if(start >=end){
    return arr;
  }
  const middle = partition(arr, start, end);
  arr = qSort(arr, start, middle);
  arr = qSort(arr, middle+1, end);
  return arr;
}

function partition(arr, start, end){
  const pivot = arr[end-1];
  let j = start;
  for(let i=start; i<end-1; i++){
    if(arr[i]<=pivot){
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end-1, j);
  return j;
}

function swap(arr, i, j){
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let countM = 0;

function mSort(arr){
  countM++;
  if(arr.length <= 1){
    return arr;
  }
  const mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  left = mSort(left);
  right = mSort(right);
  return merge(left, right, arr);
}

function merge(l, r, arr){
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while(leftIndex < l.length && rightIndex<r.length){
    countM++;
    if(l[leftIndex]<r[rightIndex]){
      arr[outputIndex++] = l[leftIndex++];
    } else {
      arr[outputIndex++] = r[rightIndex++];
    }
  }
  for(let i=leftIndex; i<l.length; i++){
    arr[outputIndex++] = l[i];
  }
  for(let i=rightIndex; i<r.length; i++){
    arr[outputIndex++] = r[i];
  }
  return arr;
}

function main(){
  const str = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
  let arr = str.split(' ');
  arr = arr.map(item=>parseInt(item,10));
  //console.log(arr.length);
  //console.log(arr);

  const answer = qSort(arr);
  //const answer = mSort(arr);
  
  console.log(answer);
  //console.log(countM);
  console.log(countQ);

}

main();