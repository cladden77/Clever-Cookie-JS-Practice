// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");
// First, tell us your name
let yourName = "Chris Ladden"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle

let total = 0; // total

// selecting the element with an id of credit
const credit = document.querySelector("#credit");
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector("#add-gb");
const gbMinusBtn = document.querySelector("#minus-gb");

const ccPlusBtn = document.querySelector("#add-cc");
const ccMinusBtn = document.querySelector("#minus-cc");

const sugarPlusBtn = document.querySelector("#add-sugar");
const sugarMinusBtn = document.querySelector("#minus-sugar");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  // HINT: You can delete this console.log after you no longer need it!
  // console.log("Gingerbread + button was clicked!");

  // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
  gb++;
  total++;
  updateQuantity(gb);
  updateQuantityTotal(total);
});

// TODO: Hook up event listeners for the rest of the buttons

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener("click", function (e) {
  if (gb > 1) {
    gb--;
    total--;
  }
  updateQuantity(gb, total);
  updateQuantityTotal(total);
});

function updateQuantity(displayQuantity) {
  let gb = document.querySelector("#qty-gb");
  gb.innerHTML = displayQuantity;
}

// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener("click", function () {
  cc++;
  total++;
  updateQuantityCC(cc);
  updateQuantityTotal(total);
});

// Event listener for clicks on the "-" button for Chocolate Chip cookies
ccMinusBtn.addEventListener("click", function (e) {
  if (cc > 1) {
    cc--;
    total--;
  }
  updateQuantityCC(cc);
  updateQuantityTotal(total);
});

// update total CC Quantity
function updateQuantityCC(displayQuantity) {
  let cc = document.querySelector("#qty-cc");
  cc.innerHTML = displayQuantity;
}

// Event listener for clicks on the "+" button for Sugar cookies
sugarPlusBtn.addEventListener("click", function () {
  sugar++;
  total++;
  updateQuantitySugar(sugar);
  updateQuantityTotal(total);
});

// Event listener for clicks on the "-" button for Sugar cookies
sugarMinusBtn.addEventListener("click", function (e) {
  if (sugar > 1) {
    sugar--;
    total--;
  }
  updateQuantitySugar(sugar);
  updateQuantityTotal(total);
});

// update total Sugar Quantity
function updateQuantitySugar(displayQuantity) {
  let sugar = document.querySelector("#qty-sugar");
  sugar.innerHTML = displayQuantity;
}

// update total
function updateQuantityTotal(displayQuantity) {
  let total = document.querySelector("#qty-total");
  total.innerHTML = displayQuantity;
}
