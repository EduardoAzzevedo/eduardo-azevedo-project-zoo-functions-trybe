const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animalName, animalAge) {
  // localizar o nome da espécie.
  // Filter verifica dentro de species se existe algum nome de animal(lions) igual ao passado em seu parâmetro.
  const filterAnimals = species.filter((specie) => specie.name === animalName);
  // localiza residente.
  // Map retorna um array sem modificar o original, no caso, retorna a especie em 'filterAnimals'que foi localizado na função anterior.
  const mapResidents = filterAnimals.map((resident) => resident.residents);
  // depois que localizar as informações, every retorna todos os animais da espécie informados tem a idade minima passado como parâmetro, retorna boolean.
  return mapResidents.every((specie, index) => specie[index].age > animalAge);
}
module.exports = getAnimalsOlderThan;
