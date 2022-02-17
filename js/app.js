const incomeInput = document.getElementById("income-input").value;
const foodInput = document.getElementById("food-input").value;
const rentInput = document.getElementById("rent-input").value;
const othersInput = document.getElementById("others-input").value;
const calcButton = document.getElementById("calculate-btn");
const totalExpenses = document.getElementById("total-expenses").value;
const balanceField = document.getElementById("balance-field").value;
const saveInput = document.getElementById("save-input").value;
const saveButton = document.getElementById("save-btn");
const saveAmount = document.getElementById("save-amount").value;
const finalBalance = document.getElementById("rest-balance").value;

// error messages input
const numberError = document.getElementById("notify-fail");

let totalIncome;
let updateBalance;
let totalCost;

calcButton.addEventListener("click", function () {
  if (
    typeof incomeInput !== "number" &&
    typeof foodInput !== "number" &&
    typeof rentInput !== "number" &&
    typeof othersInput !== "number"
  ) {
    numberError.style.display = "block ";
    console.log(numberError);
  } else {
    console.log("number pawa gese");
  }

  /*  totalIncome = Number(incomeInput);
  const foodCost = Number(foodInput);
  const rentCost = Number(rentInput);
  const othersCost = Number(othersInput);

  // update total expenses
  totalCost = foodCost + rentCost + othersCost;
  totalExpenses.innerText = totalCost;
  //   update balance
  updateBalance = totalIncome - totalCost;
  balanceField.innerText = updateBalance;

  //   clear input field
  incomeInput.value = "";
  foodInput.value = "";
  rentInput.value = "";
  othersInput.value = ""; */
});

saveButton.addEventListener("click", function () {
  /* const saveParcent = Number(saveInput);
  const savingMoney = (totalIncome * saveParcent) / 100;
  saveAmount.innerText = savingMoney;
  // console.log(totalIncome);

  //update remaining balance
  const remainingBalance = updateBalance - savingMoney;
  console.log(remainingBalance);
  finalBalance.innerText = remainingBalance;
  // clear input field
  incomeInput.value = "";
  saveInput.value = ""; */
});
