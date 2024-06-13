// let l = 10;
// let r = 15;

console.log(maximizingXor(65, 898));
function maximizingXor(l, r) {
  let max = 0;
  for (let i = l; i <= r; i++) {
    for (let j = i; j <= r; j++) {
      let xor = i ^ j;
      if (xor > max) {
        max = xor;
      }
    }
  }
  return max;
}
