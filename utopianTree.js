console.log(utopianTree(5));
function utopianTree(n) {
  let h = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      h = h * 2;
    } else {
      h = h + 1;
    }
  }
  return h;
}
