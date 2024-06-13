let contests = [
  [5, 1],
  [1, 1],
  [4, 0],
  //   [2, 1],
  //   [1, 1],
  //   [8, 1],
  //   [10, 0],
  //   [5, 0],
];

console.log(luckBalance(2, contests));
function luckBalance(k, contests) {
  let unImp = 0;
  let toLose = [];

  let impScore = 0;
  let toWin = 0;

  for (let i = 0; i < contests.length; i++) {
    if (contests[i].length === 2) {
      if (contests[i][1] === 0) {
        unImp += contests[i][0];
      } else if (contests[i][1] === 1) {
        toLose.push(contests[i][0]);
      }
    }
  }

  toLose.sort((a, b) => b - a);

  let array1 = toLose.splice(0, k);
  impScore = array1.reduce((a, b) => a + b, 0);
  if (toLose.length !== 0) {
    toWin = toLose.reduce((a, b) => a + b, 0);
  }
  return unImp + impScore - toWin;
}
