const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // retornar um objeto com o nome de cada animal como chave, e seu valor é a quantidade que tem daquele animal.
  if (!animal) {
    return species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
  }
  // Se informado a especie do animal retorna a quantidade, se também informado o sexo, retorna a quantidade.
  const animalSpecies = species.find((spec) => spec.name === animal.specie);
  if (animal.sex) {
    const animalsSex = animalSpecies.residents.filter((spec) => spec.sex === animal.sex);
    return animalsSex.length;
  }
  return animalSpecies.residents.length;
}

module.exports = countAnimals;
