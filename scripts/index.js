let revealId = document.querySelector(".fillimage");

window.addEventListener('load', () => {
  setTimeout(() => {
    revealId.classList.add('is-loaded');
  }, 2000);
});

console.log(revealId);

/* MDN contributors, April 2020. Window: load event. Retrieved on 17 June 2020
https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event */

/* Alligator. Adding, Removing & Toggling Classes With classList in JavaScript. 
Retrieved on 18 June 2020
https://alligator.io/js/classlist/ */

/* MDN contributors, August 2019. Blur(). Retrieved on 18 June 2020
 https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur */