(function () {
  var focusable = [];
  var focusIndex = 0;

  function updateFocusable() {
    focusable = Array.prototype.slice.call(
      document.querySelectorAll(".nav-link, button, a, [tabindex]")
    );
  }

  function focusElement(index) {
    if (!focusable.length) return;
    if (index < 0) index = focusable.length - 1;
    if (index >= focusable.length) index = 0;
    focusable[index].focus();
    focusIndex = index;
  }

  document.addEventListener("keydown", function (e) {
    var key = e.keyCode;

    // 37: left, 38: up, 39: right, 40: down, 13: enter
    if (key === 38) {
      focusElement(focusIndex - 1);
      e.preventDefault();
    } else if (key === 40) {
      focusElement(focusIndex + 1);
      e.preventDefault();
    } else if (key === 13) {
      if (focusable[focusIndex]) focusable[focusIndex].click();
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    updateFocusable();
    focusElement(0);
  });
})();
