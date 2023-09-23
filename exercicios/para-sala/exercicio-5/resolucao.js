function generateId() {
    const crypto = require('crypto');
    const id = crypto.randomUUID();

    return id;
}

const employeeMethods = {
    raiseSalary: function raiseSalary(percent) {
        this.salary += (this.salary * percent);
        console.log(`O novo salário é R$ ${this.salary}`)
    },

    addBenefits: function addBenefits(benefit) {
        this.benefits.push(benefit);
        console.log(`O benefício ${benefit} foi adicionado ao funcionário.`)
    },

    removeBenefits: function removeBenefits(benefit) {
        let index = this.benefits.indexOf(benefit);

        if (index === -1) {
            console.log('Benefício inválido');
        } else {
            this.benefits = this.benefits.filter(currentBenefit => currentBenefit !== benefit);
            console.log(`O benefício ${benefit} foi removido.`);
        }
    },

    listBenefits: function listBenefits() {
        console.log(`Os benefícios desse funcionário são: ${this.benefits}`)
    }
}

function Employee(firstName, lastName, salary) {
    let employee = Object.create(employeeMethods)

    employee.id = generateId();
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.benefits = [];

    return employee;
}

module.exports = { Employee }