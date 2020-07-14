describe('Transaction', () => {
    it('stores a transaction', () => {
        let account = new BankAccount
        let transaction = new Transaction(1000)
        expect(account.balance).toEqual(1000)
    });
});