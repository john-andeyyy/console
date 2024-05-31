const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task 1
dogs.forEach(dog => {
    // add recommendedFood in each dog
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});


// Task 2

// find the dog of sarah
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));

if (sarahsDog.curFood > sarahsDog.recommendedFood) {
    console.log("Sarah's dog is eating too much");
} else if (sarahsDog.curFood < sarahsDog.recommendedFood) {
    console.log("Sarah's dog is eating too little");
} 


// Task 3
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners); // add dog owner to the new arrat

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);

// Task 4
console.log("task 4")
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// Task 5
const exactlyRecommended = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log("task 5 "+exactlyRecommended);

// Task 6
const okayAmount = dog =>
    dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;

const eatingOkay = dogs.some(okayAmount);
console.log("task 6 " +eatingOkay);

// Task 7
const dogsEatingOkay = dogs.filter(okayAmount);
console.log( dogsEatingOkay);

// Task 8
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);




// forEach - Executes a provided function once for each array element.
// find - Returns the value of the first element in the array that satisfies the provided testing function.
// filter - Creates a new array with all elements that pass the test implemented by the provided function.
// flatMap - Maps each element using a mapping function, then flattens the result into a new array.
// some - Tests whether at least one element in the array passes the test implemented by the provided function.  
    //return only true or false
// slice - Returns a shallow copy of a portion of an array into a new array object.
// sort - Sorts the elements of an array in place and returns the sorted array.