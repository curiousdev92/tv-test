(function () {
  function scrollIntoFocusedElement() {
    document
      .getElementById("active-item")
      .scrollIntoView({ inline: "center", block: "end", behavior: "smooth" });
  }

  document.addEventListener("keydown", function (e) {
    var key = e.keyCode;
    var currentActiveEle = document.getElementById("active-item");
    console.log("currentActiveEle", currentActiveEle);

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
    scrollIntoFocusedElement();
  });
})();
