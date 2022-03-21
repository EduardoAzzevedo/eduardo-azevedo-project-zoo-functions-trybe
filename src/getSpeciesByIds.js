const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((animal) => ids.find((findAnimal) => findAnimal === animal.id));
}
// rest como parâmetro permiter usar n parâmetros na função.
// a função vai verificar buscando em species pelo parametro informado se existe um id identico ao parâmetro e retornalo.
module.exports = getSpeciesByIds;
