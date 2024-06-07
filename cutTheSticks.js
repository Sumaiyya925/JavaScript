arr = [8, 8, 14, 10, 3, 5, 14, 12];
console.log(cutTheSticks(arr));
function cutTheSticks(arr) {
  let a = [];
  let j = 0;

  while (arr.length !== 0) {
    if (j === 0) {
      a.push(arr.length);
    }
    let min = Math.min(...arr);
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === min) {
        arr.splice(i, 1);
      }
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] - min;
    }
    a.push(arr.length);
    j++;
  }

  a.pop(0);
  return a;
}
