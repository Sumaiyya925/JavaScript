let str = "We promptly judged antique ivory buckles for the prize";

console.log(pangrams(str));
function pangrams(t) {
  if (typeof t !== "string") {
    return "error";
  }
  let str = t.toLowerCase();
  let arr = str.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let filterArray = arr.filter((value, index) => arr.indexOf(value) === index);
  filterArray.splice(filterArray.indexOf(" "), 1);

  if (filterArray.length === alphabet.length) {
    return "pangram";
  } else {
    return "not pangram";
  }
}
