let n = 11;
let n2 = 12;
let binary = n.toString(2);
let binary1 = n2.toString(2);
console.log(binary, binary1);

let array1 = binary.toString().split("");
let array2 = binary1.toString().split("");

console.log(array1, array2);
for (let i = 0; i < array1.length; i++) {
  let ans;
  if (array1[i] === array2[i]) {
    ans = 0;
  } else {
    ans = 1;
  }
  console.log(ans);
}
