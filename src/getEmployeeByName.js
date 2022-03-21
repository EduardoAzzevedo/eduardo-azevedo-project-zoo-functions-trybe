const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // negativa de parâmetro, para retornar de objeto
  if (!employeeName) return {};
  const { employees } = data;
  // tive que reduzir por que é permitido apenas 100 caracteres.
  // quando passa o primeiro nome 'E' o ultimo nome, abreviado.
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}

module.exports = getEmployeeByName;
