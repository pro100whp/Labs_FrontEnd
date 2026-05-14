document.getElementById('btn-promo').onclick = function userDialog() {
    let number;
    do {
        number = prompt("Скільки ігор у вашій колекції? (Введіть число більше 10 для отримання VIP-статусу):", "0");
    } while (number !== null && Number(number) <= 10);
    
    if (number === null) {
        alert("Опитування скасовано користувачем.");
    } else {
        alert(`Вау! У вас цілих ${number} ігор. VIP-статус 'Геймер' підтверджено!`);
    }
};

function showDeveloperInfo(lastName, firstName, position = "Студент КПІ") {
    console.log(`Автор платформи:\nПрізвище: ${lastName}\nІм'я: ${firstName}\nРоль: ${position}`);
    alert(`Вітаємо на сайті!\nРозробив: ${firstName} ${lastName}\nРоль: ${position}`);
}

showDeveloperInfo("Шалімінов", "Артем");

function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Цікавий факт: назва гри "${str1}" довша за "${str2}".`);
    } else if (str2.length > str1.length) {
        alert(`Цікавий факт: назва гри "${str2}" довша за "${str1}".`);
    } else {
        alert("Назви цих ігор мають однакову довжину.");
    }
}

compareStrings("Cyberpunk 2077", "Portal");

document.getElementById('btn-bg').onclick = function() {
    
    let originalBg = document.body.style.backgroundColor;
    
    
    document.body.style.backgroundColor = "#3d0000"; 
    
    
    alert("Фокус-режим увімкнено! Фон змінено на 30 секунд.");
    
    
    setTimeout(() => {
        document.body.style.backgroundColor = originalBg;
        alert("Час вийшов! Фокус-режим вимкнено, фон повернуто.");
    }, 30000); 
};

document.getElementById('btn-redirect').onclick = function() {
    location.href = "catalog.html"; 
};

document.addEventListener('DOMContentLoaded', () => {
    const playground = document.getElementById('dom-playground');
    const queryItems = document.querySelectorAll('.query-item');
    
    queryItems[0].innerHTML = "<strong>Термінова новина:</strong> Реліз очікуваної гри перенесено на осінь!";
    
    queryItems[1].textContent = "Оновлення серверів успішно завершено (v2.0.1)";
    
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = "Блок реклами";
    playground.appendChild(tempDiv);
    tempDiv.outerHTML = "<p style='color: #ff0055;'>Рекламу на цій сторінці заблоковано.</p>";
    
    let textNodeDemo = document.getElementById('insert-zone').firstChild;
    if(textNodeDemo && textNodeDemo.nodeType === 3) {
         textNodeDemo.data = "Останні коментарі користувачів: ";
    }

    let insertZone = document.getElementById('insert-zone');
    
    let newElement = document.createElement('div');
    newElement.style.border = "1px solid #ff0055";
    newElement.style.padding = "8px";
    newElement.style.marginTop = "10px";
    newElement.style.borderRadius = "4px";
    
    let textNode = document.createTextNode("Крутий сайт, дуже сподобався дизайн та інфографіка! ");
    
    newElement.append(textNode);
    
    let prependText = document.createElement('span');
    prependText.textContent = "[Користувач Alex] ";
    prependText.style.color = "#00ffcc";
    prependText.style.fontWeight = "bold";
    newElement.prepend(prependText);
    
    insertZone.append(newElement);

    let afterElement = document.createElement('div');
    afterElement.textContent = "[Модератор] Дякуємо за ваш відгук!";
    afterElement.style.color = "#b3b3b3";
    afterElement.style.fontSize = "0.9rem";
    afterElement.style.marginTop = "5px";
    newElement.after(afterElement);

    let targetToReplace = document.getElementById('replace-target');
    let replacement = document.createElement('h5');
    replacement.textContent = "Цей запис був видалений адміністратором платформи.";
    replacement.style.color = "#b088f5";
    targetToReplace.replaceWith(replacement);

    let rmBtn = document.createElement('button');
    rmBtn.textContent = "Видалити коментар";
    rmBtn.style.marginLeft = "10px";
    rmBtn.style.padding = "2px 5px";
    rmBtn.style.background = "transparent";
    rmBtn.style.border = "1px solid #ff0055";
    rmBtn.style.color = "#ff0055";
    rmBtn.style.cursor = "pointer";
    rmBtn.style.borderRadius = "3px";
    
    rmBtn.onclick = () => {
        newElement.remove();
        rmBtn.style.display = "none";
        afterElement.textContent = "Коментар видалено.";
    };
    afterElement.append(rmBtn);
});