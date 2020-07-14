describe('Bank account', () => {
    var account;
    beforeEach(() => {
        account = new BankAccount
    })
    it('has a defined and non null ID number', () => {
        expect(account.id).toBeDefined();
        expect(account.id).not.toBeNull();
    });
    it('has an initial balance of £0', () => {
        expect(account.balance).toBeDefined();
        expect(account.balance).toEqual(0)
    });
    it('has an initial empty statement', () => {
        expect(account.statement.length).toEqual(0)
    })
});