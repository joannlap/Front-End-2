const selectedAge = document.querySelector(".selected-age")
const selectedLocation = document.querySelector(".selected")
const locationContainer = document.querySelector(".location-container")
const sliderContainer = document.querySelector(".slider-container");
const locationList = document.querySelectorAll(".location")
const age = document.querySelector("#age")
const output = document.querySelector(".age-output")
output.textContent = age.value;

selectedAge.addEventListener('click', () => {
  sliderContainer.classList.toggle("active")
});

selectedLocation.addEventListener('click', () => {
  locationContainer.classList.toggle("active")
})


locationList.forEach(showLocation => {
  showLocation.addEventListener('click', () => {
    selectedLocation.innerHTML = showLocation.querySelector('label').innerHTML;
  })
});

age.addEventListener('input', function () {
  output.textContent = age.value;
})



// https: //developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types