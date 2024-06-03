// let s = "07:05:45PM";
// s = s.replace("PM", "");
// let a = s.split(":");
// console.log(a);
// a[0] = Number(a[0]);
// a[0] += 12;
// let newArr = a.join(":");
// console.log(newArr);

// let s = "12:05:45AM";
// s = s.replace("AM", "");
// // let a = s.split(":");
// s = s.replace("12", "00");
// console.log(s);

//HOW TO FIND THE AM AND PM

// let str = "07:05:45PM";
// let a = str.split("");
// console.log(a);
// if (a.includes("A")) {
//   console.log("AM");
// } else {
//   console.log("PM");
// }
// console.log(a.join(""));

let str = "12:00:00AM";
console.log(timeConversion(str));
function timeConversion(s) {
  let a1 = s.split("");
  let checkAMOrPM = a1.includes("A") ? "AM" : "PM";
  let string = a1.join("");

  if (checkAMOrPM === "AM") {
    string = string.replace("AM", "");
    let a2 = string.split(":");
    if (a2[0] === "12") {
      let newString = a2.join(":");
      newString = newString.replace("12", "00");
      return newString;
    } else {
      let newString2 = a2.join(":");
      return newString2;
    }
  } else {
    string = string.replace("PM", "");
    let a2 = string.split(":");
    if (a2[0] === "12") {
      let newString = a2.join(":");
      return newString;
    } else {
      a2[0] = Number(a2[0]);
      a2[0] += 12;
      let newstring2 = a2.join(":");
      return newstring2;
    }
  }
}
