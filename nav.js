(function () {
  var header = document.querySelector("header.nav");
  var btn = document.querySelector(".menu-btn");
  if (!header || !btn) return;
  btn.addEventListener("click", function () {
    var open = header.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = open ? "Close" : "Menu";
  });
})();
