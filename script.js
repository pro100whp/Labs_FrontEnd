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
    
    if(queryItems.length >= 2) {
        queryItems[0].innerHTML = "<strong>Термінова новина:</strong> Реліз очікуваної гри перенесено на осінь!";
        queryItems[1].textContent = "Оновлення серверів успішно завершено (v2.0.1)";
    }
    
    if(playground) {
        let tempDiv = document.createElement('div');
        playground.appendChild(tempDiv);
        tempDiv.outerHTML = "<p style='color: #ff0055;'>Рекламу на цій сторінці заблоковано.</p>";
    }
    
    let insertZone = document.getElementById('insert-zone');
    if(insertZone) {
        let textNodeDemo = insertZone.firstChild;
        if(textNodeDemo && textNodeDemo.nodeType === 3) {
             textNodeDemo.data = "Останні коментарі користувачів: ";
        }

        let newElement = document.createElement('div');
        newElement.style.border = "1px solid #ff0055";
        newElement.style.padding = "8px";
        
        let textNode = document.createTextNode("Крутий сайт, дуже сподобався дизайн та інфографіка! ");
        newElement.append(textNode);
        
        let prependText = document.createElement('span');
        prependText.textContent = "[Користувач Alex] ";
        newElement.prepend(prependText);
        insertZone.append(newElement);

        let afterElement = document.createElement('div');
        afterElement.textContent = "[Модератор] Дякуємо за ваш відгук!";
        afterElement.style.color = "#b3b3b3";
        newElement.after(afterElement);

        let targetToReplace = document.getElementById('replace-target');
        if(targetToReplace) {
            let replacement = document.createElement('h5');
            replacement.textContent = "Цей запис був видалений адміністратором платформи.";
            replacement.style.color = "#b088f5";
            targetToReplace.replaceWith(replacement);
        }

        let rmBtn = document.createElement('button');
        rmBtn.textContent = "Видалити коментар";
        rmBtn.style.border = "1px solid #ff0055";
        rmBtn.style.color = "#ff0055";
        
        rmBtn.onclick = () => {
            newElement.remove(); 
            rmBtn.style.display = "none";
            afterElement.textContent = "Коментар видалено.";
        };
        afterElement.append(rmBtn);
    }
});

// ==========================================
// Лаба 7
// ==========================================

function posterHoverAttribute(elem) {
    elem.style.transform = "scale(1.05)";
    elem.style.boxShadow = "0 0 15px #00ffcc";
    let status = document.getElementById('poster-status');
    if(status) status.textContent = "🎮 Трейлер готовий до перегляду!";
}

const poster = document.getElementById('game-poster');
if(poster) {
    poster.onmouseleave = function() {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
        document.getElementById('poster-status').textContent = "Наведіть курсор для взаємодії...";
    };

    function clickActionOne() { console.log("Система: Запит на завантаження сторінки гри..."); }
    function clickActionTwo() { alert("Сторінка гри тимчасово недоступна. Спробуйте пізніше!"); }
    
    poster.addEventListener('click', clickActionOne);
    poster.addEventListener('click', clickActionTwo);
}

const secretBtn = document.getElementById('secret-promo-btn');
if(secretBtn) {
    const objHandler = {
        handleEvent(event) {
            alert("Система безпеки: Доступ активовано через елемент <" + event.currentTarget.tagName + ">");
            event.currentTarget.style.background = "#555";
            event.currentTarget.textContent = "Ключ отримано";
            event.currentTarget.style.cursor = "not-allowed";
            secretBtn.removeEventListener('click', objHandler);
        }
    };
    secretBtn.addEventListener('click', objHandler);
}

const genreList = document.getElementById('genre-list');
if(genreList) {
    genreList.onclick = function(event) {
        if (event.target.tagName === 'LI') {
            for (let li of genreList.children) {
                li.style.borderColor = "transparent";
                li.style.color = "white";
            }
            event.target.style.borderColor = "#00ffcc";
            event.target.style.color = "#00ffcc";
        }
    };
}

