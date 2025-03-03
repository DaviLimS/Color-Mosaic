function GenerateColor(min, max) {
    let red = Math.round((Math.random() * (max - min) + min) * 100);
    let green = Math.round((Math.random() * (max - min) + min) * 100);
    let blue = Math.round((Math.random() * (max - min) + min) * 100);

    let color = red + ", " + green + "," + blue;
    document.getElementByClassName("color-code").innerText = "color";
    document.getElementByClassName("color-display").style.backgroundColor = "rgb(" + color + ")";
}