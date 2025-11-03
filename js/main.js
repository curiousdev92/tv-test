(function () {
  var homePageElement = document.getElementById("home");
  var cookingAssistantPageElement = document.getElementById("cooking-assistant");
  var profilePageElement = document.getElementById("profile");
  var quickFoodsSection = document.getElementById("home-quick-foods");
  var suggestionsSection = document.getElementById("home-suggestions");
  var locale = "fa";

  function renderRoute() {
    var hash = window.location.hash || "#/home";
    var route = hash.replace("#", "") || "/";
    if (route === "/" || route === "/home") {
      loadquickFoods("filter=tg-fast&srt=srt-random&page=1&limit=5");
      loadSuggestions("srt=srt-variety&limit=13");
    }
    updateNavFocus(hash);
  }

  function loadquickFoods(search) {
    getJSON(
      `https://apis8.hesetazegi.com/api/Recipe/list/${locale}?${search}`,
      function (data) {
        if (data.statusCode === 200 && data && data.data && data.data.records) {
          quickFoodsSection.classList.add("loaded");
          var recipes = data.data.records;
          for (var i = 0; i < recipes.length; i++) {
            var recipe = recipes[i];
            var article = document.createElement("article");
            article.style.backgroundImage = `url(${recipe.image.src})`;
            // var img = document.createElement("img");
            // img.src = recipe.image.src;
            // img.alt = recipe.image.alt;
            // img.width = 240;
            // img.height = 320;
            // var p = document.createElement("p");
            // p.textContent = recipe.title;
            if (recipe.isPremium) article.classList.add("premium");
            // article.appendChild(img);
            // article.appendChild(p);
            quickFoodsSection.appendChild(article);
          }
        }
      },
      function (err) {
        console.log("Failed to load recipes:", err);
      }
    );
  }

  function loadSuggestions(search) {
    getJSON(
      `https://apis8.hesetazegi.com/api/Recipe/list/${locale}?${search}`,
      function (data) {
        if (data.statusCode === 200 && data && data.data && data.data.records) {
          suggestionsSection.classList.add("loaded");
          var suggestionsCardsContainer =
            suggestionsSection.getElementsByClassName("suggestions-cards")[0];
          console.log(suggestionsCardsContainer);
          var recipes = data.data.records;
          for (var i = 0; i < recipes.length; i++) {
            var recipe = recipes[i];
            var article = document.createElement("article");
            article.style.backgroundImage = `url(${recipe.image.src})`;
            // var img = document.createElement("img");
            // img.src = recipe.image.src;
            // img.alt = recipe.image.alt;
            // img.width = 240;
            // img.height = 320;
            // var p = document.createElement("p");
            // p.textContent = recipe.title;
            if (recipe.isPremium) article.classList.add("premium");
            // article.appendChild(img);
            // article.appendChild(p);
            suggestionsCardsContainer.appendChild(article);
          }
        }
      },
      function (err) {
        console.log("Failed to load recipes:", err);
      }
    );
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

  function getJSON(url, callback, errorCallback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            var data = JSON.parse(xhr.responseText);
            callback(data);
          } catch (err) {
            if (errorCallback) errorCallback(err);
          }
        } else {
          if (errorCallback) errorCallback(new Error("Request failed: " + xhr.status));
        }
      }
    };
    xhr.send();
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

  // Api calls
})();
