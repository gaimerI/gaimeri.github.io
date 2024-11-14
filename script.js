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
  class document.body.classList.toggle("dark-mode");
  // Update localStorage based on the current mode
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  }
  else { localStorage.setItem("dark-mode", "disabled");
  }
}

function calculateHypotenuse() {
  // Get the values of side A and side B
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);

  // Check if both inputs are valid numbers
  if (isNaN(sideA) || isNaN(sideB)) {
    document.getElementById("result").textContent = "Please enter valid numbers for both sides.";
    return;
  }

  // Calculate the hypotenuse
  const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2).toFixed(2);

  // Display the result
  document.getElementById("result").textContent = `The hypotenuse is ${hypotenuse}`;
}
