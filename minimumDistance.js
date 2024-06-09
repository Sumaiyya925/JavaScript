let a = [1, 2, 3, 4, 10];
console.log(minimumDistances(a));
function minimumDistances(a) {
  if (a.length === 1) {
    return -1;
  }
  let minDistance = [];
  let found = false;
  let result;
  for (let i = 0; i < a.length; i++) {
    let arr = [];
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        found = true;
        arr.push(i, j);
        let diff = arr.reduce((a, b) => a - b);
        minDistance.push(Math.abs(diff));
      }
    }
    result = Math.min(...minDistance);
  }
  if (!found) return -1;
  else {
    return result;
  }
}

// function minimumDistances(a) {
//     if (a.length === 1) {
//       return -1;
//     }
//     let minDistance = Infinity;
//     let found = false;
//     for (let i = 0; i < a.length; i++) {
//       for (let j = i + 1; j < a.length; j++) {
//         if (a[i] === a[j]) {
//           found = true;
//           let distance = Math.abs(i - j);
//           if (distance < minDistance) {
//             minDistance = distance;
//           }
//         }
//       }
//     }
//     if (!found) return -1;
//     return minDistance;
//   }

//   let a = [1, 2, 3, 4, 10];
//   console.log(minimumDistances(a)); // Output: -1
