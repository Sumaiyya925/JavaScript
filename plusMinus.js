function plusMinus(arr) {
  let posCount = 0;
  let negCount = 0;
  let zeroCount = 0;
  let posRatio = 0;
  let negRatio = 0;
  let zeroRatio = 0;

  for(let key of arr){
    if(key > 0) posCount++;
    
    if(key < 0) negCount++;
    //!key means falsey value and zero is falsey 
    if( !key ) zeroCount++;
    
    
  }

  posRatio = posCount / arr.length;
  negRatio = negCount / arr.length;
  zeroRatio = zeroCount / arr.length;

  console.log(posRatio.toFixed(6));
  console.log(negRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));

}

let numbers = [-4,3,-9,0,4,1];

plusMinus(numbers);