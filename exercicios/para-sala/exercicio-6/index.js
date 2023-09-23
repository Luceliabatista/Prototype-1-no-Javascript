const { Account } = require('./resolucao');

console.log(luaraAccount = Account(123, 0001, 1000));
console.log(luaraAccount.credit(2000));
console.log(luaraAccount.debit(500));
console.log(outraconta = Account(456, 0001, 100));
console.log(luaraAccount.transferTo(outraconta, 1000));
