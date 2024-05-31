const calcAverageHumanAge = (ages) => {
    // Convert dog age to human ages
    const humanAges = ages.map(age => {
        if (age <= 2) {
            return 2 * age;
        } else {
            return 16 + age * 4;
        }
    });

    // Filter out dogs that are less than 18 human years old
    const adultHumanAges = humanAges.filter(age => {
        if (age >= 18){
            return true
        }else{
            return false
        }
    });

   // console.log("adultHumanAges" + adultHumanAges)

    // Calculate the average human age of adult dogs

    // add all adult age
    const totalAge = adultHumanAges.reduce( (sum, age) => sum + age );
    // console.log("totalAge" + totalAge)

    const averageHumanAge = totalAge / adultHumanAges.length;

    return averageHumanAge;
}

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const average1 = calcAverageHumanAge(data1);
const average2 = calcAverageHumanAge(data2);

console.log(`Average human age for data1: ${average1}`);
console.log(`Average human age for data2: ${average2}`);
