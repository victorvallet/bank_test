describe('Transaction', () => {
    it('stores a transaction', () => {
        let account = new BankAccount
        account.deposit(1000)
        account.withdraw(200)
        expect(account.statement).toContain({ debit: 0, credit: 1000 })
        expect(account.statement).toContain({ debit: 200, credit: 0 })
    });
});