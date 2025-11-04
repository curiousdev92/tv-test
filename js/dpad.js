(function () {
  var currentActiveEle = document.getElementById("active-item");

  function scrollIntoFocusedElement() {
    currentActiveEle.scrollIntoView({ inline: "center", block: "end", behavior: "smooth" });
  }

  document.addEventListener("keydown", function (e) {
    var key = e.keyCode;
    var currentRow = currentActiveEle.closest(".selectableRow");
    var allRows = Array.from(document.querySelectorAll(".selectableRow"));
    var currentIndex = allRows.indexOf(currentRow);
    var nextElement, prevElement;

    if (key === 37) {
      // Left ArrowKey
      if (currentActiveEle.nextElementSibling) {
        currentActiveEle.removeAttribute("id");
        currentActiveEle.removeAttribute("tabindex");
        currentActiveEle.nextElementSibling.setAttribute("id", "active-item");
        currentActiveEle.nextElementSibling.setAttribute("tabindex", "0");
        currentActiveEle.nextElementSibling.focus();
        currentActiveEle = currentActiveEle.nextElementSibling;
      }
    } else if (key === 38) {
      // Up ArrowKey
      if (currentIndex > 0) {
        prevElement = allRows[currentIndex - 1].querySelector(".selectable");
      }
    } else if (key === 39) {
      // Right ArrowKey
      if (currentActiveEle.previousElementSibling) {
        currentActiveEle.removeAttribute("id");
        currentActiveEle.removeAttribute("tabindex");
        currentActiveEle.previousElementSibling.setAttribute("id", "active-item");
        currentActiveEle.previousElementSibling.setAttribute("tabindex", "0");
        currentActiveEle.previousElementSibling.focus();
        currentActiveEle = currentActiveEle.previousElementSibling;
      }
    } else if (key === 40) {
      // Down ArrowKey
      if (currentIndex < allRows.length - 1) {
        nextElement = allRows[currentIndex + 1].querySelector(".selectable");
      }
    }
    if (nextElement) {
      currentActiveEle.removeAttribute("id"); // Remove active-item from the current element
      currentActiveEle.removeAttribute("tabindex");
      nextElement.setAttribute("id", "active-item"); // Set active-item on the next element
      nextElement.setAttribute("tabindex", "0");
      nextElement.focus();
      currentActiveEle = nextElement;
    } else if (prevElement) {
      currentActiveEle.removeAttribute("id"); // Remove active-item from the current element
      currentActiveEle.removeAttribute("tabindex");
      prevElement.setAttribute("id", "active-item"); // Set active-item on the previous element
      prevElement.setAttribute("tabindex", "0");
      prevElement.focus();
      currentActiveEle = prevElement;
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    scrollIntoFocusedElement();
  });
})();
