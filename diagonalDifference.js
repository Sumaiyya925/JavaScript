function diagonalDifference(arr) {

    let diagonal1 = 0;
    let diagonal2 = 0;
    let diagonaldiff = 0;
     for(let i=0; i<arr.length; i++)
        for(let j=0; j<arr.length; j++){
            if( i===j )
           diagonal1 += arr[i][j];

            if( i+j === arr.length-1)
                diagonal2 += arr[i][j];
        }
     

     diagonaldiff = Math.abs(diagonal1 - diagonal2);
     return diagonaldiff;


}

let matrix = [[1,2,3,2],
              [4,5,6,3],
              [9,8,9,1],
              [5,2,1,3]];

console.log(diagonalDifference(matrix));