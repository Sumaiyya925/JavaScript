let width = [2, 3, 1, 2, 3, 2, 3, 3];
let cases = [
  [0, 3],
  [4, 6],
  [6, 7],
  [3, 5],
  [0, 7],
];

console.log(serviceLane(8, 5, width, cases));

function serviceLane(n, t, width, cases) {
  let minVal = [];
  for (let i = 0; i < t; i++) {
    cases[i][1]++;
    let newArr = width.slice(cases[i][0], cases[i][1]);
    let min = Math.min(...newArr);
    minVal.push(min);
  }
  return minVal;
}
