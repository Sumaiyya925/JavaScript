let numbers = [3, 4, 5];
let q = [1, 2];
console.log(circularArrayRotation(numbers, 2, q));

function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop());
  }
  let result = [];
  for (let q = 0; q < queries.length; q++) {
    result.push(a[queries[q]]);
  }
  return result;
}
