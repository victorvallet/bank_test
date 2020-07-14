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
    });
    it('can store multiple transactions', () => {
        account.deposit(1000)
        account.withdraw(200)
        expect(account.statement).toEqual([{ debit: 0, credit: 1000, balance: 1000 }, { debit: 200, credit: 0, balance: 800 }])
    });


    describe('#deposit', () => {
        it('increases the balance by an amount', () => {
            account.deposit(300)
            expect(account.balance).toBeGreaterThan(0)
            expect(account.balance).toEqual(300)
        });
    });

    describe('#withdraw', () => {
        it('decreases the balance by an amount', () => {
            account.withdraw(100)
            expect(account.balance).toBeLessThan(0)
            expect(account.balance).toEqual(-100)
        });
    });


});