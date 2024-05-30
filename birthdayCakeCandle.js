function birthdayCakeCandles(candles) {
  let maxNumber = Math.max(...candles);
  let count = 0;

  for (let i = 0; i < candles.length; i++)
    if (maxNumber === candles[i]) count++;

  return count;
}

let numbers = [3, 2, 1, 3, 3, 3, 3];
console.log(birthdayCakeCandles(numbers));
