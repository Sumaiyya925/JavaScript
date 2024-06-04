a = [1, 2, 3, 4];
// k = 1;
// let count = 0;
// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (Math.abs(i - j) === k) {
//       count++;
//     }
//   }
// }
// console.log(count);
console.log(pairs(1, a));
function pairs(k, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (Math.abs(arr[i] - arr[j]) === k) count++;
  return count;
}
