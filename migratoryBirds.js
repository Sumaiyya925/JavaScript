let arr = [1, 4, 4, 4, 5, 5, 5, 2, 2, 2, 3];
console.log(migratoryBirds(arr));

function migratoryBirds(arr) {
  let obj = {};

  for (let element of arr) {
    obj[element] = (obj[element] || 0) + 1;
  }

  let maxOccurence = 0;
  let minType;

  for (let key in obj) {
    if (obj[key] > maxOccurence) {
      maxOccurence = obj[key];
      minType = key;
    }
  }
  return minType;
}
