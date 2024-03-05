const btnEl = document.querySelector('.button');
btnEl.addEventListener('click', function (e) {
    const element = e.target;
    element.style.color = "red";
    console.log(element);
    console.log(e.currentTarget + "На нём висит событие");
});

const result = document.querySelector('.result');
const menuBody = document.querySelector('.menu');
const mouseBlock = document.querySelector('.mouse-block');
const mouseBlockParagraph = document.querySelector('.mouse__block-paragraph');
const blockMouseEnter = document.querySelector('.block__mouse-enter');
function showConsole() {
    console.log("Yea!");
}

function menu(e) {
    if (e.target.closest(".menu__button")) {
        menuBody.classList.toggle('_active');
    }
    if (!e.target.closest(".menu")) {
        menuBody.classList.remove('_active');
    }
}

mouseBlock.addEventListener('mousemove', function (e) {
    mouseBlockParagraph.textContent = `clientX - ${e.clientX} | clientY - ${e.clientY}`;
});
mouseBlock.addEventListener('mouseout', function (e) {
    mouseBlockParagraph.textContent = "";
});

blockMouseEnter.addEventListener('mouseenter', function (e) {
    mouseBlockParagraph.style.color = 'red';
});
blockMouseEnter.addEventListener('mouseleave', function (e) {
    mouseBlockParagraph.style.color = 'white';
});

const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event) {
	if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
}

result.addEventListener('click', function (e) {
    if (e.target.closest('.square')) {
        showConsole();
        console.log(e.target);
    }
});

result.addEventListener('mousedown', function (e) {
    if (e.target.closest('.square')) {
        console.log(`Нажато 1 - левой, 2 - средней, 3 - правой кнопкой мыши: ${e.which}`);
    }
});
document.addEventListener('click', menu);
document.addEventListener('contextmenu', function (e) {
    console.log("Пользыватель вызвал контекстное меню");
});
document.addEventListener('keydown', function (e) {
    console.log(`Нажата клавиша ${e.key} ${e.code}`);
    console.log(e.repeat);
});

