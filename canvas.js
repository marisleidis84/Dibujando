let d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");
let lineas = 0;
let xi, yf, xf, yi;
let colorcito = "#AAf";

for (let l =30; l > lineas; l--) {
    xf = 10 * l - 10;
    yi = 300 - 10 * l;
    dibujarLineas("#FAA", 300, yi, xf, 300);
    dibujarLineas("#FAA", 0, yi, xf, 0);

    xi = 10 * l;
    yf = 10 * (l + 1);
    dibujarLineas(colorcito, xi, 0, 300, yf);
    dibujarLineas(colorcito, xi, 300, 0, yf);
    
}

dibujarLineas("#FAA", 299,299,299,1);
dibujarLineas("#FAA", 1,299,299,299);
dibujarLineas(colorcito, 299,1,1,1);
dibujarLineas(colorcito, 1,1,1,299);

function dibujarLineas(color, xinicial, yinicil, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicil);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}