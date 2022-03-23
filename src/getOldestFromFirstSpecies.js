const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  // Encontra o primeiro animal gerenciado pelo id do funcionário passado.
  const employeesId = employees.find((lider) => lider.id === id).responsibleFor[0];
  // compara se o animal bate com os animais no zoo que o empregado é responsavel
  const animalSpecies = species.find((animal) => animal.id === employeesId).residents;
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  const animalAge = animalSpecies.reduce((acc, curr) => Math.max(acc, curr.age), 0);
  const olderAnimal = animalSpecies.find((animal) => animal.age === animalAge);
  return [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
