describe('Transaction', () => {
    var account;
    beforeEach(() => {
        account = new BankAccount
    })

    describe('#formatDate', () => {
        it("should return today's date in the appropriate format", () => {
            account.deposit(300, transaction = new Transaction);
            expect(transaction.formatDate()).toEqual('17/07/2020')
        });
    });

    describe('#addCredit', () => {
        it('adds some credit if the customer makes a deposit', () => {
            account.deposit(100, transaction = new Transaction);
            expect(transaction.summary.credit).toEqual(100);
            expect(transaction.summary.balance).toEqual(account.checkBalance())
        });
    });

    describe('#addDebit', () => {
        it('adds some debit if the customer withdraw some money', () => {
            account.deposit(220, transaction_1 = new Transaction)
            account.withdraw(200, transaction_2 = new Transaction);
            expect(transaction_1.summary).not.toEqual(transaction_2.summary)
            expect(transaction_2.summary.debit).toEqual(200);
            expect(transaction_2.summary.balance).toEqual(account.checkBalance())
        });
    });


});