(function () {
  // Basic routing setup
  var routes = {
    "#/home": "<h1>Home</h1>",
    "#/cooking-assistant": "<h1>Cooking Assistant</h1>",
    "#/profile": "<h1>Profile</h1>",
  };

  var main = document.getElementById("main-content");

  function renderRoute() {
    console.log("rendered");
    var hash = window.location.hash || "#/home";
    if (routes[hash]) {
      main.innerHTML = routes[hash];
    } else {
      main.innerHTML = "<h1>404 - Not Found</h1>";
    }
    updateNavFocus(hash);
  }

  function updateNavFocus(activeHash) {
    var links = document.getElementsByClassName("nav-link");
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute("data-route") === activeHash) {
        links[i].classList.add("focused");
      } else {
        links[i].classList.remove("focused");
      }
    }
  }

  // Event listeners
  window.addEventListener("hashchange", renderRoute);

  var navButtons = document.getElementsByClassName("nav-link");
  for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].onclick = function (e) {
      var route = this.getAttribute("data-route");
      window.location.hash = route;
    };
  }

  // Initial load
  renderRoute();
})();
