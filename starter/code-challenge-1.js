'use strict';

/**
 * Code challenge 1
 */
// function checkDogs(dogsJulia, dogsKate) {
//   const juliaCorrectArray = dogsJulia.slice();
//   juliaCorrectArray.splice(0, 1);
//   juliaCorrectArray.splice(-2)

//   const data = [...juliaCorrectArray, ...dogsKate];
//   data.forEach(function(dog, i) {
//     if (dog < 3) {
//       console.log(`Dog number ${i} is still a puppy`);
//     } else {
//       console.log(`Dog number ${i} is an adult, and is ${dog} years old`);
//     }
//   })
// }

// console.log("============Data 1============");
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
// console.log("============Data 2============");
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])

/**
 * Code challenge 2
 */
function calcAverageHumanAge(dogsAge) {
  const humanAge = dogsAge.map(dog => dog <= 2 ? dog * 2 : 16 + dog * 4);
  const dogAtLeast18YO = humanAge.filter(item => item >= 18);
  const averageAge = dogAtLeast18YO.reduce((acc, cur) => acc + cur, 0) / dogAtLeast18YO.length;
  return averageAge
}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/**
 * Code challenge 3
 */
function calcAverageHumanAge2(dogsAge) {
  const averageAge = dogsAge.map(dog => dog <= 2 ? dog * 2 : 16 + dog * 4)
                          .filter(dog => dog >= 18)
                          .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);
  return averageAge;
}
console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));

