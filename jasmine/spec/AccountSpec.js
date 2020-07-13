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
    })

    describe('Deposit function', () => {
        it('Increase the balance by the added amount of £', () => {
            account.deposit(100)
            expect(account.balance).toEqual(100)
        })
    });
});