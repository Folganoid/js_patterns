"use strict"

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {

    let pivot = arr[0];
    let less = arr.filter(v => v < pivot);
    let more = arr.filter(v => v > pivot);

    return [...quickSort(less), pivot, ...quickSort(more)];
  }
}

let a = [1,3,6,5,8,90,39,20,1,1];
console.log(a);
a = quickSort(a);
console.log(a);