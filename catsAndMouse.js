console.log(catAndMouse(2, 6, 4));

function catAndMouse(x, y, z) {
  let cat1 = Math.abs(x - z);
  let cat2 = Math.abs(y - z);

  if (cat1 > cat2) return "Cat B";
  if (cat1 < cat2) return "Cat A";
  return "Mouse C";
}
