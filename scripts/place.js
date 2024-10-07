document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('currentyear').textContent = new Date().getFullYear();

  document.getElementById('lastModified').textContent =
    'Last Modified: ' + document.lastModified;
});

const temperature = 10; 
const windSpeed = 5; 


function calculateWindChill(temperature, windSpeed) {
  return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

function displayWindChill() {
  let windChillElement = document.getElementById("wind-chill");
  
  if (temperature <= 10 && windSpeed > 4.8) {
    const windChillFactor = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChillFactor} °C`; 
  } else {
    windChillElement.textContent = "N/A"; 
  }
}

window.onload = displayWindChill;
