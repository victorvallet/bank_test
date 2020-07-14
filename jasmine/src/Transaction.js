class Transaction {
    constructor() {

        this.history = { debit: 0, credit: 0 }

    }

    addDebit(money) {
        this.history.debit += money
    }
    addCredit(money) {
        this.history.credit += money
    }
}