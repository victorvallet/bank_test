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
        let today = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
        account.deposit(1000)
        account.withdraw(200)
        expect(account.statement).toEqual([{ debit: 0, credit: 1000, balance: 1000, date: today }, { debit: 200, credit: 0, balance: 800, date: today }])
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
        it('should throw an error if not enought money on the account', () => {
            expect(() => {
                account.withdraw(100)
            }).toThrowError("Not enough funds, please top up your account!")
        });
    });

    describe('print statement', () => {
        it('returns a summary of past transactions', () => {
            account.deposit(1000)
            account.withdraw(200)
            expect(account.printStatement()).toMatch(`date || credit || debit || balance \n 1000 || 0 || 1000 || 2020/07/14 \n 0 || 200 || 800 || 2020/07/14`)
        });
    });


});