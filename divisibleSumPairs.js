let a = [1, 2, 3, 4, 5, 6];
console.log(divisibleSumPairs(6, 5, a));

function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = ar[i] + ar[j];
      if (sum % k === 0) count++;
    }
  }
  return count;
}
