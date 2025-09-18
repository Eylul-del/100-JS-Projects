// Dice symbols
let diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

let rollBtn = document.getElementById("roll-btn");
let diceDisplay = document.getElementById("dice");
let rollResult = document.getElementById("roll-result");

rollBtn.addEventListener("click", () => {
  // Roll one die
  let roll = Math.floor(Math.random() * 6);

  // Update display
  diceDisplay.textContent = diceFaces[roll];
  rollResult.textContent = `${roll + 1}`;
});
