const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

// Celsius → Fahrenheit & Kelvin
celsius.addEventListener("input", function() {
  const c = parseFloat(celsius.value);
  if (isNaN(c)) {
    fahrenheit.value = "";
    kelvin.value = "";
    return;
  }
  fahrenheit.value = (c * 9/5 + 32).toFixed(2);
  kelvin.value = (c + 273.15).toFixed(2);
});

// Fahrenheit → Celsius & Kelvin
fahrenheit.addEventListener("input", function() {
  const f = parseFloat(fahrenheit.value);
  if (isNaN(f)) {
    celsius.value = "";
    kelvin.value = "";
    return;
  }
  celsius.value = ((f - 32) * 5/9).toFixed(2);
  kelvin.value = ((f - 32) * 5/9 + 273.15).toFixed(2);
});

// Kelvin → Celsius & Fahrenheit
kelvin.addEventListener("input", function() {
  const k = parseFloat(kelvin.value);
  if (isNaN(k)) {
    celsius.value = "";
    fahrenheit.value = "";
    return;
  }
  celsius.value = (k - 273.15).toFixed(2);
  fahrenheit.value = ((k - 273.15) * 9/5 + 32).toFixed(2);
});
