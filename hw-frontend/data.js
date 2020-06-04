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

// haalt alleen de species uit de array
const animalSpecies = animals.map(getSpecie => getSpecie.species);
console.log(animalSpecies)

// filtert alle honden uit de array
const onlyDog = animals.filter(animalSpecie => animalSpecie.species === 'dog')
console.log(onlyDog)

// haalt het totale aantal per soort uit de array
// prints 4 dogs, 2 pigs and 2 fishes
const totalSpecies = animals.reduce(function (name, animal) {
  return name + animal
})
console.log(totalSpecies)