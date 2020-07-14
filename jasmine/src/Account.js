class BankAccount {
    constructor() {
        this.id = Math.floor(Math.random() * 100)
        this.balance = 0
        this.statement = []
    }
    deposit(money) {
        this.balance += money
        let transaction = new Transaction()
        transaction.addCredit(money, this.balance)
        this.statement.push(transaction.history)
    }
    withdraw(money) {
        this.balance -= money
        let transaction = new Transaction()
        transaction.addDebit(money, this.balance)
        this.statement.push(transaction.history)
    }

    printStatement() {
        var rows = ['credit || debit || balance'];
        this.statement.forEach((transaction) => {
            rows.push(`${transaction.credit} || ${transaction.debit} || ${transaction.balance}`)
        });

        rows.forEach((row) => {
            return row
        })
    }
}