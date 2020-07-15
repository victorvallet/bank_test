class BankAccount {
    constructor() {
        this.id = Math.floor(Math.random() * 100)
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
        this.statement.push(transaction.history)
    }
    withdraw(money) {
        if (this.balance < money) {
            throw new TypeError("Not enough funds, please top up your account!")
        }
        this.balance -= money
        let transaction = new Transaction()
        transaction.addDebit(money, this.balance)
        this.statement.push(transaction.history)
    }

    printStatement() {
        var rows = ['date || credit || debit || balance'];
        this.statement.forEach((transaction) => {
            rows.push(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`)
        });

        return rows.forEach((row) => {
            console.log(row)
        })
    }
}