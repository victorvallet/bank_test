describe('Transaction', () => {
    var transaction;
    var account;
    beforeEach(() => {
        account = new BankAccount
    })

    xit('generates a summary of the transaction that includes debit, credit, balance and date', () => {
        expect(transaction.summary.debit).toBeDefined();
        expect(transaction.summary.credit).toBeDefined();
        expect(transaction.summary.balance).toBeDefined();
        expect(transaction.summary.date).toBeDefined();
    })

    it('adds some credit if the customer makes a deposit', () => {
        account.deposit(100, transaction = new Transaction);
        expect(transaction.summary.credit).toEqual(100);
    });

    it('adds some debit if the customer withdraw some money', () => {
        account.withdraw(200, transaction = new Transaction);
        expect(transaction.summary.debit).toEqual(200);
    });
});