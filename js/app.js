const incomeInput = document.getElementById("income-input");
const foodInput = document.getElementById("food-input");
const rentInput = document.getElementById("rent-input");
const othersInput = document.getElementById("others-input");
const calcButton = document.getElementById("calculate-btn");
const totalExpenses = document.getElementById("total-expenses");
const balanceField = document.getElementById("balance-field");
const saveInput = document.getElementById("save-input");
const saveButton = document.getElementById("save-btn");
const saveAmount = document.getElementById("save-amount");
const finalBalance = document.getElementById("rest-balance");
const numberError = document.getElementById("notify-fail");

let totalIncome;
let updateBalance;
let totalCost;

calcButton.addEventListener("click", function () {
  totalIncome = parseFloat(incomeInput.value);
  const foodCost = parseFloat(foodInput.value);
  const rentCost = parseFloat(rentInput.value);
  const othersCost = parseFloat(othersInput.value);

  if (totalIncome < 0 || foodCost < 0 || rentCost < 0 || othersCost < 0) {
    const errorMessage = numberError.innerText;
    errorMessage.style.display = "block";
  } else {
    // update total expenses
    totalCost = foodCost + rentCost + othersCost;
    totalExpenses.innerText = totalCost;
    //   update balance
    updateBalance = totalIncome - totalCost;
    balanceField.innerText = updateBalance;
  }

  //   clear input field
  incomeInput.value = "";
  foodInput.value = "";
  rentInput.value = "";
  othersInput.value = "";
});

saveButton.addEventListener("click", function () {
  const saveParcent = parseFloat(saveInput.value);
  const savingMoney = (totalIncome * saveParcent) / 100;
  saveAmount.innerText = savingMoney;
  console.log(totalIncome);

  //update remaining balance
  const remainingBalance = updateBalance - savingMoney;
  console.log(remainingBalance);
  finalBalance.innerText = remainingBalance;
  // clear input field
  incomeInput.value = "";
  saveInput.value = "";
});
