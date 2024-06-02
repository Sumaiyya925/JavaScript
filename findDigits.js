console.log(findDigits(1012));

function findDigits(n) {
  let digits = n.toString().split("");
  let count = 0;
  for (let i = 0; i < digits.length; i++) {
    if (n % digits[i] === 0) count++;
  }
  return count;
}
