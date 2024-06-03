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
