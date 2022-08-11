import { state } from "./model";

const searchSection = document.querySelector(".search-section");
const resultsSection = document.querySelector(".search-results-section");
const recipeSection = document.querySelector(".recipe-section");

export const displayRecipe = async function () {
  const id = window.location.hash.slice(1);

  const res = await fetch(`
  https://api.spoonacular.com/recipes/${id}/information?apiKey=99db511d728249f5ad0abe33f7595916&includeNutrition=true
  `);
  const data = await res.json();

  console.log(data);

  state.recipeOpen = true;

  searchSection.classList.add("hidden");
  resultsSection.classList.add("hidden");

  const html = `
  <div class="recipe-section">
    <h4 class="back-to-search">< Back to Search (esc)</h4>
    <div class="recipe">
      <h2 class="recipe-title">${data.title}</h2>
      <div class="recipe-img">
        <img
          src="${data.image}"
          alt="${data.title}"
        />
      </div>
      <div class="servings-and-time">
        <div class="servings">
          <h4>Servings:</h4>
          <i class="fa-solid fa-circle-minus"></i>
          <p>${data.servings}</p>
          <i class="fa-solid fa-circle-plus"></i>
        </div>
        <div class="cooking-time">
          <p>Cooking Time: ${data.readyInMinutes} min</p>
        </div>
      </div>
      <div class="ingredients">
        <h3>Ingredients</h3>
        <div class="recipe-ingredients-list">
          ${data.extendedIngredients
            .map((ing) => {
              return `<p>${ing.amount} ${ing.unit} ${ing.name}</p>`;
            })
            .join("")}
        </div>
        <button class="add-ing-btn">Add Ingredients to Shopping List</button>
      </div>
      <div class="instructions">
        <h3>Instructions</h3>
        ${data.analyzedInstructions[0].steps
          .map((step) => {
            return `
            <div class="instruction">
              <h4>${step.number}</h4>
              <p>
                ${step.step}
              </p>
            </div>
            `;
          })
          .join("")}
      </div>
    </div>
  </div>
  `;

  recipeSection.insertAdjacentHTML("beforeend", html);
};
