(function () {
  var currentActiveEle = document.getElementById("active-item");

  function scrollIntoFocusedElement() {
    currentActiveEle.scrollIntoView({ inline: "center", block: "end", behavior: "smooth" });
  }

  document.addEventListener("keydown", function (e) {
    var key = e.keyCode;
    if (!currentActiveEle) return; // If no active element, exit

    var currentRow = currentActiveEle.closest(".selectableRow");
    var allRows = Array.from(document.querySelectorAll(".selectableRow"));
    var currentIndex = allRows.indexOf(currentRow);
    var nextElement, prevElement;

    if (key === 39) {
      if (
        currentActiveEle.previousElementSibling &&
        currentActiveEle.previousElementSibling.classList.contains("selectable")
      ) {
        currentActiveEle.removeAttribute("id");
        currentActiveEle.previousElementSibling.setAttribute("id", "active-item");
        currentActiveEle.previousElementSibling.focus();
        currentActiveEle.previousElementSibling.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
        currentActiveEle = currentActiveEle.previousElementSibling;
      }
    } else if (key === 38) {
      if (currentIndex > 0) {
        prevElement = allRows[currentIndex - 1].querySelector(".selectable");
      }
    } else if (key === 37) {
      if (
        currentActiveEle.nextElementSibling &&
        currentActiveEle.nextElementSibling.classList.contains("selectable")
      ) {
        currentActiveEle.removeAttribute("id");
        currentActiveEle.nextElementSibling.setAttribute("id", "active-item");
        currentActiveEle.nextElementSibling.focus();
        currentActiveEle.nextElementSibling.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
        currentActiveEle = currentActiveEle.nextElementSibling;
      }
    } else if (key === 40) {
      // Move to the next row, find the first selectable element
      if (currentIndex < allRows.length - 1) {
        nextElement = allRows[currentIndex + 1].querySelector(".selectable");
      }
    }

    // Update the active element for Down and Up arrow navigation
    if (nextElement) {
      currentActiveEle.removeAttribute("id"); // Remove active-item from the current element
      nextElement.setAttribute("id", "active-item"); // Set active-item on the next element
      nextElement.focus();
      nextElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      currentActiveEle = nextElement;
    } else if (prevElement) {
      currentActiveEle.removeAttribute("id"); // Remove active-item from the current element
      prevElement.setAttribute("id", "active-item"); // Set active-item on the previous element
      prevElement.focus();
      prevElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      currentActiveEle = prevElement;
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    scrollIntoFocusedElement();
  });
})();
