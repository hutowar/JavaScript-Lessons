const sectionResult = document.querySelector('.result');
const paragraphElement = document.createElement('p');
paragraphElement.textContent = "Параграф из JavaScript";

sectionResult.appendChild(paragraphElement);

const paragraphElementText = document.createTextNode('Содержимое текстовой ноды')
paragraphElement.appendChild(paragraphElementText);
const paragraphElementClone = paragraphElement.cloneNode(true);

sectionResult.appendChild(paragraphElementClone);

paragraphElementClone.style.color = 'red';

const dButton = document.querySelector('.dButton');
dButton.onclick = function () {
    // paragraphElementClone.parentNode.removeChild(paragraphElementClone);
    paragraphElementClone.remove();
}

replaceNode = () => {
    const textNode = document.createTextNode('Text node');
    paragraphElement.replaceWith(paragraphElementText, textNode);
}