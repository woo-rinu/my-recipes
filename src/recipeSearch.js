import { state } from "./model";

const searchResults = document.querySelector(".search-results");
const searchNumber = document.querySelector(".search-number");

export const recipeSearch = async function () {
  try {
    let ingList = state.ingredients.join(",");
    console.log(ingList);
    const res = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=99db511d728249f5ad0abe33f7595916&ingredients=${ingList}&ignorePantry=true&number=50`
    );
    const data = await res.json();
    const recipes = data.filter(
      (rec) => rec.missedIngredientCount <= state.missingIngNum
    );
    state.recipes = recipes;
    console.log(state.recipes);
    recipesRender();
  } catch (err) {
    console.error(err);
  }
};

export const recipesRender = function () {
  console.log("rendering search results");
  // clear prev search results if any
  searchResults.innerHTML = "";

  // update # of search results
  searchNumber.innerHTML = `Search Results (${state.recipes.length})`;

  // render recipes
  state.recipes.forEach((rec) => {
    const html = `
    <a href="#${rec.id}" data-recipeid="${rec.id}" class="search-result">
      <img
      src="${rec.image}"
      alt="${rec.title}"
      />
      <h4>${rec.title}</h4>
      <p>Missing Ingredients: ${rec.missedIngredientCount}</p>
    </a>
    `;

    searchResults.insertAdjacentHTML("beforeend", html);
  });
};
