function diagonalDifference(arr) {
  let diagonal1 = 0;
  let diagonal2 = 0;
  // let diagonaldiff = 0;
  //  for(let i=0; i<arr.length; i++)
  //     for(let j=0; j<arr.length; j++){
  //         if( i===j )
  //        diagonal1 += arr[i][j];

  //         if( i+j === arr.length-1)
  //             diagonal2 += arr[i][j];
  //     }

  //  diagonaldiff = Math.abs(diagonal1 - diagonal2);
  //  return diagonaldiff;

  //using one loop

  for (let i = 0; i < arr.length; i++) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[i][arr.length - 1 - i];
  }

  return Math.abs(diagonal1 - diagonal2);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(matrix));
