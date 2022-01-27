/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const { result } = require("lodash");

// const mergeSort = (nums) => {
//   // base case, return if length 1 or 0
//   if (nums.length < 2) {
//     return nums;
//   }
//   // break into two smaller arrays
//   const length = nums.length;
//   const middle = Math.floor(length / 2);
//   const left = nums.slice(0, middle);
//   const right = nums.slice(middle);

//   // call mergeSort on left and right
//   const sortedLeft = mergeSort(left);
//   const sortedRight = mergeSort(right);
//   console.log({ sortedLeft, sortedRight });
//   // return the merge of left and right
//   return merge(sortedLeft, sortedRight);
// };

// const merge = (left, right) => {
//   const results = [];

//   // here if length is 0 then is false
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       results.push(left.shift());
//     } else {
//       results.push(right.shift());
//     }
//   }

//   // return one sorted array, one of them will be an empty array
//   return results.concat(left, right);
// };

// ALTERNATIVE 2
const mergeSort = (nums) => {
  // base case, return if length 1 or 0
  if (nums.length < 2) {
    return nums;
  }
  // break into two smaller arrays
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // call mergeSort on left and right
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  const results = [];

  // here if length is 0 then is false
  while (sortedLeft.length && sortedRight.length) {
    if (sortedLeft[0] <= sortedRight[0]) {
      results.push(sortedLeft.shift());
    } else {
      results.push(sortedRight.shift());
    }
  }
  // return the merge of left and right
  return results.concat(sortedLeft, sortedRight);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
