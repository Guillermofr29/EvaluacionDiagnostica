/*Realizar un algoritmo que permita generar contraseñas aleatorias con los requerimientos
proporcionados (longitud mínima de 8 caracteres, al menos una letra mayúscula, un carácter
especial y un número.)*/

const generarContrasena = () => {
    
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const caracteresEspeciales = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let contraseña = [
        mayusculas[Math.floor(Math.random() * mayusculas.length)],
        minusculas[Math.floor(Math.random() * minusculas.length)],
        numeros[Math.floor(Math.random() * numeros.length)],
        caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)]
    ];

    // Completar la contraseña hasta alcanzar 8 caracteres
    const todosLosCaracteres = mayusculas + minusculas + numeros + caracteresEspeciales;
    while (contraseña.length < 8) {
        contraseña.push(todosLosCaracteres[Math.floor(Math.random() * todosLosCaracteres.length)]);
    }

    // Revolver los caracteres
    for (let i = contraseña.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [contraseña[i], contraseña[j]] = [contraseña[j], contraseña[i]];
    }

    return contraseña.join('');
}

console.log(generarContrasena());