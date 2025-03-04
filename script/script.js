function generateColor(min, max) {
    let red = Math.round((Math.random() * (max - min) + min) * 100);
    let green = Math.round((Math.random() * (max - min) + min) * 100);
    let blue = Math.round((Math.random() * (max - min) + min) * 100);
    let color = `rgb(${red}, ${green}, ${blue})`;

    let colorCode = document.querySelector(".color-code");
    let colorDisplay = document.querySelector(".color-display");

    colorCode.innerText = color;
    colorDisplay.style.backgroundColor = color;
}