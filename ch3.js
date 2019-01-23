const studentsInClass = [
    {
        firstName: "Sam",
        lastName: "smith",
        age: 24,
        grade: 14
    },
    {
        firstName: "Michael",
        lastName: "Jordan",
        age: 26,
        grade: 16
    },
    {
        firstName: "Curtis",
        lastName: "Jackson",
        age: 23,
        grade: 21
    },
    {
        firstName: "Lebron",
        lastName: "James",
        age: 27,
        grade: 12
    },
    {
        firstName: "Samuel",
        lastName: "Walton",
        age: 20,
        grade: 10
    },
    {
        firstName: "George",
        lastName: "Owen",
        age: 26,
        grade: 23
    },
    {
        firstName: "susan",
        lastName: "Cain",
        age: 19,
        grade: 19
    },
    {
        firstName: "Maya",
        lastName: "Angelou",
        age: 25,
        grade: 15
    },
    {
        firstName: "Charlie",
        lastName: "puth",
        age: 21,
        grade: 18
    },
    {
        firstName: "Andrea",
        lastName: "Alonso",
        age: 23,
        grade: 19
    },
    {
        firstName: "Michael",
        lastName: "sawyer",
        age: 16,
        grade: 26
    },
    {
        firstName: "Kate",
        lastName: "Mark",
        age: 21,
        grade: 20
    },
    {
        firstName: "Victoria",
        lastName: "David",
        age: 26,
        grade: 20
    },
];
const tooOld = studentsInClass.filter(function (ages) {
    return ages.age >= 20;
});

console.log(tooOld);