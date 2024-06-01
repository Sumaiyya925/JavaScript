let a = [2, 6];
let b = [24, 36];

console.log(getTotalX(a, b));

function getTotalX(a, b) {
  let min = Math.min(...a);
  let max = Math.max(...b);
  let count = 0;

  for (let i = min; i <= max; i++) {
    let result1 = a.every((n) => i % n === 0);
    let result2 = b.every((n) => n % i === 0);

    if (result1 && result2) count++;
  }
  return count;
}

//result === true can be written as result1 it means that this is truthy value and if written as !result1
//then it is falsey values
