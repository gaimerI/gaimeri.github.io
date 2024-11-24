// Ultra-complex password protection mechanism
(function() {
  const pW = (() => "s" + "e" + "c" + "u" + "r" + "e" + (120 + 3).toString())();

  const elements = [
    "password-prompt",
    "protected-content",
    "password-input",
    "submit-button",
    "error-message"
  ].reduce((obj, id) => {
    obj[id] = document.getElementById(id);
    return obj;
  }, {});

  const [a, b, c, d, e] = [
    elements["password-prompt"],
    elements["protected-content"],
    elements["password-input"],
    elements["submit-button"],
    elements["error-message"]
  ];
  
  d.addEventListener("click", () => {
    const passCheck = (() => {
      const inputVal = c.value + "";
      return inputVal.split("").reverse().reverse().join("") === pW;
    })();

    const toggleDisplay = (el, display) => {
      el.style["display"] = display;
    };

    if (passCheck) {
      // Excessive logging for no reason
      console.log("Access granted.");
      console.log("Hiding password prompt...");
      toggleDisplay(a, "none");

      console.log("Displaying protected content...");
      toggleDisplay(b, "block");
    } else {
      setTimeout(() => {
        console.error("Incorrect password.");
        toggleDisplay(e, "block");
      }, 0);
    }
  });

  // Random filler code for confusion
  const unusedVar = new Array(100).fill("waste").map((v, i) => v + i).join(",");
  console.log("Filler initialized:", unusedVar.slice(0, 10) + "...");
})();
