// EXAMPLE 1 - How to Zip two Arrays in JavaScript

const arr1 = [1, 2, 3];

const arr2 = ['bobby', 'hadz', 'com'];

const result = arr1.map((element, index) => {
  return [element, arr2[index]];
});

// 👇️ [ [ 1, 'bobby' ], [ 2, 'hadz' ], [ 3, 'com' ] ]
console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable zip() function

// function zip(arr1, arr2) {
//   return arr1.map((element, index) => {
//     return [element, arr2[index]];
//   });
// }

// const array1 = [1, 2, 3];
// const array2 = ['bobby', 'hadz', 'com'];

// const result = zip(array1, array2);

// // 👇️ [ [ 1, 'bobby' ], [ 2, 'hadz' ], [ 3, 'com' ] ]
// console.log(result);

// ------------------------------------------------------------------

// EXAMPLE 3 - Zip two arrays of different lengths

// function zip(arr1, arr2) {
//   return arr1.map((element, index) => {
//     return [element, arr2[index]];
//   });
// }

// const array1 = [1, 2, 3, 4];
// const array2 = ['bobby', 'hadz', 'com'];

// const result = zip(array1, array2);

// // 👇️ [ [ 1, 'bobby' ], [ 2, 'hadz' ],
// //      [ 3, 'com' ], [ 4, undefined ] ]
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Zip multiple arrays in JavaScript

// function zip(...arrays) {
//   return Array(Math.max(...arrays.map(arr => arr.length)))
//     .fill()
//     .map((_, index) => arrays.map(arr => arr[index]));
// }

// const array1 = [1, 2, 3];
// const array2 = ['bobby', 'hadz', 'com'];
// const array3 = ['a', 'b', 'c'];

// const result = zip(array1, array2, array3);

// // [ [ 1, 'bobby', 'a' ],
// //   [ 2, 'hadz', 'b' ],
// //   [ 3, 'com', 'c' ] ]
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Zip two arrays in JavaScript using the `reduce()` method

// function zip(arr1, arr2) {
//   return arr1.reduce((accumulator, curr, index) => {
//     return [...accumulator, [curr, arr2[index]]];
//   }, []);
// }

// const array1 = [1, 2, 3];
// const array2 = ['bobby', 'hadz', 'com'];

// const result = zip(array1, array2);

// // 👇️ [ [ 1, 'bobby' ], [ 2, 'hadz' ], [ 3, 'com' ] ]
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Zip two arrays in JavaScript using the `forEach()` method

// function zip(arr1, arr2) {
//   const zipped = [];

//   arr1.forEach((element, index) => {
//     zipped.push([element, arr2[index]]);
//   });

//   return zipped;
// }

// const array1 = [1, 2, 3];
// const array2 = ['bobby', 'hadz', 'com'];

// const result = zip(array1, array2);

// // 👇️ [ [ 1, 'bobby' ], [ 2, 'hadz' ], [ 3, 'com' ] ]
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 7 - Zip two arrays in JavaScript using a `for` loop

// function zip(arr1, arr2) {
//   const zipped = [];

//   for (let index = 0; index < arr1.length; index++) {
//     zipped.push([arr1[index], arr2[index]]);
//   }

//   return zipped;
// }

// const array1 = [1, 2, 3];
// const array2 = ['bobby', 'hadz', 'com'];

// const result = zip(array1, array2);

// // 👇️ [ [ 1, 'bobby' ], [ 2, 'hadz' ], [ 3, 'com' ] ]
// console.log(result);
