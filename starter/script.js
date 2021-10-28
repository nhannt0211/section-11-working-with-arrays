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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES




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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
})

//Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"])
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, set) {
  console.log(`${value}: ${value}`);
})
