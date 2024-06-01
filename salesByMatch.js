ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(ar.length, ar));
function sockMerchant(n, ar) {
  let obj = {};
  for (let element of ar) {
    obj[element] = (obj[element] || 0) + 1;
  }

  let count = 0;
  for (let key in obj) {
    count += Math.floor(obj[key] / 2);
  }
  return count;
}
