// script.js
function calculateAge() {
  const dob = document.getElementById("dob").value;
  if (!dob) {
    document.getElementById("result").textContent = "Please enter your date of birth.";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById("result").textContent = `Your age is ${age} years old.`;
}
