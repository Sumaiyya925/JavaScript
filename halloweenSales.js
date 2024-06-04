function howManyGames(p, d, m, s) {
  let i = 0;
  let a = [];
  // if (p < d) {
  //   return Math.round((s - p) / m) + 1;
  // } else if (p === m) {
  //   return Math.floor(s / m);
  // }
  while (p - d > m) {
    if (i === 0) {
      p = p - 0;
    } else {
      p = p - d;
    }
    a.push(p);
    i++;
  }
  return a;
  let sum = a.reduce((a, b) => a + b);

  while (sum + m <= s) {
    a.push(m);
    sum += m;
  }
  return a.length;
}

console.log(howManyGames(20, 3, 6, 80));
