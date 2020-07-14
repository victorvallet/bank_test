class Transaction {
    constructor() {

        this.history = { debit: 0, credit: 0, balance: 0, date: new Date().toJSON().slice(0, 10).replace(/-/g, '/') }

    }

    addDebit(money, balance) {
        this.history.debit += money
        this.history.balance = balance
    }
    addCredit(money, balance) {
        this.history.credit += money
        this.history.balance = balance
    }
}