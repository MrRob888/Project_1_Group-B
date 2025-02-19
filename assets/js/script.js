var x = document.getElementById("drinkarea");
var y = document.getElementById("top");
x.style.display = "none";
y.style.display = "block";
// linking both buttons //
var feelingLucky = document.getElementById("feelingLucky")
var cheers = document.getElementById("cheers")
// linking input bar //
var userSearch = document.getElementById("userSearch")
var searchHistory = [];
var drinkList = document.getElementById("drink-list")

// click event for random button //
feelingLucky.addEventListener('click', function randomDrink() {
  // api has there own random query url so just using that here //
  var RandomApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  fetch(RandomApiUrl).then(function (response) {
    return response.json();
  })
    .then(function (data) {
      // appending h2 and p elements with ingredients, instructions and drink name using vanilla js //
      // some drinks can have up to 10 ingredients, even if they have less it doesnt throw an error and page looks the same either way //
      // considering using jquery and create element and append instead? //
      document.getElementById("randomName").innerText = data.drinks[0].strDrink
      document.getElementById("ingredients1").innerText = data.drinks[0].strIngredient1
      document.getElementById("ingredients2").innerText = data.drinks[0].strIngredient2
      document.getElementById("ingredients3").innerText = data.drinks[0].strIngredient3
      document.getElementById("ingredients4").innerText = data.drinks[0].strIngredient4
      document.getElementById("ingredients5").innerText = data.drinks[0].strIngredient5
      document.getElementById("ingredients6").innerText = data.drinks[0].strIngredient6
      document.getElementById("ingredients7").innerText = data.drinks[0].strIngredient7
      document.getElementById("ingredients8").innerText = data.drinks[0].strIngredient8
      document.getElementById("ingredients9").innerText = data.drinks[0].strIngredient9
      document.getElementById("ingredients10").innerText = data.drinks[0].strIngredient10
      document.getElementById("glassType").innerText = data.drinks[0].strGlass + " recommended"
      document.getElementById("instructions").innerText = data.drinks[0].strInstructions
      // Drink object for reference //
      console.log(data.drinks[0]);
    })
    x.style.display = "block"; 
    y.style.display = "none";
 
})

// click event for name search //
cheers.addEventListener('click', function chosenDrink() {
  
  var searchValue = userSearch.value.trim();
  searchHistory.push(searchValue);
  var chosenApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchValue
  fetch(chosenApi).then(function (response) {
    return response.json();
  })
  .then(function (data) {

      // create a random value to pick a randokm version of the drink selected //
    var rand = Math.floor(Math.random() * data.drinks.length);

    document.getElementById("randomName").innerText = data.drinks[rand].strDrink
      document.getElementById("ingredients1").innerText = data.drinks[rand].strIngredient1
      document.getElementById("ingredients2").innerText = data.drinks[rand].strIngredient2
      document.getElementById("ingredients3").innerText = data.drinks[rand].strIngredient3
      document.getElementById("ingredients4").innerText = data.drinks[rand].strIngredient4
      document.getElementById("ingredients5").innerText = data.drinks[rand].strIngredient5
      document.getElementById("ingredients6").innerText = data.drinks[rand].strIngredient6
      document.getElementById("ingredients7").innerText = data.drinks[rand].strIngredient7
      document.getElementById("ingredients8").innerText = data.drinks[rand].strIngredient8
      document.getElementById("ingredients9").innerText = data.drinks[rand].strIngredient9
      document.getElementById("ingredients10").innerText = data.drinks[rand].strIngredient10
      document.getElementById("ingredients11").innerText = data.drinks[rand].strIngredient11
      document.getElementById("ingredients12").innerText = data.drinks[rand].strIngredient12
      document.getElementById("ingredients13").innerText = data.drinks[rand].strIngredient13
      document.getElementById("ingredients14").innerText = data.drinks[rand].strIngredient14
      document.getElementById("ingredients15").innerText = data.drinks[rand].strIngredient15
      document.getElementById("glassType").innerText = data.drinks[rand].strGlass + " recommended"
      document.getElementById("instructions").innerText = data.drinks[rand].strInstructions
    console.log(data.drinks[0]);

  })
    x.style.display = "block"; 
    y.style.display = "none";
    setDrinks();
    renderDrinks();

 }) 

 function renderDrinks() {
  $(drinkList).html("");

  for (var i = 0; i < searchHistory.length; i++) {
      var drinkName = searchHistory[i];

      var li = document.createElement("p");
      $(li).html("<span>" + drinkName + "</span>");
      $(li).attr("data-index", i);

      $(drinkList).append(li);
  }
}
 
 function setDrinks() {
  localStorage.setItem("drinkNames", JSON.stringify(searchHistory));
}


 // bouncing back button in the corner after searching //
 function showTop() {
  x.style.display = "none";
    y.style.display = "block";
 }

 function init() {
  var storedDrink = JSON.parse(localStorage.getItem("drinkNames"));

  if (storedDrink !== null) {
    searchHistory = storedDrink;
  }
  renderDrinks();
 }
 init();