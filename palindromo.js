/*Realizar un sencillo algoritmo para validar si una palabra es un palíndromo, el usuario debe
ingresar una palabra y se le retorna un mensaje de valido o invalido.*/

const palindromo = (palabra) =>{
    //Convertir la palabra en minusculas y quitar espacios
    const convertirPalabra = palabra.toLowerCase().replace(/\s+/g, "");
    //Convertir cada letra de la palabra en un elemento e invertir el orden del array y unir los elementos en un string
    const invertirPalabra = convertirPalabra.split("").reverse().join("");

    return convertirPalabra === invertirPalabra ? "Válido" : "No válido"
}

console.log(palindromo("reconocer"));