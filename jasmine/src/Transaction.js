class Transaction {
    constructor() {

        this.summary = { date: this.formatDate(), credit: 0, debit: 0, balance: 0 }

    }

    addDebit(money, balance) {
        this.summary.debit = money
        this.summary.balance = balance
    }
    addCredit(money, balance) {
        this.summary.credit = money
        this.summary.balance = balance
    }
    formatDate() {
        return new Date().toLocaleDateString()
    }
}