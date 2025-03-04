let currentTimeouts = [];

function typeEffect(element, text, speed, eraseSpeed = speed, delayBeforeTyping = 300) {
    // Limpa todos os timeouts anteriores
    currentTimeouts.forEach(timeout => clearTimeout(timeout));
    currentTimeouts = [];
    
    let i = 0;

    function eraseText() {
        if (element.innerText.length > 0) {
            element.innerText = element.innerText.slice(0, -1);
            currentTimeouts.push(setTimeout(eraseText, eraseSpeed));
        } else {
            currentTimeouts.push(setTimeout(startTyping, delayBeforeTyping));
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
            element.innerHTML += char; // Use innerHTML para garantir que os espaços não sejam removidos
            
            i++;
            currentTimeouts.push(setTimeout(typing, speed));
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
        colorCodeElement.innerText = `Red: ${red} - Green: ${green} - Blue: ${blue}`;
    }

    if (colorDisplayElement) {
        colorDisplayElement.style.backgroundColor = colorCode;
    }

    if (colorNameElement) {
        typeEffect(colorNameElement, colorName, 50);
    }

    console.log("Color Code:", colorCode, "Hex:", hexColor, "Nome:", colorName);
    console.log(colorCode);
    console.log(hexColor);
    console.log(colorName);
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
}

function getColorName(hex) {
    if (typeof ntc !== "undefined") {
        let colorMatch = ntc.name(hex);
        console.log("Resultado ntc.name:", colorMatch);
        if (colorMatch) {
            let colorName = colorMatch[1];
            colorName = colorName.replace(/(?!^)([A-Z])/g, ' $1'); // Adiciona espaço antes das letras maiúsculas, exceto a primeira
            return colorName;
        }
        return "Cor desconhecida";
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

    generateColor(0, 255);
});