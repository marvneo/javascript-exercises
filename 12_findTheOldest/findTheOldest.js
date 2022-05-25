const findTheOldest = function(array) {

    maxSoFar = 0

    mausoleom = {}

    for (person of array) {

        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth
        } else {
            age = 2022 -person.yearOfBirth
        }

        mausoleom[age] = person
        maxSoFar = Math.max(maxSoFar, age)
    }

    return mausoleom[maxSoFar]
};

// Do not edit below this line
module.exports = findTheOldest;
