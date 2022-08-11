import { state } from "./model";

const pantryForm = document.querySelector(".pantry-form");
const pantryInput = document.querySelector(".pantry-input");
const pantryIngs = document.querySelector(".pantry-ingredients");

export const ingSubmit = function () {
  pantryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const ing = pantryInput.value;

    if (!ing) return;

    state.ingredients.push(ing);
    console.log(state.ingredients);

    const html = `
        <div class="pantry-ingredient">
          <p class="pantry-ingredient-name">${ing}</p>
          <i class="fa-solid fa-xmark"></i>
        </div>
    `;

    pantryIngs.insertAdjacentHTML("beforeend", html);

    pantryInput.value = "";
  });
};

export const ingDelete = function (e) {
  const xmark = e.target.closest(".fa-xmark");

  if (!xmark) return;

  const ingEl = xmark.closest(".pantry-ingredient");

  const ingElName = ingEl.getElementsByClassName("pantry-ingredient-name")[0]
    .outerText;

  // remove element from ingredient section (DOM)
  ingEl.remove();

  // remove ingredient from ingredients array
  state.ingredients = state.ingredients.filter((ing) => ing !== ingElName);
  console.log(state.ingredients);
};

// class PantryInput {
//   ingSubmit = function () {
//     pantryForm.addEventListener("submit", function (e) {
//       e.preventDefault();
//       const ing = pantryInput.value;

//       if (!ing) return;

//       state.ingredients.push(ing);
//       console.log(state.ingredients);

//       const html = `
//           <div class="pantry-ingredient">
//             <p>${ing}</p>
//             <i class="fa-solid fa-xmark"></i>
//           </div>
//       `;

//       pantryIngs.insertAdjacentHTML("beforeend", html);

//       pantryInput.value = "";
//     });
//   };

//   ingDelete = function (e) {
//     const ingElX = e.target.closest(".fa-xmark");

//     const ingEl = ingElX.closest(".pantry-ingredient");
//     console.log(ingEl.innerHTML);
//   };

//   pantryIngs.addEventListener('click', )
// }

// export default new PantryInput();
