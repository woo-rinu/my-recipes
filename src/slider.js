import { state } from "./model";

const sliderInput = document.querySelector(".slidervalue");
const slider = document.querySelector(".slider");

const sliderInit = function () {
  sliderInput.value = slider.value;

  slider.addEventListener("input", function () {
    sliderInput.value = slider.value;
    state.missingIngNum = slider.value;
    console.log(state);
  });
};

export default sliderInit;

// THE SAME THING BUT WITH ES6 CLASSES BUT USING ES6 CLASSES IS KINDA USELESS HERE NGL

// class Slider {
//   _sliderInput = document.querySelector(".slidervalue");
//   _slider = document.querySelector(".slider");

//   sliderValueUpdate() {
//     this._sliderInput.value = this._slider.value;
//     console.log("slider value update");
//   }

//   sliderHandler() {
//     this._slider.addEventListener("input", this.sliderValueUpdate.bind(this));
//     console.log("sliderInit");
//   }
// }

// export default new Slider();
