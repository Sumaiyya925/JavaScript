// let number = 21;
// let str = number.toString();
// let splitTheNumber = str.split("");
// console.log(splitTheNumber);
// let newStr = splitTheNumber.reverse();
// console.log(newStr);

//EFFICIENT WAY
//where 10 denotes the base decimal or radix
// let number = 120;
// let reversedNumber = parseInt(
//   number.toString().split("").reverse().join(""),
//   10
// );
// console.log(Math.abs(number - reversedNumber));

// n = 0;
// console.log(Number.isInteger(n));

console.log(beautifulDays(20, 23, 6));
// beautifulDays(20, 23, 6);
function beautifulDays(i, j, k) {
  let count = 0;
  for (let start = i; start <= j; start++) {
    let number = start;
    let reversedNumber = parseInt(
      number.toString().split("").reverse().join(""),
      10
    );
    let difference = Math.abs(number - reversedNumber);
    if (Number.isInteger(difference / k) === true) count++;
  }
  return count;
}
