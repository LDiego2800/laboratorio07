while(true) {
    const preguntaEdad = prompt("Escribe el número 21 o no podras entrar");
    if (parseInt(preguntaEdad) === 21) {
        break;
    }
}

const cantidadPiezasAjedrez = prompt("¿Cuantas veces quieres que se muestre la pieza de ajedrez?");
let contador = 0;
while (contador < parseInt(cantidadPiezasAjedrez)) {
    document.write("<img src='https://w7.pngwing.com/pngs/129/594/png-transparent-chess-piece-king-queen-pin-chess-king-pin-queen.png' 'width=10px'/>")
    contador += 1;
}
