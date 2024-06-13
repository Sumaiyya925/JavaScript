console.log(flippingBits(2147483647));
function flippingBits(n) {
  let arr = n.toString(2).padStart(32, 0).split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "0") {
      parseInt(arr[i]);
      arr[i] = 1;
    } else {
      arr[i] = 0;
    }
  }
  let result = arr.join("");
  return parseInt(result, 2);
}
