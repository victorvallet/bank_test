class BankAccount {
    constructor() {
        this.id = Math.floor(Math.random() * 100)
        this.balance = 0
    }
    deposit(money) {
        this.balance += money;
    }
}