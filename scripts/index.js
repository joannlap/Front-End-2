let revealId = document.querySelector(".fillimage");
const button = document.getElementsByTagName("a");
console.log(revealId);

window.addEventListener('load', function () {
  setTimeout(() => {
    revealId.classList.add('is-loaded');
  }, 3000);
});

console.log(revealId);