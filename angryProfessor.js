let numbers = [-1, -2, 0, 1, 2];
console.log(angryProfessor(2, numbers));

function angryProfessor(k, a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) count++;
  }

  if (k <= count) return "NO";
  return "YES";
}
