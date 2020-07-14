class BankAccount {
    constructor() {
        this.id = Math.floor(Math.random() * 100)
        this.balance = 0
        this.statement = []
    }
    deposit(money) {
        let transaction = new Transaction()
        transaction.addCredit(money)
        this.statement.push(transaction.history)
    }
    withdraw(money) {
        let transaction = new Transaction()
        transaction.addDebit(money)
        this.statement.push(transaction.history)
    }
}