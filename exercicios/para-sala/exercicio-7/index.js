const { Account } = require('./resolucao');

luaraAccount = new Account(1, 123, 0001, 10000);
luaraAccount.credit(2000);
luaraAccount.debit(500);

outraconta = new Account(2, 456, 0001, 100);
luaraAccount.transferTo(outraconta, 1000);

maisUmaConta = new Account(2, 459, 0001, 0);
maisUmaConta.closeAccount(456);
console.log(maisUmaConta);
