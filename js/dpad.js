document.addEventListener("DOMContentLoaded", function () {
  onKeyDown();
  var nextElement,
    prevElement,
    lastActiveElement,
    currentElement = document.getElementById("active-item"),
    navMenuElement = document.querySelector(".sidebar-nav"),
    allRows = Array.from(document.querySelectorAll(".selectableRow:not(.sidebar-nav)")),
    isInNavMenu = false;

  function handleArrowLeft() {
    if (isInNavMenu) {
      var hash = window.location.hash || "#/home";
      var route = hash.replace("#", "") || "/";
      if (route !== "/home") return;
      // Jump to first
      nextElement = document.querySelector(".last-active");
      currentElement.removeAttribute("id");
      nextElement.setAttribute("id", "active-item");
      nextElement.focus();
      nextElement.scrollIntoView();
      currentElement = nextElement;
    }

    if (nextElement && nextElement.classList.contains("selectable")) {
      currentElement.removeAttribute("id");
      nextElement.setAttribute("id", "active-item");
      nextElement.focus();
      nextElement.scrollIntoView();
      currentElement = nextElement;
    }
  }

  function handleArrowUp() {
    if (isInNavMenu && prevElement && prevElement.classList.contains("selectable")) {
      currentElement.removeAttribute("id");
      prevElement.setAttribute("id", "active-item");
      prevElement.focus();
      prevElement.scrollIntoView();
      currentElement = prevElement;
    } else {
      var currentRow = currentElement.closest(".selectableRow");
      var currentIndex = allRows.indexOf(currentRow);
      if (currentIndex > 0) {
        prevElement = allRows[currentIndex - 1].querySelector(".selectable");
        currentElement.removeAttribute("id");
        prevElement.setAttribute("id", "active-item");
        prevElement.focus();
        prevElement.scrollIntoView();
        currentElement = prevElement;
      }
    }
  }

  function handleArrowRight() {
    if (isInNavMenu) return;
    if (prevElement && prevElement.classList.contains("selectable")) {
      currentElement.removeAttribute("id");
      prevElement.setAttribute("id", "active-item");
      prevElement.focus();
      prevElement.scrollIntoView();
      currentElement = prevElement;
    } else {
      // Jump to navbar
      prevElement = navMenuElement.querySelectorAll(".selectable")[0];
      currentElement.removeAttribute("id");
      currentElement.classList.add("last-active");
      prevElement.setAttribute("id", "active-item");
      prevElement.focus();
      prevElement.scrollIntoView();
      currentElement = prevElement;
    }
  }

  function handleArrowDown() {
    if (isInNavMenu && nextElement && nextElement.classList.contains("selectable")) {
      currentElement.removeAttribute("id");
      nextElement.setAttribute("id", "active-item");
      nextElement.focus();
      nextElement.scrollIntoView();
      currentElement = nextElement;
    } else {
      var currentRow = currentElement.closest(".selectableRow");
      var currentIndex = allRows.indexOf(currentRow);
      if (currentIndex < allRows.length - 1) {
        nextElement = allRows[currentIndex + 1].querySelector(".selectable");
        currentElement.removeAttribute("id");
        nextElement.setAttribute("id", "active-item");
        nextElement.focus();
        nextElement.scrollIntoView();
        currentElement = nextElement;
      }
    }
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
      if (!currentElement) return;

      if (currentElement.closest(".selectableRow").classList.contains("sidebar-nav")) {
        isInNavMenu = true;
      } else {
        isInNavMenu = false;
        lastActiveElement = document.querySelector(".last-active");
        if (lastActiveElement) lastActiveElement.classList.remove("last-active");
      }

      nextElement = currentElement.nextElementSibling;
      prevElement = currentElement.previousElementSibling;
      if (keyFuncs[key]) keyFuncs[key]();
    });
  }
});
