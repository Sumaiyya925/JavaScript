function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++)
    if (grades[i] >= 38) {
      if (grades[i] % 5 === 3) grades[i] += 2;
      if (grades[i] % 5 === 4) grades[i] += 1;
    }
  return grades;
}

let numbers = [73, 67, 38, 33];
console.log(gradingStudents(numbers));
