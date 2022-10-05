"use strict"

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        let t = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = t;
      } 
    }
  }
  return arr;
}

let a = [3,6,5,8,90,39,20];
console.log(a);
a = bubbleSort(a);
console.log(a);