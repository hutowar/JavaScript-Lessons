// let pass = Number(prompt('Введите пароль в числовом формате'));
// while (pass !== 123) {
// pass = Number(prompt('Введите пароль в числовом формате'));
// }

// let pass;
// do {
//     pass = Number(prompt('Введите пароль в числовом формате'));
// } while (pass !== 123);

const students = ['Ivanov', 'Petrov', 'Sidorov'];
const studentsCopy = students.slice(0, 2); // Получаем первых двух студентов
console.log(studentsCopy);
const studentsPraticeTimes = [20, 135, 87];

studentsPraticeTimes.pop();
const lastStudent = students.pop(); // Вынимает последний элемент
console.log(lastStudent); // 'Sidorov'

studentsPraticeTimes.shift();
const firstStudent = students.shift(); // Вынимаем первый элемент
console.log(firstStudent); // 'Иванов'


// let index = Number(prompt('Скольких студентов вы хотите добавить?'));
// for (let i = 0; i < index; i++) {
//     students.push(prompt('Введите имя студента: '));
//     studentsPraticeTimes.push(Number(prompt('Введите время студента: ')));
// }

// let fullPracticeTime = 0;
// for (let i = 0; i < students.length; i++) {
//     fullPracticeTime += studentsPraticeTimes[i];
//     console.log(students[i], ' - practice time: ', studentsPraticeTimes[i]);
// }
// console.log('Full practice time: ', fullPracticeTime);

const filePath = "C:/projects/bestProject/src/images/background-image.png";
const filePathCopy = filePath.slice(); // Создаём копию filePath
console.log(filePathCopy);

const fileName = filePath.split('/').pop(); // Разделим строку на составляющие и 
// превратим её в массив по средствам split('/'), а потом уже вызовем новый метод pop()
console.log(fileName); // "background-image.png"

const diskName = filePath.split('/').shift(); // Разделим строку на составляющие и
console.log(diskName); // "C:"

const names = ["Анна", "Иван", "Мария", "Алексей", "Екатерина",
 "Дмитрий", "Ольга", "Павел", "Наталья", "Сергей"];
console.log(names.indexOf("Ольга"));
names.unshift("Хуйдл");
names.pop();

//////////////////////////////////////////////////////////////////////////////
deleteName = () => {
    names.pop();
    names.forEach(element => {
        console.log(element);
    });
    console.log(names);
} 