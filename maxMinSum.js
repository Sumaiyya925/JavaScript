function miniMaxSum(arr) {
  let sum = 0;
  let min = Infinity;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let splicedValue = arr.splice(i, 1)[0];
    sum = arr.reduce((a, b) => a + b);
    arr.splice(i, 0, splicedValue);
    if (max < sum) max = sum;
    if (min > sum) min = sum;
  }

  console.log(min, max);
}

let numbers = [1, 2, 3, 4, 5];
miniMaxSum(numbers);
