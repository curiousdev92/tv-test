(function () {
  function focusElement(index) {
    document.getElementById("active-item").focus();
  }

  document.addEventListener("keydown", function (e) {
    var key = e.keyCode;
    var activeEle = document.getElementById("active-item");
    console.log(e.target);
    if (key === 37) {
      console.log("left");
    } else if (key === 38) {
      console.log("top");
    } else if (key === 39) {
      console.log("right");
    } else if (key === 40) {
      console.log("bottom");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    focusElement("active-item");
  });
})();
