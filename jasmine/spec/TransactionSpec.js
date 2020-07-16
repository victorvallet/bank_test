describe('Transaction', () => {

    it('generates a summary of the transaction that includes debit, credit, balance and date', () => {
        let transaction = new Transaction
        expect(transaction.summary.debit).toBeDefined()
        expect(transaction.summary.credit).toBeDefined()
        expect(transaction.summary.balance).toBeDefined()
        expect(transaction.summary.date).toBeDefined()
    })
});