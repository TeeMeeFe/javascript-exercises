const findTheOldest = function(arr) {
    const today = Date.now();
    return arr.reduce((prevPerson, currPerson) => {
        let prevAge = (prevPerson.yearOfDeath - prevPerson.yearOfBirth)
        let currAge = (currPerson.yearOfDeath - currPerson.yearOfBirth)
        return prevAge > currAge ? prevPerson : currPerson
    });
};

// Debug object, remove before flight!
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    }
  ]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
