document.getElementById("calculateBtn").addEventListener("click", function() {
  const bill = parseFloat(document.getElementById("billAmount").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);

  if (isNaN(bill) || isNaN(tipPercent)) {
    alert("Please enter valid numbers!");
    return;
  }

  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;

  document.getElementById("total").textContent = `Total: $${total.toFixed(2)} (Tip: $${tip.toFixed(2)})`;
});
