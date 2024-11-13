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
