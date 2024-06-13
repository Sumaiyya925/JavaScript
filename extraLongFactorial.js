let n = 25;
let answer = BigInt(1);

for (let i = BigInt(1); i <= BigInt(n); i++) {
  answer = answer * i;
}

let result = answer.toString().replace("n", "");
console.log(result);
