function typeEffect(element, text, speed) {
    let i = 0;
    element.innerText = "";
    function typing() {
        if (i < text.lenght) {
            element.innerText += text.chartAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function generateColor(min, max) {
    let red = Math.round((Math.random() * (max - min) + min) * 1000);
    let green = Math.round((Math.random() * (max - min) + min) * 1000);
    let blue = Math.round((Math.random() * (max - min) + min) * 1000);
    let color = `rgb(${red}, ${green}, ${blue})`;

    let colorCode = document.querySelector(".color-code");
    let colorDisplay = document.querySelector(".color-display");

    if (colorCode) {
        typeEffect(colorCodeElement, color, 50);
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

    if(clickNum == 10) {
        alert("Calma bb, pqq vc tá clicando tão rápido?? Tá com raiva tá? kkkkkkkkkkkkkkk");
    }
})