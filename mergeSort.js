"use strict"

function merge (leftArr, rightArr) {

  console.log(leftArr, rightArr);

  let output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    let leftEl = leftArr[leftIndex];
    let rightEl = rightArr[rightIndex];


    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }

  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

function mergeSort(arr) {

  if (arr.length <= 1) {
    return arr;
  }

  let middleIndex = Math.floor(arr.length/2);
  let leftArr = arr.slice(0, middleIndex);
  let rightArr = arr.slice(middleIndex);

  return merge (
    mergeSort(leftArr),
    mergeSort(rightArr)
  );
}

let a = [1,3,6,5,8,90,39,20,1,1];
console.log(a);
a = mergeSort(a);
console.log(a);