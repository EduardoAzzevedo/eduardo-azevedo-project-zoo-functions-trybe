const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ageOfPeople = entrants.map((entrant) => entrant.age);
  // retorna a quantidade de pessoas filtrando ages, que se enquadrem na comapração acessando as chaves e atribuindo às cahves.
  return entrants.reduce((accumulator, currentValue) => {
    accumulator.child = ageOfPeople.filter((age) => age < 18).length;
    accumulator.adult = ageOfPeople.filter((age) => age >= 18 && age < 50).length;
    accumulator.senior = ageOfPeople.filter((age) => age >= 50).length;
    // retorna o objeto com as chaves e seus valores.
    return accumulator;
  }, {});
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  // vonst para receber e trabalhar com o resultado da função countEntrants.
  const everyEntrants = countEntrants(entrants);
  // desconstroi a função para acessar cada chave e calcular o valor
  const { child, adult, senior } = everyEntrants;
  // preço total te pessoas.
  return (child * 20.99) + (adult * 49.99) + (senior * 24.99);
}
module.exports = { calculateEntry, countEntrants };
