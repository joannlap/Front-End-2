const locationContainer = document.querySelector(".location-container")
const allLocations = Array.from(document.querySelectorAll("h3"));
const allCards = Array.from(document.querySelectorAll('.filterValue'));

const locationList = ['Toronto',
  'Vancouver',
  'Montreal',
  'Kitchener',
  'Quebec',
  'Hamilton',
  'Mississauga'
];

// loads list of location and adds and id and class to the created element
locationList.forEach(function getLocations(location) {
  let listItem = document.createElement('li');
  listItem.setAttribute('id', location)
  listItem.textContent = location
  listItem.classList.add('filterOption');
  locationContainer.appendChild(listItem);
});

// this function will get the exact value of the element
function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}
// https://stackoverflow.com/questions/5116929/get-clicked-li-from-ul-onclick. Retrieved on 28 June 2020

// adds a click function and removes the class and sents target to the checklocation function
locationContainer.onclick = function (event) {
  allCards.forEach((card) => {
    card.classList.remove('remove');
  })
  // welke locatie wordt opgehaald 
  var target = getEventTarget(event);
  checkLocation(target);
  console.log(target)
};

// als de h3 van de kaarten niet gelijk zijn aan de input van de gebruiker
// dan wordt de class toegevoegd waar de overige locaties niet te zien zijn.
function checkLocation(target) {
  let index = 0;
  allLocations.forEach((cardLocation) => {
    if (cardLocation.innerHTML !== target.innerText) {
      allCards[index].classList.add('remove');
    }
    index++;
  });
}



// https: //developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types. Retrieved on 19 June 2020
// https: //dmitripavlutin.com/foreach-iterate-array-javascript/. Retrieved on 24 June 2020
// https://www.w3schools.com/howto/howto_js_filter_elements.asp. Retrieved on 24 June 2020
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach. Retrieved on 26 June 2020