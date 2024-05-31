function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  for (let i = 0; i < apples.length; i++) {
    apples[i] += a;
    if (apples[i] >= s && apples[i] <= t) appleCount++;
  }

  for (let j = 0; j < oranges.length; j++) {
    oranges[j] += b;
    if (oranges[j] >= s && oranges[j] <= t) orangeCount++;
  }

  console.log(appleCount);
  console.log(orangeCount);
}

let apples = [2, 3, -4];
let oranges = [3, -2, -4];

countApplesAndOranges(7, 10, 4, 12, apples, oranges);
