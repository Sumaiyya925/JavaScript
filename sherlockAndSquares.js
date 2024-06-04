console.log(squares(24, 49));
function squares(a, b) {
  let count = 0;
  let start = Math.ceil(Math.sqrt(a));
  let end = Math.floor(Math.sqrt(b));
  for (i = start; i <= end; i++) {
    count++;
  }
  return count;
}
