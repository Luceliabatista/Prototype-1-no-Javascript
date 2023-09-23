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
    tax = 0;

    if (this.bankNumber !== anotherAccount.bankNumber) {
        tax = 0.05;
    }

    const amountToDebit = amount + (amount * tax);


    if (!anotherAccount) {
        throw ("Conta destino não localizada")
    } else {
        if (this.balance < amountToDebit) {
            throw (`Saldo insuficiente para esta operação`)
        } else {
            if (this.bankNumber != anotherAccount.bankNumber) {
                this.balance -= amountToDebit
                anotherAccount.balance += amount
            } else {
                this.balance -= amount
                anotherAccount.balance += amount
            }
            anotherAccount.credit(amount)
            console.log(`Tranferência realizada! Saldo atual: ${this.balance}`)
        }
    }
}

Account.prototype.listCount = function listCount() {
    console.log(`Conta atual: ${this.bankNumber}, ${this.numberAccount}, ${this.agencyNumber}, ${this.balance}`)
}


Account.prototype.closeAccount = function closeAccount(numberAccount) {
    if (!numberAccount) {
        console.log("Conta não informada!")
    } else {
        if (this.balance !== 0) {
            console.log("Saldo ainda se encontra positivo. Favor realizar retirada do valor para que a conta possa ser desativada.")
        } else {
            this.bankNumber = undefined;
            this.numberAccount = undefined;
            this.agencyNumber = undefined;
            this.balance = undefined;

            console.log(`Conta encerrada!   ${this.agencyNumber}`)
        }
    }
}

function Account(bankNumber, numberAccount, agencyNumber, balance) {
    this.bankNumber = bankNumber;
    this.numberAccount = numberAccount;
    this.agencyNumber = agencyNumber;
    this.balance = balance;
}

module.exports = { Account }