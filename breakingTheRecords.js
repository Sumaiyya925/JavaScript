let a = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
console.log(breakingRecords(a));
function breakingRecords(scores) {
  let minElement = scores[0];
  let maxElement = scores[0];
  let minCount = 0;
  let maxCount = 0;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < minElement) {
      minElement = scores[i];
      minCount++;
    }
    if (scores[i] > maxElement) {
      maxElement = scores[i];
      maxCount++;
    }
  }
  return [maxCount, minCount];
}
