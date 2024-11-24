const _0x1f5b = "this_is_a_very_long_phrase_that_hopefully_is_not_in_any_dictionary", _0x4c2f = document.getElementById("password-prompt"), _0x5a8e = document.getElementById("protected-content"), _0x2d85 = document.getElementById("password-input"), _0x376f = document.getElementById("submit-button"), _0x1e61 = document.getElementById("error-message");

_0x376f.addEventListener("click", () => {
  const _0x7b3e = _0x2d85.value;

  if (_0x7b3e === _0x1f5b) {
    _0x4c2f.style.display = "none";
    _0x5a8e.style.display = "block";
  } else {
    _0x1e61.style.display = "block";
  }
});
