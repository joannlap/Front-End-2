let revealId = document.querySelector(".fillimage");

window.addEventListener('load', () => {
  setTimeout(() => {
    revealId.classList.add('is-loaded');
  }, 2000);
});

console.log(revealId);