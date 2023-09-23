Account.prototype.credit = function credit(amount) {
    this.balance += amount
    console.log(`Novo saldo após crédito: ${this.balance}`)
}

Account.prototype.debit = function debit(amount) {
    if (this.balance >= amount) {
        this.balance -= amount
        console.log(`Novo saldo após débito: ${this.balance}`)
    }
}

Account.prototype.transferTo = function transferTo(anotherAccount, amount) {
    if (!anotherAccount) {
        "Conta destino não localizada"
    } else {
        if (this.balance >= amount) {
            this.balance.debit(amount)
            anotherAccount.credit(amount)
            console.log(`Tranferência realizada! Saldo atual: ${this.balance}`)
        } else {
            throw (`Saldo insuficiente para esta operação`)
        }
    }
}

Account.prototype.listCount = function listCount() {
    console.log(`Conta atual: ${this.numberAccount}, ${this.agencyNumber}, ${this.balance}`)
}

function Account(numberAccount, agencyNumber, balance) {
    let account = Object.create(Account.prototype)

    account.numberAccount = numberAccount;
    account.agencyNumber = agencyNumber;
    account.balance = balance;

    return account;
}

module.exports = { Account }