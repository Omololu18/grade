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

function classAverage(data) {
    if (!Array.isArray(data)) {
        console.log('Parameter is not an array');
    } else{
        const n = data.length;
        const sum = data
            .map(function (studentsInClass) {
                return studentsInClass.grade;
            })
            .reduce(function (a, b) {
                return a + b
            }, 0)
        const mean = sum / n;
        return mean.toFixed(2);
    }
}

console.log(classAverage(studentsInClass));