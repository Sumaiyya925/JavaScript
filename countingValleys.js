let p = ["D", "D", "U", "U", "U", "U", "D", "D"];

console.log(countingValleys(8, p));
function countingValleys(steps, path) {
  let mainCount = 0;
  let count = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "D") count--;
    if (path[i] === "U") count++;
    if (count === 0 && path[i] === "U") mainCount++;
  }
  return mainCount;
}
