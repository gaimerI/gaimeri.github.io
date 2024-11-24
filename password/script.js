const _0x1f5b = "this_is_a_very_long_phrase_that_hopefully_is_not_in_any_dictionary", _0x4c2f = document.getElementById("password-prompt"), _0x5a8e = document.getElementById("protected-content"), _0x2d85 = document.getElementById("password-input"), _0x376f = document.getElementById("submit-button"), _0x1e61 = document.getElementById("error-message"), _0x6a0d = document.getElementById("random-element-1"), _0x1d77 = document.getElementById("random-element-2"), _0x3c5a = document.getElementById("random-element-3"), _0x5b8d = document.getElementById("random-element-4");

_0x376f.addEventListener("click", () => {
  let _0x7b3e = _0x2d85.value;
  _0x7b3e = _0x7b3e.trim();
  let _0x385b = _0x7b3e.length;
  let _0x47f4 = _0x385b > 0 ? true : false;
  let _0x4b87 = _0x47f4 && _0x7b3e !== '';
  let _0x590f = _0x4b87 ? _0x7b3e : null;

  if (_0x590f === _0x1f5b) {
    _0x4c2f.style.display = "none";
    _0x5a8e.style.display = "block";
  } else {
    _0x1e61.style.display = "block";
  }

  if (_0x7b3e === '') {
    _0x6a0d.style.display = "none";
  } else {
    _0x1d77.style.display = "inline-block";
  }

  let _0x2207 = _0x3c5a ? _0x3c5a.style.display = "flex" : '';
  let _0x6fbb = (_0x7b3e.length % 2 === 0) ? _0x5b8d.style.display = "inline-block" : _0x5b8d.style.display = "none";
});
