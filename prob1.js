const checkDogs = (juliadog, katedog) => {

    // shallow copy 
    const correctJulis = juliadog.slice();


    correctJulis.splice(0, 1); // remve the 1st element in array
    correctJulis.splice(-2, 2);// remoce the last 2 element in the array

    const corrected = correctJulis.concat(katedog);


    corrected.map((age, index) => {

        if (age >= 3) {
            console.log(`Dog number ${index + 1} is an adult, and is ${age} years old`);
        } else {
            console.log(`Dog number ${index + 1} is still a puppy `);
        }
    });



}


// Test Data 1
console.log("Test Data 1")
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// Test Data 2
console.log("Test Data 2")
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);