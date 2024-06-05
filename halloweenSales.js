console.log(howManyGames(20, 3, 6, 85));

function howManyGames(p, d, m, s) {
  let count = 0;
  for (let i = p; i >= m; i -= d) {
    if (s - i < 0) return count;

    s -= i;
    count++;
  }

  while (s >= 0) {
    s -= m;
    if (s < 0) break;
    count++;
  }
  return count;
}
