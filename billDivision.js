let itemsCost = [2, 4, 6];
bonAppetit(itemsCost, 2, 6);

function bonAppetit(bill, k, b) {
  bill.splice(k, 1);
  let TotalBill = bill.reduce((a, b) => a + b);
  let billPerPerson = TotalBill / 2;
  if (b === billPerPerson) {
    console.log("Bon Appetit");
  } else {
    console.log(b - billPerPerson);
  }
}
