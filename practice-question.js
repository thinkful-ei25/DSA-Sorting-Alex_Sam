/*

Write an algorithm to sort an array containing only 1s and 0s
Your algorithm should only iteratire thru the array once
you can't use any extra memory to store the data


input = [0,1,0,1,1,0]
output = [0,0,0,1,1,1]

*/
'use strict';
function sortBinary(arr){
  let j = -1;
  //has to be set to -1 incase everything is 0 and
  //is not bigger than i at any point
  for(let i=0; i<arr.length; i++){
    if(arr[i]<1){
      //increment j, so you're going to the next
      //spot to switch with
      //j is the 0 count+1
      j++;
      // let temp = arr[j];
      // arr[j]=arr[i];
      // arr[i]=temp;
      //always sends the 0 to i-j
      swap(arr, i, j);
    }
  }
  return arr;
}

function sortBinary2(arr){
  let start = 0;
  let end = arr.length-1;
  while(start<end){
    if(arr[start]>arr[end]){
      swap(arr, start, end);
      start++;
      end--;
    } else if (arr[start]<arr[end]){
      start++;
      end--;
    } else if(arr[start]===0 && arr[end]===0){
      start++;
    } else {
      end--;
    }
  }
  return arr;
}

function swap(arr, start, end){
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}

let arr = [0,1,0,1,1,0];
const answer = sortBinary(arr);
console.log(answer);
