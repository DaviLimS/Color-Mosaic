let currentTimeout = null;

function typeEffect(element, text, speed, eraseSpeed = speed / 2, delayBeforeTyping = 300) {
    if (currentTimeout) {
        clearTimeout(currentTimeout);
    }
    
    let i = 0;
    let textLength = element.innerText.length;

    function eraseText() {
        if (textLength > 0) {
            element.innerText = element.innerText.slice(0, -1);
            textLength--;
            currentTimeout = setTimeout(eraseText, eraseSpeed);
        } else {
            currentTimeout = setTimeout(startTyping, delayBeforeTyping);
        }
    }

    function startTyping() {
        i = 0;
        element.innerText = "";
        typing();
    }

    function typing() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            currentTimeout = setTimeout(typing, speed);
        }
    }

    eraseText();
}

function generateColor(min, max) {
    let red = Math.round((Math.random() * (max - min) + min));
    let green = Math.round((Math.random() * (max - min) + min));
    let blue = Math.round((Math.random() * (max - min) + min));
    let color = `rgb(${red}, ${green}, ${blue})`;

    let colorCode = document.querySelector(".color-code");
    let colorDisplay = document.querySelector(".color-display");

    if (colorCode) {
        typeEffect(colorCode, color, 50);
    }

    if (colorDisplay) {
        colorDisplay.style.backgroundColor = color;
    }
}

let lastClickTime = 0;
let clickSpeedLimit = 300;
let clickNum = 0;

document.querySelector(".color-generator").addEventListener("click", function () {
    let currentTime = new Date().getTime();
    
    if (currentTime - lastClickTime < clickSpeedLimit) {
        clickNum++;
    } else {
        clickNum = 1;
    }

    lastClickTime = currentTime;

    if (clickNum >= 5) {
        alert("Calma bb, pqq vc tá clicando tão rápido?? Tá com raiva tá? kkkkkkkkkkkkkkk");
        clickNum = 0;
    }
});
