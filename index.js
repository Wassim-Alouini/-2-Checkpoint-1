const pets = [
  { name: `Max`, type: `dog`, bornOn: 2018 },
  { name: `Angel`, type: `cat`, bornOn: 2015 },
  { name: `Jasper`, type: `dog`, bornOn: 2016 }
];

const getAge = pet => {
  return new Date().getFullYear() - pet.bornOn;
}

let petsWithAge = [];
pets.forEach((item) => {
  item.age = getAge(item)
  petsWithAge.push(item)
})
document.querySelector("#array1").outerHTML = JSON.stringify(petsWithAge);

const dogs = petsWithAge.filter((item) => {
  return item.type == `dog`
})
document.querySelector("#array2").outerHTML = JSON.stringify(dogs);

const jasper = petsWithAge.filter((item) => {
  return item.name == `Jasper`
})

document.querySelector("#jasper").outerHTML = (`Jasper is ${jasper[0].age} years old`);
