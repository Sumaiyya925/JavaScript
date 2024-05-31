function kangaroo(x1, v1, x2, v2) {
  let pos1 = 0;
  let pos2 = 0;
  for (let i = 1; i <= 10000; i++) {
    pos1 = x1 + i * v1;
    pos2 = x2 + i * v2;

    if (pos1 === pos2) return "YES";
  }
  return "NO";
}

console.log(kangaroo(2, 1, 1, 2));
