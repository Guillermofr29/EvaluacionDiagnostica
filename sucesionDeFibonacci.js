const sucesionFibonacci = (num) => {
    
    let fibonacci = [0]; //array con el primer elemento de la sucesión

    if (num <= 1) return fibonacci; 
    
    fibonacci.push(1);

    for (let i = 2; i < num; i++) { 
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    }

    console.log(`Secuencia Fibonacci hasta posición ${num}:`);
    return fibonacci.join(" ");
}

console.log(sucesionFibonacci(7));
