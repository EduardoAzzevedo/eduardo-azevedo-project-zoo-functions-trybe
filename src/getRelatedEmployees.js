const data = require('../data/zoo_data');

function isManager(id) {
  // uso de destructuring para acessar apenas employees.
  const { employees } = data;
  // Retorna boolean, se tem algum emp com "some", e dentro de emp se tem o elemento com "includes"
  const isIdManager = employees.some((emp) => emp.managers.includes(id));
  return isIdManager;
}

function getRelatedEmployees(managerId) {
  // Callback da função anterior e usa o mesmo parâmetro  da função atual para verificar se é gerente para retornar o erro.
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // uso de destructuring para acessar apenas employees.
  const { employees } = data;
  // Filtra para achar o gerente com o id.
  const filterEmplyees = employees.filter((ger) => ger.managers.includes(managerId));
  // Uso de "map" na função anterior para gerar um array com o nome e sobre nome.
  const mapEmployees = filterEmplyees.map((emp) => `${emp.firstName} ${emp.lastName}`);
  return mapEmployees;
}

module.exports = { isManager, getRelatedEmployees };
