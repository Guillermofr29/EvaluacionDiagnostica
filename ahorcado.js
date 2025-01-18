/*Se genera una palabra aleatoria (oculta al usuario) y el usuario debe ingresar letra por letra para
intentar adivinar la palabra, se debe validar que las letras coincidan con la posición de las letras de la
palabra generada. Máximo 5 errores.*/

const palabras = ["guillermo", "ozelot", "programacion", "estadias", "proyecto", "utcancun"];
const palabra = palabras[Math.floor(Math.random() * palabras.length)]; // Elegir una palabra aleatoria del array de palabra
let palabraOculta = Array(palabra.length).fill("_"); //Ocultar la palabra y reemplazar las letras con guión bajo
let intentos = 5;

alert("Palabra oculta: " + palabraOculta.join(" ") + "\nTienes " + intentos + " intentos restantes.");

const ahorcado = () => {
    while (intentos > 0 && palabraOculta.join("") !== palabra) {

        const letra = prompt('Ingresa una letra: ').toLowerCase();

        // Validar la letra ingresada
        if (letra.length !== 1 || !/[a-zA-Z]/.test(letra)) {
            alert('Ingresa una sola letra válida.');
            continue;
        }

        let acertado = false;

        // Verificar si la letra está en la palabra
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] === letra) {
                palabraOculta[i] = letra;
                acertado = true;
            }
        }

        if (acertado) {
            alert(`La letra "${letra}" está en la palabra`);
        } else {
            intentos--;
            alert(`La letra "${letra}" no está en la palabra. ${intentos} intentos restantes`)
        }

        // Mostrar la palabra oculta y los intentos restantes
        alert("Palabra oculta: " + palabraOculta.join(" ") + "\nTienes " + intentos + " intentos restantes.");
    }

    // Comprobar si el jugador ha ganado o perdido
    if (palabraOculta.join("") === palabra) {
        alert(`Haz adivinado la palabra: ${palabra}`);
    } else {
        alert(`Haz perdido, la palabra era ${palabra}`);
    }
};

ahorcado();