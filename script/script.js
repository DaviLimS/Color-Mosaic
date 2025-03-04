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
            let char = text[i];
            element.innerText += char;
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
    let colorCode = `rgb(${red}, ${green}, ${blue})`;

    let colorCodeElement = document.querySelector(".color-code");
    let colorDisplayElement = document.querySelector(".color-display");
    let colorNameElement = document.querySelector(".color-name");

    let hexColor = rgbToHex(red, green, blue);
    let colorName = getColorName(hexColor);

    if (colorCodeElement) {
        typeEffect(colorCodeElement, colorCode, 50);
    }

    if (colorDisplayElement) {
        colorDisplayElement.style.backgroundColor = colorCode;
    }

    if (colorNameElement) {
        typeEffect(colorNameElement, colorName, 50)
    }

    console.log("Color Code:", colorCode, "Hex:", hexColor, "Nome:", colorName);
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
}

function getColorName(hex) {
    if (typeof ntc !== "undefined") {
        let colorMatch = ntc.name(hex);
        console.log("Resultado ntc.name:", colorMatch);
        return colorMatch ? colorMatch[1] : "Cor desconhecida";
    }
    console.error("ntc.js não foi carregado!");
    return "Cor desconhecida";
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
