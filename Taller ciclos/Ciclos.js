// 1. Tabla de multiplicar
function generarTabla(tabla, cantidad) {
    console.log(`Tabla de multiplicar del ${tabla}:`);
    for (let i = 1; i <= cantidad; i++) {
        console.log(`${tabla} x ${i} = ${tabla * i}`);
    }
}

generarTabla(5, 10); //Llamada a la función

//2. Contar números pares
function contarNumerosParesEnRango(limite) {
    let pares = 0;
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            pares++;
        }
    }
    console.log(`Hay ${pares} números pares entre 1 y ${limite}.`);
}

contarNumerosParesEnRango(1000); // Llamada a la función

// 3. Punto resuelto en Suma_acumulada.html

//4. Calcular potencia
function calcularPotencia(base, exponente) {
    let resultado = 1;
    let contador = 0;

    while (contador < exponente) {
        resultado *= base;
        contador++;
    }

    console.log(`${base} elevado a la ${exponente} es ${resultado}`);
}

calcularPotencia(2, 3); // Llamada a la función

//5. Punto resuelto en Palabra_salir.html

// 6. Secuencia numérica alternante
function secuenciaAlternante(n) {
    let secuencia = "";
    for (let i = 1; i <= n; i++) {
        secuencia += (i % 2 === 0 ? -i : i) + (i < n ? ", " : "");
    }
    console.log(`Secuencia: ${secuencia}`);
}

secuenciaAlternante(0); // Llamada a la función
