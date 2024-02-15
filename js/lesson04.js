const car = {
    brand: "audi",
    model: "A5",
    power: 249,
    year: 2023,
    passengers: 2,
    color: "red",
    odometr: 0,
    engineStarted: false,
    engineLifeTime: 0,
    startEngine: function () {
        if (car.engineStarted === true) {
            console.log("Engine alredy started.");
        } else {
            car.engineStarted = true;
            ++car.engineLifeTime;
            console.log("Engine started.");
            console.log(car.engineLifeTime);
        }
    },
    engineShutDown: function () {
        if (car.engineStarted === false) {
            console.log("At first start engine.");
        } else {
            car.engineStarted = false;
            console.log("Engine is off.");
        }
    },
    haveRoadTrip: function (distance) {
        if (car.engineStarted === false) {
            console.log("At first start engine.");
        } else {
            car.odometr += distance;
            console.log(car.odometr);
        }
    },
}

for (const key in car) {
    console.log(key + ": " + car[key]);
}


const group1 = {
    "Ivanov": {
        practicePlace: "ldu-1",
        practiceTime: 56
    },
    "Petrov": {
        practicePlace: "kamaz",
        practiceTime: 120
    },
    "Sidorov": {
        practicePlace: "ldu-1",
        practiceTime: 148
    },
    "Belkin": {
        practicePlace: "GosDZU",
        practiceTime: 20
    },
    "Avdeev": {
        practicePlace: "LPK",
        practiceTime: 160
    }
}
console.log(Object.keys(group1));
console.log(Object.values(car));
console.log(Object.entries(car));

const studentsPracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 180
    }
];

const dataForTable = studentsPracticeTime.map((object) => {
    if (object.practiceTime < 120) {
        return {
            Student: object.firstName,
            Practice: "Not passed"
        };
    } else {
        return {
            Student: object.firstName,
            Practice: "Passed"
        };
    }
}).filter((object) => {
    if (object.Practice === "Not passed") {
        return true;
    }
});
console.table(dataForTable);
const studentsTime = dataForTable.reduce((acc, student) => {
    if (student.Practice === "Not passed") {
        return ++acc;
    }
}, 0);
console.log("Not passed students: " + studentsTime);
const moreThen180PracticeTime = studentsPracticeTime.some((student) => {
    return student.practiceTime >= 180;
});

console.log(moreThen180PracticeTime);

const studentBelkin = studentsPracticeTime.find((student) => {
    return student.firstName === "Belkin";
});
console.log(studentBelkin.practiceTime);

// Сбор данных из объекта.
const student = {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 21,
};
const { firstName, lastName, age } = student;
// Сбор данных из массива.
const students = ["Ivanov", "Petrov", "Belkin"];
const [student1, student2, student3] = students;