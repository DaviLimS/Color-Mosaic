function GenerateColor(min, max) {
    let red = Math.round((Math.random() * (max - min) + min) * 100);
    let green = Math.round((Math.random() * (max - min) + min) * 100);
    let blue = Math.round((Math.random() * (max - min) + min) * 100);
    let color = "rgb(" + red + ", " + green + ", " + blue + ")";

    document.getElementsByClassName("color-code").innerText = color;
    document.getElementsByClassName("color-display").style.backgroundColor = color;
}