const accountMenu = document.getElementById('account-menu');
if(accountMenu) {
    const menuActions = {
        save() { alert("Прогрес успішно збережено на сервері!"); },
        load() { alert("Останнє збереження завантажено."); },
        delete() { alert("Ваш профіль переміщено в корзину."); }
    };

    accountMenu.addEventListener('click', function(event) {
        let action = event.target.dataset.action;
        if (action) {
            menuActions[action]();
        }
    });
}

document.addEventListener('click', function(event) {
    let target = event.target.closest('[data-behavior="counter"]');
    if (!target) return;
    let span = target.querySelector('span');
    if(span) span.textContent = parseInt(span.textContent) + 1;
});


// ==========================================
// Лаба 8
// ==========================================

const inventoryZone = document.getElementById('inventory-zone');
const sysLog = document.getElementById('sys-log');
const items = document.querySelectorAll('.drag-item');
const sellZone = document.getElementById('sell-zone');

// Завдання 1: Логіка наведення (mouseover, mouseout, relatedTarget)
if (inventoryZone && sysLog) {
    inventoryZone.addEventListener('mouseover', function(event) {
        let item = event.target.closest('.drag-item');
        if (!item) return;

        // Підсвічуємо предмет
        item.style.borderColor = '#00ffcc';
        item.style.backgroundColor = '#444';

        // Визначаємо, звідки прийшла миша
        let related = event.relatedTarget;
        let fromTag = related ? (related.id || related.tagName) : 'зовнішньої зони';
        
        sysLog.textContent = `Системний журнал: Курсор перемістився з [${fromTag}] на [${item.textContent.trim()}]`;
    });

    inventoryZone.addEventListener('mouseout', function(event) {
        let item = event.target.closest('.drag-item');
        if (!item) return;

        // Повертаємо початковий стиль
        item.style.borderColor = '#555';
        item.style.backgroundColor = '#333';
    });
}

// Завдання 2: Логіка перетягування (Drag and Drop)
items.forEach(item => {
    item.onmousedown = function(event) {
        event.preventDefault(); // Скасовуємо виділення тексту при кліку

        // Фіксуємо поточні розміри, щоб при відриві кнопка не змінила форму
        item.style.width = item.offsetWidth + 'px';
        item.style.height = item.offsetHeight + 'px';

        // Рахуємо зміщення курсора від краю предмета
        let coords = item.getBoundingClientRect();
        let shiftX = event.clientX - coords.left;
        let shiftY = event.clientY - coords.top;

        // Змінюємо позиціонування і кидаємо в body, щоб тягати по всьому екрану
        item.style.position = 'absolute';
        item.style.zIndex = 1000;
        document.body.append(item);

        // Функція для переміщення
        function moveAt(pageX, pageY) {
            item.style.left = pageX - shiftX + 'px';
            item.style.top = pageY - shiftY + 'px';
        }

        moveAt(event.pageX, event.pageY);

        // Слухаємо рух
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        // Коли відпустили мишку
        item.onmouseup = function(event) {
            document.removeEventListener('mousemove', onMouseMove);
            item.onmouseup = null;

            // Перевіряємо, чи кинули ми зброю над Кошиком Торговця
            item.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            item.hidden = false;

            if (elemBelow) {
                let dropTarget = elemBelow.closest('#sell-zone');
                if (dropTarget) {
                    // Якщо влучили в кошик - предмет продано
                    dropTarget.style.borderColor = '#00ffcc';
                    dropTarget.style.color = '#00ffcc';
                    dropTarget.innerHTML = '💰 Продано!';
                    item.remove(); // Видаляємо зброю назавжди
                }
            }
        };
    };

    // Блокуємо стандартний браузерний drag, щоб не заважав
    item.ondragstart = function() {
        return false;
    };
});