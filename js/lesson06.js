const paragraphElement = document.querySelector('.contentass p');
paragraphElement.setAttribute('class', 'text-edited');
const studentsGroupPracticeTime = [
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
        practiceTime: 10
    }
];

// function findMax() {
//     const values = arguments;
//     let maxValue = -Infinity;
//     for (let i = 0; i < values.length; i++) {
//        if (values[i] > maxValue) {
//         maxValue = values[i];
//        } 
//     }
//     return maxValue;
// }

const studentsPracticeTime = studentsGroupPracticeTime.map((student) =>{
    return student.practiceTime
})

// console.log(findMax(...studentsPracticeTime));

function findMax(...values) {
    return values.reduce((acc, value) => {
        if (value > acc) {
            acc = value;
        } return acc;
    }, 0);
};

function sum(...values) {
    
}

findMax(...studentsPracticeTime);