let keyboard = [4];
let drive = [5];
console.log(getMoneySpent(keyboard, drive, 5));

function getMoneySpent(keyboards, drives, b) {
  let arr = [];
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let totalMoney = keyboards[i] + drives[j];
      arr.push(totalMoney);
    }
  }

  let maxPrice = -1;
  for (let p = 1; p < arr.length; p++) {
    if (arr[p] <= b && arr[p] > maxPrice) {
      maxPrice = arr[p];
    }
  }
  if (maxPrice <= b) return maxPrice;
  return -1;
}
