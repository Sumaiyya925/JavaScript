function staircase(n) {
  for (let i = 1; i <= n; i++) {
    //row
    let str = "";

    for (let j = n - 1; j >= i; j--) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) {
      str += "#";
    }

    console.log(str);
  }
}

staircase(5);
