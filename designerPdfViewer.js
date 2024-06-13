let a = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];
let w = "abc";
console.log(designerPdfViewer(a, w));
function designerPdfViewer(h, word) {
  word.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let index = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (word[i] === alphabet[j]) {
        index.push(j);
      }
    }
  }
  let height = [];
  for (let j = 0; j < index.length; j++) {
    height.push(h[index[j]]);
  }

  let maxHeight = Math.max(...height);

  return maxHeight * word.length;
}
