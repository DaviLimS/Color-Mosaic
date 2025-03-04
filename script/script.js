function typeEffect(element, text, speed, eraseSpeed = speed / 2, delayBeforeTyping = 300) {
    let i = 0;
    element.innerText = "";
    let typeTimeout;

    function eraseText() {
        if (element.innerText.length > 0) {
            element.innerText = element.innerText.slice(0, -1)
            setTimeout(eraseText, eraseSpeed);
        } else {
            setTimeout(startTyping, delayBeforeTyping)
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
            typeTimeout = setTimeout(typing, speed);
        }
    }
    clearTimeout(typeTimeout);
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
    if(currentTime - lastClickTime < clickSpeedLimit) {
        clickNum++;
    }
    else {
        clickNum = 0;
    }
    lastClickTime = currentTime;

    if(clickNum == 5) {
        alert("Calma bb, pqq vc tá clicando tão rápido?? Tá com raiva tá? kkkkkkkkkkkkkkk");
    }
})