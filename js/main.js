(function () {
  var quickFoodsSection = document.getElementById("home-quick-foods");
  var suggestionsSection = document.getElementById("home-suggestions");

  var foodSuggestions = [
    {
      title: "سالاد رژیمی",
      img: "https://statics.hesetazegi.com/files/images/recipes/diet-friendly-salad/diet_friendly_salad_t_hese_tazegi.jpg",
      cookingTime: 70,
    },
    {
      title: "بربسیل",
      img: "https://statics.hesetazegi.com/files/images/recipes/barbasil/barbasil_t_hese_tazegi.jpg",
      cookingTime: 190,
    },
    {
      title: "کوفته کرمانشاهی",
      img: "https://statics.hesetazegi.com/files/images/recipes/kermanshahi-kofta/kermanshahi_kofta_t_hese_tazegi.jpg",
      cookingTime: 60,
    },
    {
      title: "خورش کدوقرمز",
      img: "https://statics.hesetazegi.com/files/images/recipes/butternut-squash-stew-bushehr/butternut_squash_stew_bushehr_t_hese_tazegi.jpg",
      cookingTime: 100,
    },
    {
      title: "فطایر گوشت و قارچ",
      img: "https://statics.hesetazegi.com/files/images/recipes/meat-and-mushroom-fatayer/meat_and_mushroom_fatayer_t_hese_tazegi.jpg",
      cookingTime: 45,
    },
    {
      title: "خورش داوود پاشا",
      img: "https://statics.hesetazegi.com/files/images/recipes/davood-pasha-stew/davood_pasha_stew_t_hese_tazegi.jpg",
      cookingTime: 50,
    },
    {
      title: "میلک‌شیک پارادایس",
      img: "https://statics.hesetazegi.com/files/images/recipes/paradise-milkshake/paradise_milkshake_t_hese_tazegi.jpg",
      cookingTime: 5,
    },
    {
      title: "کرپ سوخاری با خرما و گردو",
      img: "https://statics.hesetazegi.com/files/images/recipes/date-and-walnut-fried-crepe/date_and_walnut_fried_crepe_t_hese_tazegi.jpg",
      cookingTime: 40,
    },
    {
      title: "شیرپلو تبریزی",
      img: "https://statics.hesetazegi.com/files/images/recipes/tabrizi-milk-pilau/tabrizi_milk_pilau_t_hese_tazegi.jpg",
      cookingTime: 70,
    },
    {
      title: "کوفته سوئدی",
      img: "https://statics.hesetazegi.com/files/images/recipes/swedish-kofta/swedish_kofta_t_hese_tazegi.jpg",
      cookingTime: 45,
    },
    {
      title: "لازانیا زیتون و گوجه‌فرنگی",
      img: "https://statics.hesetazegi.com/files/images/recipes/olive-and-tomato-lasagne/olive_and_tomato_lasagne_t_hese_tazegi.jpg",
      cookingTime: 80,
    },
    {
      title: "قنبرپلو شیرازی",
      img: "https://statics.hesetazegi.com/files/images/recipes/ghanbar-polo-shirazi/ghanbar_polo_shirazi_t_hese_tazegi.jpg",
      cookingTime: 70,
    },
    {
      title: "آش غورابه",
      img: "https://statics.hesetazegi.com/files/images/recipes/aash-ghoorabeh/aash_ghoorabeh_t_hese_tazegi.jpg",
      cookingTime: 125,
    },
  ];

  var quickfoods = [
    {
      title: "فرنی گیاهی",
      img: "https://statics.hesetazegi.com/files/image/recipe/fr-vegetarian-fereni/vegetarian_fereni_t_hese_tazegi.jpg",
      cookingTime: 5,
    },
    {
      title: "سالاد تبوله",
      img: "https://statics.hesetazegi.com/files/images/recipes/tabbouleh/tabbouleh_t_hese_tazegi.jpg",
      cookingTime: 15,
    },
    {
      title: "سیب و موز عسلی",
      img: "https://statics.hesetazegi.com/files/images/recipes/apple-and-bannana-cereal/apple_and_bannana_cereal_t_hese_tazegi.jpg",
      cookingTime: 10,
    },
    {
      title: "املت پیتزایی",
      img: "https://statics.hesetazegi.com/files/images/recipes/pizza-omelette/pizza_omelette_t_hese_tazegi.jpg",
      cookingTime: 20,
    },
    {
      title: "املت هویج",
      img: "https://statics.hesetazegi.com/files/images/recipes/carrot-omelette/carrot_omelette_t_hese_tazegi.jpg",
      cookingTime: 20,
    },
  ];

  function renderRoute() {
    var hash = window.location.hash || "#/home";
    var route = hash.replace("#", "") || "/";
    updateNavFocus(hash);
    updatePageContent(route);
  }

  function loadquickFoods(search) {
    quickFoodsSection.classList.add("loaded");
    quickFoodsSection.textContent = "";
    var imageContainer = document.createElement("div");
    imageContainer.style.minWidth = "204px";
    imageContainer.style.height = "320px";
    imageContainer.style.marginLeft = "16px";
    var img = document.createElement("img");
    img.src = "images/home/quick-foods-banner.png";
    img.width = 204;
    img.height = 320;
    imageContainer.appendChild(img);
    quickFoodsSection.appendChild(imageContainer);

    for (var i = 0; i < quickfoods.length; i++) {
      var recipe = quickfoods[i];
      var article = document.createElement("article");
      article.className = "selectable";
      article.style.backgroundImage = `url(${recipe.img})`;
      var recipeInfoContainer = document.createElement("div");
      recipeInfoContainer.className = "recipe-info";
      var recipeTitle = document.createElement("p");
      var recipeTime = document.createElement("span");
      recipeTitle.textContent = recipe.title;
      recipeTime.innerHTML = `<i class='ic-cook-time-linear'></i> <span>${recipe.cookingTime} دقیقه</span>`;
      if (recipe.isPremium) article.classList.add("premium");
      recipeInfoContainer.appendChild(recipeTitle);
      recipeInfoContainer.appendChild(recipeTime);
      article.appendChild(recipeInfoContainer);
      quickFoodsSection.appendChild(article);
    }
  }

  function loadSuggestions(search) {
    suggestionsSection.classList.add("loaded");
    var suggestionsCardsContainer =
      suggestionsSection.getElementsByClassName("suggestions-cards")[0];
    suggestionsCardsContainer.textContent = "";

    for (var i = 0; i < foodSuggestions.length; i++) {
      var recipe = foodSuggestions[i];
      var article = document.createElement("article");
      article.className = "selectable";
      article.style.backgroundImage = `url(${recipe.img})`;
      var recipeInfoContainer = document.createElement("div");
      recipeInfoContainer.className = "recipe-info";
      var recipeTitle = document.createElement("p");
      var recipeTime = document.createElement("span");
      recipeTitle.textContent = recipe.title;
      recipeTime.innerHTML = `<i class='ic-cook-time-linear'></i> ${recipe.cookingTime} دقیقه`;
      if (recipe.isPremium) article.classList.add("premium");
      recipeInfoContainer.appendChild(recipeTitle);
      recipeInfoContainer.appendChild(recipeTime);
      article.appendChild(recipeInfoContainer);
      suggestionsCardsContainer.appendChild(article);
    }
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

  function updatePageContent(route) {
    var pages = Array.from(document.querySelectorAll(".page-element"));
    pages.forEach(toggleVisibility);

    function toggleVisibility(page) {
      if (page.id === route) {
        page.hidden = false;
        page.style.display = "";
      } else {
        page.hidden = true;
        page.style.display = "none";
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
  loadquickFoods("filter=tg-fast&srt=srt-random&page=1&limit=5");
  loadSuggestions("srt=srt-variety&limit=13");

  // Api calls
})();
