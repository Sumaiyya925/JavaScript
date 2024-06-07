h = [1, 6, 3, 5, 2];
console.log(hurdleRace(4, h));

function hurdleRace(k, height) {
  let maxHeight = Math.max(...height);
  if (k >= maxHeight) return 0;
  else {
    return Math.floor(maxHeight - k);
  }
}
