a = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyinteger(a));
function lonelyinteger(a) {
  let obj = {};

  for (let element of a) {
    obj[element] = (obj[element] || 0) + 1;
  }

  for (let key in obj) {
    if (obj[key] === 1) return key;
  }
}
