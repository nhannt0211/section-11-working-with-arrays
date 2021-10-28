'use strict';

function checkDogs(dogsJulia, dogsKate) {
  const juliaCorrectArray = dogsJulia.slice();
  juliaCorrectArray.splice(0, 1);
  juliaCorrectArray.splice(-2)

  const data = [...juliaCorrectArray, ...dogsKate];
  data.forEach(function(dog, i) {
    if (dog < 3) {
      console.log(`Dog number ${i} is still a puppy`);
    } else {
      console.log(`Dog number ${i} is an adult, and is ${dog} years old`);
    }
  })
}

console.log("============Data 1============");
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
console.log("============Data 2============");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])