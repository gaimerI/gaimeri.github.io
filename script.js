function applyTheme() {
  // Check localStorage for dark mode setting
  const darkMode = localStorage.getItem("dark-mode");
  // If dark mode is enabled in localStorage, apply it
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }
}

function toggleDarkMode() {
  // Toggle dark mode
  document.body.classList.toggle("dark-mode");
  // Update localStorage based on the current mode
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
}

 function calculatePythagoras() {
    const sideType = document.getElementById("sideType").value;
    const side1 = parseFloat(document.getElementById("side1").value);
    const side2 = parseFloat(document.getElementById("side2").value);
    const resultDiv = document.getElementById("result");

    // Validate inputs
    if (isNaN(side1) || isNaN(side2) || side1 <= 0 || side2 <= 0) {
        resultDiv.textContent = "Please enter valid positive numbers for both sides.";
        return;
    }

    let missingSide;

    if (sideType === "legs") {
        // Calculate hypotenuse (c = √(a² + b²))
        missingSide = Math.sqrt(side1 * side1 + side2 * side2);
        resultDiv.textContent = `The hypotenuse (c) is approximately: ${missingSide.toFixed(2)}`;
    } else if (sideType === "hypotenuseAndLeg") {
        // Ensure side1 is the hypotenuse
        if (side1 <= side2) {
            resultDiv.textContent = "The hypotenuse must be the longer side.";
            return;
        }
        // Calculate missing leg (a = √(c² - b²))
        missingSide = Math.sqrt(side1 * side1 - side2 * side2);
        resultDiv.textContent = `The missing leg is approximately: ${missingSide.toFixed(2)}`;
    }
}

function measureTextWidth() {
  const textInput = document.getElementById('textInput');
  const textWidthSpan = document.getElementById('textWidthSpan');
  const textWidthDisplay = document.getElementById('textWidth');
  
  // Update the hidden span with the input text
  textWidthSpan.textContent = textInput.value;
  
  // Measure the width of the span and display it
  const width = textWidthSpan.offsetWidth;
  textWidthDisplay.textContent = width;
}

function calculateSides() {
      const angle = parseFloat(document.getElementById("angle").value);
      const side = parseFloat(document.getElementById("side").value);
      const sideType = document.getElementById("sideType").value;

      if (isNaN(angle) || isNaN(side) || angle <= 0 || angle >= 90 || side <= 0) {
        document.getElementById("result").textContent = "Please enter valid inputs.";
        return;
      }

      // Convert angle from degrees to radians
      const angleRad = angle * Math.PI / 180;

      let opposite, adjacent, hypotenuse;

      // Calculate other sides based on the known side
      if (sideType === "adjacent") {
        adjacent = side;
        opposite = Math.tan(angleRad) * adjacent;
        hypotenuse = adjacent / Math.cos(angleRad);
      } else if (sideType === "opposite") {
        opposite = side;
        adjacent = opposite / Math.tan(angleRad);
        hypotenuse = opposite / Math.sin(angleRad);
      } else if (sideType === "hypotenuse") {
        hypotenuse = side;
        adjacent = hypotenuse * Math.cos(angleRad);
        opposite = hypotenuse * Math.sin(angleRad);
      }

      // Display the results
      document.getElementById("result").innerHTML = `
        Adjacent side: ${adjacent.toFixed(2)}<br>
        Opposite side: ${opposite.toFixed(2)}<br>
        Hypotenuse: ${hypotenuse.toFixed(2)}
      `;
}
