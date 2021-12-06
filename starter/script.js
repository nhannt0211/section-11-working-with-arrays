'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/**
 * Bankist project
 */
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

//Calculating accounts balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
// calcDisplayBalance(account1.movements)

//Calculating deposits, withdrawals and interest
const calcDisplaySummary = function (account) {
  const income = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income} €`;

  const out = account.movements
    .filter(mov => mov < 0)
    .map(mov => Math.abs(mov))
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${out} €`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};
// calcDisplaySummary(account1.movements)

//Create user name
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(user => user[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = account => {
  displayMovements(account.movements);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};

//Login Event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    //Clear input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
  console.log(currentAccount);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount?.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiveAcc &&
    receiveAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

/**
 * 161. some and every
 */

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    console.log('loan money');
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
})


/**
 * 160. The findIndex Method
 */
btnClose.addEventListener('click', function(e) {
  e.preventDefault();
    
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    
    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/**
 * 141. Simple Array Methods
 */
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join("-"));
*/

/**
 * 142. Looping Arrays: forEach
 */

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log("========  Loop array with forEach method ========");
// movements.forEach(function(mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// })

/**
 * Execise 12/10/2021
 */
// function solution(S) {
//   let tempArr = [];
//   let rs = 1;
//   for (let i = 0; i < S.length; i++) {
//     let currentChar = S[i];
//     if (tempArr[currentChar] == undefined) {
//       tempArr[currentChar] = true;
//     }
//     else {
//       rs++;
//       tempArr = [];
//       tempArr[currentChar] = true;
//     }
//   }
//   return rs;
// }
// console.log('Result: ', solution('abab'));
// console.log("===========================");
// console.log('Result: ', solution('world'));
// console.log("===========================");
// console.log('Result: ', solution('dddd'));
// console.log("===========================");
// console.log('Result: ', solution('cycle'));
// console.log("===========================");
// console.log('Result: ', solution('abba'));
// console.log("===========================");
// console.log('Result: ', solution('abcadbea'));

/**
 * Exercise 13/10/2021
 */
// function solution(N) {
//   let arr = N.toString().split('');
//   let rs = -9999999999;
//   let tmpArr = []
//   for (let i = 0; i < arr.length; i++) {
//     tmpArr = [...arr];
//     if (arr[i] == 5) {
//       tmpArr.splice(i, 1)
//       const resultString = tmpArr.join('');
//       if (rs < parseInt(resultString))
//         rs = (parseInt(resultString) != -0) ? parseInt(resultString) : 0;
//     }
//   }
//   return rs;
// }
// console.log(solution(15958));
// console.log(solution(-5859));
// console.log(solution(-5000));
// console.log(solution(-9595000));

/**
 * 143. forEach with Maps and Sets
 */
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);
// })

// //Set
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"])
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _, set) {
//   console.log(`${value}: ${value}`);
// })

/**
 * 148. The map Method
 */
// const eurToUsd = 1.1;
// const movementsUSD = movements.map(mov => mov * eurToUsd)
// console.log(movements);
// console.log(movementsUSD);

// const movementsDescription = movements.map((mov, i) =>
//   `Movement ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
//   );

// console.log(movementsDescription);

/**
 * 150. The filter method
 */
// const deposits = movements.filter(function(mov) {
//   return mov > 0;
// })

// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

/**
 * 151. The reduce method
 */
// console.log(movements);
// const balance = movements.reduce(function(acc, cur){
//   return acc + cur;
// }, 0);
// const balance2 = movements.reduce((acc, cur) => acc + cur
// , 0);
// console.log(balance);
// console.log(balance2);

//Maximim value
// const maximumValue = movements.reduce((max, cur) =>
//   max < cur ? cur : max, 0);
// console.log(maximumValue);

/**
 * 153. The Magic of Chaining Methods
 */
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov);
// console.log(totalDepositsUSD);

/**
 * 155. The find Method
 */

// const firstWithdrawal = movements.find(mov => mov < 0)
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
// // const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// let account;
// for (let acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     account = acc;
//   }
// }
// console.log(account);


/**
 * 161. flat and flatMap
 */
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

