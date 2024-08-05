let canvas = document.getElementById("scratch");
let context = canvas.getContext("2d");

const init = () => {
    let gradientColor = context.createLinearGradient(0, 0, 135, 135);
    gradientColor.addColorStop(0,"#c3a3f1");
    gradientColor.addColorStop(1,"#6414e9");
    context.fillStyle = gradientColor;
    context.fillRect(0,0,200,200);
    
};

window.onload = init();