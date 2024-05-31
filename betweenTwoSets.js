// const numbers = [2, 6];
// findMultiples(numbers);

// function findMultiples(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 1; j <= 10; j++) {
//       console.log(numbers[i] * j);
//     }
//   }
// }

// function findFactors(number) {
//   let array = [];
//   for (let i = 0; i < number.length; i++) {
//     for (let j = 2; j <= 15; j++) {
//       if (numbers[i] % j === 0) {
//         array = j;
//       }
//     }
//     console.log(array);
//   }
// }

// const number = [2, 6];
// findMultiple(number);

// function findMultiple(n) {
//   let commonMultiple = [];
//   for (let i = 0; i < n.length; i++) {
//     let array = [];
//     for (let j = 1; j <= 10; j++) {
//       array.push(n[i] * j);
//     }
//     // if (i === 0) {
//     //   commonMultiple = array;
//     // }

//     commonMultiple = commonMultiple.filter((n) => array.includes(n));

//     console.log(commonMultiple);
//   }
// }

//   let array = [];
//   for (let i = 1; i <= 10; i++) {
//     array.push(n * i);
//   }
//   console.log(array);

let number = [2, 6];
console.log(findCount(number));
function findCount(array) {
  let common = 0;
  let commonArr = [];
  for (let i = 0; i < array.length; i++) {
    let arr = [];
    for (let j = 1; j <= 10; j++) {
      arr.push(array[i] * j);
    }

    for (let k = 0; k < arr.length; k++) {
      if (arr[k] % array[i] === 0) {
        common++;
      }
    }
  }
}
