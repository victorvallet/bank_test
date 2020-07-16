class BankAccount {
    constructor() {
        this.balance = 0
        this.statement = []
    }
    deposit(money) {
        if (money < 20) {
            throw new TypeError("Sorry, the minimum amount to make a deposit is £20")
        }
        this.balance += money
        let transaction = new Transaction()
        transaction.addCredit(money, this.balance)
        this.statement.push(`${transaction.history.date} || ${transaction.history.credit.toFixed(2)} || || ${transaction.history.balance.toFixed(2)}`)
    }
    withdraw(money) {
        if (this.balance < money) {
            throw new TypeError("Not enough funds, please top up your account!")
        }
        this.balance -= money
        let transaction = new Transaction()
        transaction.addDebit(money, this.balance)
        this.statement.push(`${transaction.history.date} || || ${transaction.history.debit.toFixed(2)} || ${transaction.history.balance.toFixed(2)}`)
    }

    printStatement() {
        let result = "date || credit || debit || balance"
        this.statement.forEach(transaction => result += "\n" + transaction);

        return result
    }
}