const animals = [{
    name: 'Hansie',
    species: 'dog',
    cost: 45
  },
  {
    name: 'Joopie',
    species: 'dog',
    cost: 22
  },
  {
    name: 'Beppy',
    species: 'fish',
    cost: 10
  },
  {
    name: 'Sem',
    species: 'fish',
    cost: 10
  },
  {
    name: 'Lolita',
    species: 'dog',
    cost: 60
  },
  {
    name: 'Fluffybeans',
    species: 'pig',
    cost: 20
  },
  {
    name: 'BearFluf',
    species: 'pig',
    cost: 15
  },
  {
    name: 'Manke Neel',
    species: 'dog',
    cost: 1
  }
];

// haalt alleen de namen uit de array
const animalName = animals.map(getName => getName.name);
console.log(animalName)

// filtert alle honden uit de array
const onlyDog = animals.filter(animalSpecie => animalSpecie.species === 'dog')
console.log(onlyDog)

// haalt de duurste hond uit de array
const mostExpAnimal = animals.reduce(function (expensive, animal) {
  return (expensive.cost || 0) > animal.cost ? expensive : animal;
}, {});
console.log(mostExpAnimal)