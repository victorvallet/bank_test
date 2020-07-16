class Transaction {
    constructor() {

        this.history = { date: this.formatDate(), credit: 0, debit: 0, balance: 0 }

    }

    addDebit(money, balance) {
        this.history.debit = money
        this.history.balance = balance
    }
    addCredit(money, balance) {
        this.history.credit = money
        this.history.balance = balance
    }
    formatDate() {
        return new Date().toLocaleDateString()
    }
}