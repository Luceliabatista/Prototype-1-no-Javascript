function GenerateId() {
    const crypto = require('crypto');
    const id = crypto.randomUUID();

    return id
}

function raiseSalary(percent) {
    this.salary += (this.salary * percent)
    console.log(`Neste ano ele teve seu salário alterado para ${this.salary}`)
    return this.salary
}


function Employee(firstName, lastName, salary) {
    let employee = {}

    employee.id = GenerateId()
    employee.firstName = firstName
    employee.lastName = lastName
    employee.salary = salary

    employee.raiseSalary = raiseSalary  //Aqui a função de aumento de salario só está sendo apontada, para que sua execução ocorra apenas quando realmente for necessária. Diferente do ID, que é obrigatório para que cada empregado seja identificado assim que for criado.

    return employee
}

module.exports = { Employee }