// Write your solution in this file!
const employee = {
  name : "Sam",
  streetAddress: "11 Broadway",
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = {...employee};
    newemployee[key] = value;
    return newemployee;
  }

  beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function deleteFromEmployeeByKey(employee, name) {
    const employeecopy = {...employee}
  delete employeecopy[name];
  return employeecopy;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
  }


