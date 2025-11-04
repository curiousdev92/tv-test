document.addEventListener("DOMContentLoaded", function () {
  onKeyDown();
  var nextElement, prevElement, currentElement;

  function handleArrowLeft() {
    console.log("handleArrowLeft");
  }

  function handleArrowUp() {
    console.log("handleArrowUp");
  }

  function handleArrowRight() {
    console.log("handleArrowRight");
  }

  function handleArrowDown() {
    console.log("handleArrowDown");
  }

  function onKeyDown() {
    document.addEventListener("keydown", function (e) {
      var key = e.keyCode;

      var keyFuncs = {
        37: handleArrowLeft,
        38: handleArrowUp,
        39: handleArrowRight,
        40: handleArrowDown,
      };

      if (keyFuncs[key]) keyFuncs[key]();
    });
  }
});
