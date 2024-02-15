console.log(1 === "1"); //false
console.log(1 == false); //false
console.log(null !== 1); //true
let a, b;
b = (10 !== "10") ? a = 'Правда' : a = 'Ложь';

alert("Для продолжения введите свой возраст");
let age = prompt("Введите ваш возраст:", 18);

if (age >= 18) {
    console.log("Добро пожаловать");
} else if (age == 17) {
    console.log("Подождите годик");
} else {
    let answer = "Ты чё тут зАбыл, пиздЮк?";
    console.log(answer.toLowerCase());
}

console.log('Конкатенация ' + 'строк');
console.log(`Вывод через доллар переменной age: ${age}`);