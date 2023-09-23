let employee1 = {}
employee1.id = 1
employee1.firstName = "Robson"
employee1.lastName = "Souza"
employee1.salary = 1500
employee1.raiseSalary = raiseSalary

let employee2 = {}
employee2.id = 2
employee2.firstName = "José"
employee2.lastName = "Silva"
employee2.salary = 30000
employee2.raiseSalary = raiseSalary

function raiseSalary(percent) {
    this.salary += (this.salary * percent)
    console.log(`Neste ano ele teve seu salário alterado para ${this.salary}`)
    return this.salary
}

employee1.raiseSalary(0.1)
employee2.raiseSalary(0.1)

