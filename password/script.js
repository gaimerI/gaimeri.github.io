(function(){
  const _0x8b7f = atob("dGhpcyBpc19hX3ZlcnlfbG9uZ19waGByYXNlX3RoYXRfaG9wZWZ1bGx5X2lzX25vdF9pbl9hbnlfZGljdGlvbmFyeQ=="), 
        _0x5a4d = document.getElementById("password-prompt"), 
        _0x1cbf = document.getElementById("protected-content"), 
        _0x1294 = document.getElementById("password-input"), 
        _0x439a = document.getElementById("submit-button"), 
        _0x6a45 = document.getElementById("error-message"), 
        _0x7f30 = document.getElementById("random-element-1"), 
        _0x5e73 = document.getElementById("random-element-2"), 
        _0x62c2 = document.getElementById("random-element-3"), 
        _0x3c17 = document.getElementById("random-element-4");

  _0x439a.addEventListener("click", function() {
    let _0x5e29 = _0x1294.value.trim();
    let _0x233e = _0x5e29.length;
    let _0x34a7 = _0x233e > 0 ? true : false;
    let _0x5810 = _0x34a7 && _0x5e29 !== '';
    let _0x4b91 = _0x5810 ? _0x5e29 : null;

    if (_0x4b91 === _0x8b7f) {
      _0x5a4d.style.display = "none";
      _0x1cbf.style.display = "block";
    } else {
      _0x6a45.style.display = "block";
    }

    if (_0x5e29 === '') {
      _0x7f30.style.display = "none";
    } else {
      _0x5e73.style.display = "inline-block";
    }

    let _0x14b6 = _0x62c2 ? _0x62c2.style.display = "flex" : '';
    let _0x4f1b = (_0x5e29.length % 2 === 0) ? _0x3c17.style.display = "inline-block" : _0x3c17.style.display = "none";
  });
})();
