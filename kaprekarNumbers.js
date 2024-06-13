kaprekarNumbers(400, 700);
function kaprekarNumbers(p, q) {
  let kaprekar = [];
  for (let i = p; i <= q; i++) {
    let sqrt = i * i;
    let arr = sqrt.toString().split("");
    if (arr.length % 2 !== 0) {
      arr.unshift(0);
    }
    let midIndex = arr.length / 2;
    let subArray1 = arr.slice(0, midIndex);
    let subArray2 = arr.slice(midIndex, arr.length);
    let string1 = parseInt(subArray1.join(""));
    let string2 = parseInt(subArray2.join(""));
    if (string1 + string2 === i) {
      kaprekar.push(i);
    }
  }

  kaprekar.sort((a, b) => a - b);
  if (kaprekar.length === 0) {
    console.log("INVALID RANGE.");
  } else {
    console.log(kaprekar.join(" "));
  }
}
