document.addEventListener("DOMContentLoaded", function () {
  onKeyDown();
  var nextElement,
    prevElement,
    lastActiveElement,
    currentElement = document.getElementById("active-item"),
    navMenuElement = document.querySelector(".sidebar-nav"),
    allRows = Array.from(document.querySelectorAll(".selectableRow:not(.sidebar-nav)")),
    isInNavMenu = false;

  function manualVerticalScrollIntoView(el) {
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

    // // find nearest scrollable container
    // var container = el.closest(".page-element, .slider-container, .sidebar");
    // if (!container) container = document.scrollingElement || document.body;

    // // Center element vertically in container
    // var containerHeight = container.clientHeight;
    // var elTop = el.offsetTop - container.offsetTop;
    // var elHeight = el.offsetHeight;

    // // Calculate scrollTop so the element is vertically centered
    // var targetScrollTop = elTop - containerHeight / 2 + elHeight / 2;

    // // Clamp between 0 and max scrollable height
    // var maxScrollTop = container.scrollHeight - containerHeight;
    // if (targetScrollTop < 0) targetScrollTop = 0;
    // if (targetScrollTop > maxScrollTop) targetScrollTop = maxScrollTop;

    // container.scrollTop = targetScrollTop;
  }

  /**
   *
   * @param {HTMLElement} el
   * @returns
   */
  function manualHorizontalScrollIntoView(el, direction) {
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    // var container;
    // el.scrollIntoView({ behavior: "instant" });
    // if (el.classList.contains("slider-item")) {
    //   container = el.parentElement;
    // } else {
    //   container = el.closest(".slider, .selectableRow");
    // }
    // console.log(container, el.clientWidth + 16);
    // if (direction === "left") {
    //   container.scrollLeft -= el.clientWidth + 16;
    // } else {
    //   container.scrollLeft += el.clientWidth + 16;
    // }

    // // Center element horizontally in container
    // var containerWidth = container.clientWidth;
    // var elLeft = el.offsetLeft - container.offsetLeft;
    // var elWidth = el.offsetWidth;

    // // Calculate scrollLeft so the element is horizontally centered
    // var targetScrollLeft = elLeft - containerWidth / 2 + elWidth / 2;

    // // Handle RTL (reverse scroll direction)
    // var dir = "ltr";
    // try {
    //   dir = window.getComputedStyle(container).direction || "ltr";
    // } catch (e) {}
    // if (dir === "rtl") {
    //   targetScrollLeft = -targetScrollLeft;
    // }

    // // Clamp between 0 and max scrollable width
    // var maxScrollLeft = container.scrollWidth - containerWidth;
    // if (targetScrollLeft < 0) targetScrollLeft = 0;
    // if (targetScrollLeft > maxScrollLeft) targetScrollLeft = maxScrollLeft;
    // console.log({ targetScrollLeft });
    // container.scrollLeft = targetScrollLeft;
  }

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
      // nextElement.scrollIntoView();
      manualHorizontalScrollIntoView(nextElement, "left");
      currentElement = nextElement;
    }

    if (nextElement && nextElement.classList.contains("selectable")) {
      currentElement.removeAttribute("id");
      nextElement.setAttribute("id", "active-item");
      nextElement.focus();
      // nextElement.scrollIntoView();
      manualHorizontalScrollIntoView(nextElement, "left");
      currentElement = nextElement;

      // handle Dots
      var isInSlider = nextElement.closest(".selectableRow").classList.contains("slider-container");
      if (isInSlider) updateDots();
    }
  }

  function handleArrowUp() {
    if (isInNavMenu && prevElement && prevElement.classList.contains("selectable")) {
      currentElement.removeAttribute("id");
      prevElement.setAttribute("id", "active-item");
      prevElement.focus();
      // prevElement.scrollIntoView();
      manualVerticalScrollIntoView(prevElement);
      currentElement = prevElement;
    } else {
      var currentRow = currentElement.closest(".selectableRow");
      var currentIndex = allRows.indexOf(currentRow);
      if (currentIndex > 0) {
        prevElement = allRows[currentIndex - 1].querySelector(".selectable");
        currentElement.removeAttribute("id");
        prevElement.setAttribute("id", "active-item");
        prevElement.focus();
        // prevElement.scrollIntoView();
        manualVerticalScrollIntoView(prevElement);
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
      // prevElement.scrollIntoView();
      manualHorizontalScrollIntoView(prevElement, "right");
      currentElement = prevElement;

      // handle Dots
      var isInSlider = prevElement.closest(".selectableRow").classList.contains("slider-container");
      if (isInSlider) updateDots();
    } else {
      // Jump to navbar
      prevElement = navMenuElement.querySelectorAll(".selectable")[0];
      currentElement.removeAttribute("id");
      currentElement.classList.add("last-active");
      prevElement.setAttribute("id", "active-item");
      prevElement.focus();
      // prevElement.scrollIntoView();
      manualHorizontalScrollIntoView(prevElement, "right");
      currentElement = prevElement;
    }
  }

  function handleArrowDown() {
    if (isInNavMenu && nextElement && nextElement.classList.contains("selectable")) {
      currentElement.removeAttribute("id");
      nextElement.setAttribute("id", "active-item");
      nextElement.focus();
      // nextElement.scrollIntoView();
      manualVerticalScrollIntoView(nextElement);
      currentElement = nextElement;
    } else {
      var currentRow = currentElement.closest(".selectableRow");
      var currentIndex = allRows.indexOf(currentRow);
      if (currentIndex < allRows.length - 1) {
        nextElement = allRows[currentIndex + 1].querySelector(".selectable");
        currentElement.removeAttribute("id");
        nextElement.setAttribute("id", "active-item");
        nextElement.focus();
        // nextElement.scrollIntoView();
        manualVerticalScrollIntoView(nextElement);
        currentElement = nextElement;
      }
    }
  }

  function handleClick() {
    console.log(currentElement.getAttribute("data-route"));
    if (!currentElement.getAttribute("data-route")) {
      window.location.hash = "#/pdp";
    }
    currentElement.click();
  }

  function onKeyDown() {
    document.addEventListener("keydown", function (e) {
      var key = e.keyCode;

      var keyFuncs = {
        37: handleArrowLeft,
        38: handleArrowUp,
        39: handleArrowRight,
        40: handleArrowDown,
        13: handleClick,
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

  function updateDots() {
    var dotsContainer = document.querySelector(".dots");
    var currentRow = currentElement.closest(".selectableRow");
    var allCurrentSelectables = Array.from(currentRow.querySelectorAll(".selectable"));
    var sliderIndex = allCurrentSelectables.indexOf(currentElement);
  }
});
