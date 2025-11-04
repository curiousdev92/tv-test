(function () {
  // var homePageElement = document.getElementById("home");
  // var cookingAssistantPageElement = document.getElementById("cooking-assistant");
  // var profilePageElement = document.getElementById("profile");
  var quickFoodsSection = document.getElementById("home-quick-foods");
  var suggestionsSection = document.getElementById("home-suggestions");

  var foodSuggestions = [
    {
      title: "آش دوغ قزوین",
      img: "images/food-suggestions/aash_doogh_qazvin_t_hese_tazegi.jpg",
    },
    {
      title: "چیزکیک توت‌فرنگی",
      img: "images/food-suggestions/strawberry_cheesecake_t_hese_tazegi.jpg",
    },
    {
      title: "آش سبزی شیرازی",
      img: "images/food-suggestions/aash_e_sabzi_shiraz_t_hese_tazegi.jpg",
    },
    {
      title: "قطایف",
      img: "images/food-suggestions/qatayef_t_hese_tazegi.jpg",
    },
    {
      title: "خورش بِه اصفهان",
      img: "images/food-suggestions/quince_stew_isfahan_t_hese_tazegi.jpg",
    },
    {
      title: "آش ترش مازندران",
      img: "images/food-suggestions/tershe_aash_mazandaran_t_hese_tazegi.jpg",
    },
    {
      title: "گراتن بادمجان و مرغ",
      img: "images/food-suggestions/aubergine_and_chicken_gratin_t_hese_tazegi.jpg",
    },
    {
      title: "ماهی قزل آلا با زعفران",
      img: "images/food-suggestions/trout_with_saffron_t_hese_tazegi.jpg",
    },
    {
      title: "قیمه بوشهری",
      img: "images/food-suggestions/bushehri_gheimeh_t_hese_tazegi.jpg",
    },
    {
      title: "سالاد شاورما",
      img: "images/food-suggestions/shawarma_salad_t_hese_tazegi.jpg",
    },
    {
      title: "سالاد پاییزی",
      img: "images/food-suggestions/autumn_salad_t_hese_tazegi.jpg",
    },
    {
      title: "خورش ساق",
      img: "images/food-suggestions/saagh_t_hese_tazegi.jpg",
    },
    {
      title: "کرپ سوخاری با مرغ ",
      img: "images/food-suggestions/chicken_and_mushroom_fried_crepe_t_hese_tazegi.jpg",
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
      recipeTime.textContent = `${recipe.cookingTime} دقیقه`;
      if (recipe.isPremium) article.classList.add("premium");
      recipeInfoContainer.appendChild(recipeTitle);
      recipeInfoContainer.appendChild(recipeTime);
      article.appendChild(recipeInfoContainer);
      quickFoodsSection.appendChild(article);
    }
    // getJSON(
    //   `https://apis8.hesetazegi.com/api/Recipe/list/${locale}?${search}`,
    //   function (data) {
    //     if (data.statusCode === 200 && data && data.data && data.data.records) {
    //       quickFoodsSection.classList.add("loaded");
    //       quickFoodsSection.textContent = "";
    //       var img = document.createElement("img");
    //       img.src = "images/home/quick-foods-banner.png";
    //       img.width = 204.32;
    //       img.height = 320;
    //       quickFoodsSection.appendChild(img);

    //       var recipes = data.data.records;
    //       for (var i = 0; i < recipes.length; i++) {
    //         var recipe = recipes[i];
    //         var article = document.createElement("article");
    //         article.style.backgroundImage = `url(${recipe.image.src})`;

    //         // var p = document.createElement("p");
    //         // p.textContent = recipe.title;
    //         if (recipe.isPremium) article.classList.add("premium");
    //         // article.appendChild(img);
    //         // article.appendChild(p);
    //         quickFoodsSection.appendChild(article);
    //       }
    //     }
    //   },
    //   function (err) {
    //     console.log("Failed to load recipes:", err);
    //   }
    // );
  }

  function loadSuggestions(search) {
    // getJSON(
    //   `https://apis8.hesetazegi.com/api/Recipe/list/${locale}?${search}`,
    //   function (data) {
    //     if (data.statusCode === 200 && data && data.data && data.data.records) {
    //       suggestionsSection.classList.add("loaded");
    //       var suggestionsCardsContainer =
    //         suggestionsSection.getElementsByClassName("suggestions-cards")[0];
    //       suggestionsCardsContainer.textContent = "";
    //       var recipes = data.data.records;
    //       for (var i = 0; i < recipes.length; i++) {
    //         var recipe = recipes[i];
    //         var article = document.createElement("article");
    //         article.style.backgroundImage = `url(${recipe.image.src})`;
    //         if (recipe.isPremium) article.classList.add("premium");
    //         suggestionsCardsContainer.appendChild(article);
    //       }
    //     }
    //   },
    //   function (err) {
    //     console.log("Failed to load recipes:", err);
    //   }
    // );
    suggestionsSection.classList.add("loaded");
    var suggestionsCardsContainer =
      suggestionsSection.getElementsByClassName("suggestions-cards")[0];
    suggestionsCardsContainer.textContent = "";

    for (var i = 0; i < foodSuggestions.length; i++) {
      var recipe = foodSuggestions[i];
      var article = document.createElement("article");
      article.className = "selectable";
      article.style.backgroundImage = `url(${recipe.img})`;
      if (recipe.isPremium) article.classList.add("premium");
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
