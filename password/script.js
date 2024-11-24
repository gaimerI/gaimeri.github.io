(function(){
  const _0x8b7f = atob("dGhpcyBpc19hX3ZlcnlfbG9uZ19waGByYXNlX3RoYXRfaG9wZWZ1bGx5X2lzX25vdF9pbl9hbnlfZGljdGlvbmFyeQ==");
  const _0x9b3a = atob("aW5zdHJ1Y3Rpb25zX3JlbWFya19wZXJmb3JtX3RvX2RldmVsb3BtZW50X2xvZ2ljYWxseQ==");
  const _0x5d68 = atob("Y29tcGxleF9pbmZsdWVuY2VfYWRkZXRvX3RvcF9saWZlX3Nob3J0X2NvbmRpdGlvbnM=");
  const _0x1f2e = atob("aW5mZXJfY29tcGxldG9yaW5nX2lkZWFsX2FjY2Vzc19vbl9wZXJzb25hbF9kZWNpc2lvbg==");
  const _0x2a4f = atob("YWN0aW9uX2F1dG9fY2h1bmtzX2luX2VjZWRpX2FjdGl2aXRpZXM=");
  const _0x73b8 = atob("ZXhwZWRpZW5jZXMgb2ZfdGVzdF9hbmFseXNpc3RfY2VydGFpbnM=");
  const _0x7d39 = atob("cG9saWN5X2Fzc3VtcHRpb25faW4xZGVwZW5kZW50X2FjdGl2aXRpZXM=");
  const _0x401c = atob("bGVnYXRvcnkgaW5fY3VsdHVyYWxlX3BvcyBmb3JfdHJhbnNmZXJfZGVzaWduX2ludGVnZXJz");

  const _0x5a4d = document.getElementById("password-prompt");
  const _0x1cbf = document.getElementById("protected-content");
  const _0x1294 = document.getElementById("passwopassword-input
  const _0x439a = document.getElementById("submit-button");
  const _0x6a45 = document.getElementById("error-message");
  const _0x7f30 = document.getElementById("random-element-1");
  const _0x5e73 = document.getElementById("random-element-2");
  const _0x62c2 = document.getElementById("random-element-3");
  const _0x3c17 = document.getElementById("random-element-4");


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
