const locationContainer = document.querySelector(".location-container");
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
locationList.forEach((location) => {
  let listItem = document.createElement('li');
  listItem.setAttribute('id', location)
  listItem.textContent = location
  listItem.classList.add('filterOption');
  locationContainer.appendChild(listItem);
});

// this function will get the exact value of the element
// https://stackoverflow.com/questions/5116929/get-clicked-li-from-ul-onclick. Retrieved on 28 June 2020
const getEventTarget = (e) => {
  e = e || window.event;
  return e.target || e.srcElement;
};

// if the text content of cardLocation isn't equal to the input of the user
// then a class is added that removes the remaining locations that won't be displayed
const checkLocation = (target) => {
  let index = 0;
  allLocations.forEach((cardLocation) => {
    if (cardLocation.innerHTML !== target.innerText) {
      allCards[index].classList.add('remove');
      console.log(allCards[index])
      console.log(index)
    }
    index++;
  });
};
// adds a click function and removes the class and sents getEventTarget
// to the checklocation function
locationContainer.onclick = (event) => {
  allCards.forEach((card) => {
    card.classList.remove('remove');
  })
  // 
  let target = getEventTarget(event);
  checkLocation(target);
};


/***********
 RESOURCES
 ***********/

// https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types. Retrieved on 19 June 2020
// https://dmitripavlutin.com/foreach-iterate-array-javascript/. Retrieved on 24 June 2020
// https://www.w3schools.com/howto/howto_js_filter_elements.asp. Retrieved on 24 June 2020
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach. Retrieved on 26 June 2020
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild. Retrieved on 26 June 2020
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from. Retrieved on 27 June 2020
// https://codeburst.io/javascript-increment-and-decrement-8c223858d5ed. Retrieved on 27 June 2020