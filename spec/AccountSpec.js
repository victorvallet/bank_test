describe('Bank account', () => {
    var account;
    var today;
    beforeEach(() => {
        account = new BankAccount
        today = new Date().toLocaleDateString()
    })
    xit('has a defined and non null ID number', () => {
        expect(account.id).toBeDefined();
        expect(account.id).not.toBeNull();
    });
    it('has an initial balance of £0', () => {
        expect(account.checkBalance()).toEqual(0)
    });
    it('has an initial empty statement', () => {
        expect(account.statement.length).toEqual(0)
    });
    it('can store multiple transactions', () => {
        account.deposit(1000)
        account.withdraw(200)
        expect(account.statement).toEqual([`${today} || 1000.00 || || 1000.00`, `${today} || || 200.00 || 800.00`])
    });


    describe('#deposit', () => {
        it('increases the balance by an amount', () => {
            account.deposit(300)
            expect(account.checkBalance()).toBeGreaterThan(0)
            expect(account.checkBalance()).toEqual(300)
        });
        it('should throw an error if the user try to make a deposit < £20', () => {
            expect(() => {
                account.deposit(10)
            }).toThrowError("Sorry, the minimum amount to make a deposit is £20")
        });
    });

    describe('#withdraw', () => {
        it('decreases the balance by an amount', () => {
            account.deposit(200)
            account.withdraw(100)
            expect(account.checkBalance()).toEqual(100)
        });
        it('should throw an error if not enought money on the account', () => {
            expect(() => {
                account.withdraw(100)
            }).toThrowError("Not enough funds, please top up your account!")
        });
    });

    describe('print statement', () => {
        it('returns an empty statement if no transactions yet', () => {
            expect(account.printStatement()).toEqual('date || credit || debit || balance')
        });
        it('returns a summary of past transactions', () => {
            account.deposit(1000)
            account.withdraw(200)
            expect(account.printStatement()).toEqual(`date || credit || debit || balance\n${today} || 1000.00 || || 1000.00\n${today} || || 200.00 || 800.00`)
        });
    });


});