const preguntaNombre = prompt("¿Cual es tu nombre?");
let preguntaGustos = prompt("¿Te gusta la programación?");
const preguntaEdad = prompt("¿Cual es tu edad?");

alert(preguntaNombre)



function calcularSiEsMayorDeEdad() {
    if (parseInt(preguntaEdad) >= 18) {
        alert("La persona es MAYOR de edad");
    } else {
        alert("La persona es MENOR de edad");
    }
}

calcularSiEsMayorDeEdad(); 

function preguntarSiLeGustaLaProgramación() {
    if (preguntaGustos.toLocaleLowerCase() === "si") {
        alert("Bienvenido, aqui aprendemos programación");
    } else {
        alert("Error, Actualiza la pagina y vuelve a intentar");
    }
}

preguntarSiLeGustaLaProgramación();