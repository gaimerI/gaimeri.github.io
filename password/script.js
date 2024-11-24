// Define the correct password
const correctPassword = "thisisaverylongphrasethathopefullyisnotinanydictionary";

// Get references to the HTML elements
const passwordPrompt = document.getElementById("password-prompt");
const protectedContent = document.getElementById("protected-content");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");

// Add an event listener to the button
submitButton.addEventListener("click", () => {
  const enteredPassword = passwordInput.value;

  // Check if the entered password matches the correct one
  if (enteredPassword === correctPassword) {
    // Hide the password prompt and show the protected content
    passwordPrompt.style.display = "none";
    protectedContent.style.display = "block";
  } else {
    // Show an error message
    errorMessage.style.display = "block";
  }
});
