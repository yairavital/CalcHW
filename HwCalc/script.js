function FahrenheitToC(value) {
  value = parseFloat(value);
  if (!isNaN(value)) {
    value = (value - 32) / 1.8;
    document.getElementById("cel").innerHTML = value.toFixed(2);
  } else alert("please enter number");
}

/* inputCel.addEventListener(oninput, ConvertToCeluses(inputCel.innerHTML));
 */
function CToFahrenheit(value) {
  value = parseFloat(value);
  if (!isNaN(value)) {
    value = (value * 9) / 5 + 32;
    document.getElementById("Fahrenhiet").innerHTML = value.toFixed(2);
  } else alert("please enter number");
}
