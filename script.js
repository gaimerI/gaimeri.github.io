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
  // Get user input and the hidden measuring span
  const input = document.getElementById('text-input');
  const textMeasureSpan = document.getElementById('text-measure');
  const textWidthDisplay = document.getElementById('text-width');

  if (!input || !textMeasureSpan || !textWidthDisplay) return;

  const text = input.value;

  // Apply styles to the measuring span to match the input
  const style = window.getComputedStyle(input);
  textMeasureSpan.style.fontFamily = style.fontFamily;
  textMeasureSpan.style.fontSize = style.fontSize;
  textMeasureSpan.style.fontWeight = style.fontWeight;
  textMeasureSpan.style.letterSpacing = style.letterSpacing;
  textMeasureSpan.style.position = 'absolute';
  textMeasureSpan.style.visibility = 'hidden';

  // Set the text to the span and measure its width
  textMeasureSpan.textContent = text;
  const width = textMeasureSpan.clientWidth; // or use getBoundingClientRect().width

  // Display the width
  textWidthDisplay.textContent = width;

  // Clear the span's textContent after measurement (optional)
  textMeasureSpan.textContent = '';
}
