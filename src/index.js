import "./main.css";
import sliderInit from "./slider";
import { ingSubmit, ingDelete } from "./pantryInput";
import { recipesRender, recipeSearch } from "./recipeSearch";
import { displayRecipe } from "./displayRecipe";
import { state } from "./model";

const pantryIngs = document.querySelector(".pantry-ingredients");
const submitBtn = document.querySelector(".submit-form");
const searchSection = document.querySelector(".search-section");
const resultsSection = document.querySelector(".search-results-section");
const recipeSection = document.querySelector(".recipe-section");

pantryIngs.addEventListener("click", ingDelete);

// make ctrl+enter submit the form
let keysPressed = {};
document.addEventListener("keydown", (event) => {
  keysPressed[event.key] = true;

  if (keysPressed["Control"] && event.key == "Enter") {
    recipeSearch();
  }
});

document.addEventListener("keyup", (event) => {
  delete keysPressed[event.key];
});

submitBtn.addEventListener("click", recipeSearch);

// remove hash on refresh
history.replaceState(null, null, " ");

window.addEventListener("hashchange", displayRecipe);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && state.recipeOpen === true) {
    console.log("go back to search");
    state.recipeOpen = false;
    searchSection.classList.remove("hidden");
    resultsSection.classList.remove("hidden");
    recipeSection.innerHTML = "";
    recipesRender();
  }
});

const init = function () {
  sliderInit();
  ingSubmit();
};

init();
