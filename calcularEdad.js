/*Realizar un algoritmo que calcula la edad de una persona. El usuario debe ingresar su año de
nacimiento, día y hora.*/

const calcularEdad = (añoNac, mesNac, diaNac, horaNac) => {
    const fechaActual = new Date();
    const fechaNacimiento = new Date(añoNac, mesNac - 1, diaNac, horaNac);

    if (fechaNacimiento > fechaActual) {
        return "La fecha de nacimiento no puede ser una fecha futura.";
    }

    let años = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let meses = fechaActual.getMonth() - fechaNacimiento.getMonth();
    let dias = fechaActual.getDate() - fechaNacimiento.getDate();
    let horas = fechaActual.getHours() - fechaNacimiento.getHours();

    // Ajustar meses si son negativos
    if (meses < 0) {
        años--;
        meses += 12;
    }

    // Ajustar días si son negativos
    if (dias < 0) {
        meses--;
        const diasEnMesAnterior = new Date(
            fechaActual.getFullYear(),
            fechaActual.getMonth(),
            0
        ).getDate();
        dias += diasEnMesAnterior;
    }

    if (horas < 0) {
        dias--;
        horas += 24;
    }

    return `Tienes ${años} años con ${meses} meses ${dias} días y ${horas} horas.`;
};

const año = parseInt(prompt("Ingresa tu año de nacimiento (0000): "));
const mes = parseInt(prompt("Ingresa tu mes de nacimiento (1-12): "));
const dia = parseInt(prompt("Ingresa tu día de nacimiento (1-31): "));
const hora = parseInt(prompt("Ingresa tu hora de nacimiento (0-23): "));

if (isNaN(año) || isNaN(mes) || isNaN(dia) || isNaN(hora) || año < 0) {
    console.log("Por favor, ingresa valores válidos.");
} else {
    console.log(calcularEdad(año, mes, dia, hora));
}
