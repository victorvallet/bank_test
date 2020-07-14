describe('Transaction', () => {

    it('generates a summary of the transaction that includes debit, credit, balance and date', () => {
        let transaction = new Transaction
        expect(transaction.history.debit).toBeDefined()
        expect(transaction.history.credit).toBeDefined()
        expect(transaction.history.balance).toBeDefined()
        expect(transaction.history.date).toBeDefined()
    })
});