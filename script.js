const hybridCombustion = document.getElementById("hybridCombustion");
const petrolCombustion = document.getElementById("petrolCombustion");
const optimumCombustion = document.getElementById("optimumCombustion");
const petrolPrice = 4;

const fuel = {
    conbustion: {
        upstate:5,
        city: 8
    },
    hybrid: {
        upstate:7,
        city: 4 
    }
}

let prices = {
    conbustion:'', 
    hybrid: ''
}

let usage = {
  conbustion:'', 
  hybrid: ''
}

function calculateFuelPrice() {
  let upStateMilage = document.getElementById("upCountrySlider").value;
  let cityMilage = document.getElementById("citySlider").value;

usage.conbustion = (cityMilage/100 *fuel.conbustion.city)+(upStateMilage /100 *fuel.conbustion.upstate);
usage.hybrid = (cityMilage/100 *fuel.hybrid.city)+(upStateMilage /100 *fuel.hybrid.upstate);

prices.conbustion = 4*((cityMilage/100 *fuel.conbustion.city)+(upStateMilage /100 *fuel.conbustion.upstate));
prices.hybrid = 4*((cityMilage/100 *fuel.hybrid.city)+(upStateMilage /100 *fuel.hybrid.upstate));

console.log(prices.conbustion);
    
petrolCombustion.innerHTML = `Spalinowy spala: ${usage.conbustion.toFixed(2)}l co kosztuje:${prices.conbustion.toFixed(2)}zł`;
hybridCombustion.innerHTML = `Hybrydowy spala:${usage.hybrid.toFixed(2)}l co kosztuje:${prices.hybrid.toFixed(2)}zł`;

if (prices.hybrid<prices.conbustion){
  optimumCombustion.innerHTML = `Lepszy jest: Hybrydowy`;
} 
else {
  optimumCombustion.innerHTML = `Lepszy jest: Spalinowy`;
}
}
function init() {
  const sliders = document.getElementsByClassName("tick-slider-input");

  for (let slider of sliders) {
      slider.oninput = onSliderInput;

      updateValueOne(slider);
      updateValueTwo(slider);

  }
}

function onSliderInput(event) {
  updateValueOne(event.target);
  updateValueTwo(event.target);
  calculateFuelPrice()
}

function updateValueOne() {
  let valueOne = document.getElementById("upCountryValue");
  let upStateMilage = document.getElementById("upCountrySlider").value;
  valueOne.innerHTML = upStateMilage;
  calculateFuelPrice()
}
function updateValueTwo() {
  let valueTwo = document.getElementById("cityValue");
  let cityMilage = document.getElementById("citySlider").value;
  valueTwo.innerHTML = cityMilage;
  calculateFuelPrice()
}

window.onload = init;
