let arr = [1, 3, 5, 7, 9];

console.log(gamingArray(arr));
function gamingArray(arr) {
  let count = 0;
  let maxElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
      count++;
    }
  }
  if (count % 2 !== 0) {
    return "BOB";
  } else {
    return "ANDY";
  }
}

// let count = 0;
// while (arr.length > 0) {
//   let maxIndex = arr.indexOf(Math.max(...arr));
//   arr.splice(maxIndex, arr.length);
//   count++;
// }

// if (count % 2 !== 0) {
//   return "BOB";
// } else {
//   return "ANDY";
// }
