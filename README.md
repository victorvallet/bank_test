# bank_test

### Set up

There is not specific set up or packages to install to run this program.

Follow these steps to run the tests:

- `cd` in the repo
- `open`the SpecRunner.html
- Enjoy Jasmine summary of the tests

Follow these steps to run the program:

- `cd` in the repo
- `open`the SpecRunner.html
- open your browser console
- create a new bank account with `let bank = new BankAccount`
- Make a new deposit or withdrawal with `bank.deposit(200)` or `bank.withdraw(50)`
- Print your statement with `bank.printStatement`
- Check your balance at anytime with `bank.balance`

### Approach

I started with a single BankAccount class but quicly realised another Transaction class could be appropriate. I tried to link them in the most efficient way: when you do an operation on your account, you automatically create a new transaction which is then stored in your bank statement.

Besides, I thought it could be useful to prevent deposit under £20 and overdrafts, throwing an error to the customer in those two cases.

I also thought it could make sense to have an auto generated bank account ID but found it hard to implement its uniqueness (that's why I kept the test as skipped for the moment).

### Code structure

I tried to keep the same structure we used for the Thermostat challenge when we first discovered the Jasmine testing framework. 
My code is therefore structured like the following: 

```bash
├── jasmine
│   ├── lib/jasmine-3.5.0
│   │   ├── jasmine stuff
│   ├── spec
│   │   ├── AccountSpec.js
│   │   ├── TransactionSpec.js
│   ├── src
│   │   ├── Account.js
│   │   ├── Transaction.js
│   └── SpecRunner.html
├── README.md
└── .eslintrc
```

### Test coverage

The code pass all tests, and has been built on a testing-refactoring process.
Regarding linting and indenting, the code has been linted thanks to ESlint recommendations.

Regarding test coverage, I used Karma test runner. A test coverage summmary can be found just bellow:

=============================== Coverage summary ===============================
Statements   : 100% ( 23/23 )
Branches     : 100% ( 6/6 )
Functions    : 100% ( 10/10 )
Lines        : 100% ( 22/22 )