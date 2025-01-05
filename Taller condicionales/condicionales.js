
//Captura de datos por consola
const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 1. Determinar si una persona puede votar en Colombia
rl.question('Ingrese su edad para verificar si puede votar en Colombia: ', (edad) => {
    if (edad < 18) {
        console.log('No eres mayor de edad, no puedes votar.');
    } 
    else {
        console.log('Puedes votar.');
    }
    rl.close();
});

// 2. Evaluar si un número es divisible por 3 y 5.
rl.question('Ingrese un número para verificar si es divisible por 3 y 5: ', (numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log('El número es divisible por 3 y 5.');
    } 
    else {
        console.log('El número no es divisible por 3 y 5.');
    }
    rl.close();
});

// Calcular el IMC.
rl.question('Ingrese su peso en kg: ', (peso) => {
    rl.question('Ingrese su altura en metros: ', (altura) => {
        const imc = peso / (altura * altura);
        console.log(`Su IMC es: ${imc}`);

        if (imc < 18.5) {
            console.log('Bajo peso');
        }
        else if (imc >= 18.5 && imc < 24.9) {
            console.log('Normal');
        }
        else if (imc >= 25 && imc < 29.9) {
            console.log('Sobrepeso');
        }
        else {
            console.log('Obesidad');
        }   
        
        rl.close();
        });
    });

// 4: Identificar el día de la semana.
rl.question('Ingrese un número del 1 al 7 para identificar el día de la semana: ', (dia) => {
    switch (dia) {
        case '1':
            console.log('Lunes');
            break;
        case '2':
            console.log('Martes');
            break;
        case '3':
            console.log('Miércoles');
            break;
        case '4':
            console.log('Jueves');
            break;
        case '5':
            console.log('Viernes');
            break;
        case '6':
            console.log('Sábado');
            break;
        case '7':
            console.log('Domingo');
            break;
        default:
            console.log('Ingrese un número del 1 al 7');
            break;
    }
    rl.close();
});

//5: Determinar el rango de un número, Solicitar un número y verificar si está en el rango [10, 50].
rl.question('Ingrese un número para verificar si está en el rango [10, 50]: ', (numero) => {
    if (numero >= 10 && numero <= 50) {
        console.log('El número está en el rango [10, 50].');
    } 
    else {
        console.log('El número no está en el rango [10, 50].');
    }
    rl.close();
});

//6: Clasificar un triángulo.
rl.question('Ingrese el primer lado del triángulo: ', (lado1) => {
    rl.question('Ingrese el segundo lado del triángulo: ', (lado2) => {
        rl.question('Ingrese el tercer lado del triángulo: ', (lado3) => {
            if (lado1 === lado2 && lado2 === lado3) {
                console.log('Triángulo equilátero');
            }
            else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
                console.log('Triángulo isósceles');
            }
            else {
                console.log('Triángulo escaleno');
            }
            rl.close();
        });
    });
});

// Tres números y especificar cual es mayor, cual es el que le sigue y cual es el menor
rl.question('Ingrese el primer número: ', (numero1) => {
    rl.question('Ingrese el segundo número: ', (numero2) => {
        rl.question('Ingrese el tercer número: ', (numero3) => {
            if (numero1 > numero2 && numero1 > numero3) {
                console.log(`El número mayor es: ${numero1}`);
                if (numero2 > numero3) {
                    console.log(`El número que le sigue es: ${numero2}`);
                    console.log(`El número menor es: ${numero3}`);
                }
                else {
                    console.log(`El número que le sigue es: ${numero3}`);
                    console.log(`El número menor es: ${numero2}`);
                }
            }
            else if (numero2 > numero1 && numero2 > numero3) {
                console.log(`El número mayor es: ${numero2}`);
                if (numero1 > numero3) {
                    console.log(`El número que le sigue es: ${numero1}`);
                    console.log(`El número menor es: ${numero3}`);
                }
                else {
                    console.log(`El número que le sigue es: ${numero3}`);
                    console.log(`El número menor es: ${numero1}`);
                }
            }
            else {
                console.log(`El número mayor es: ${numero3}`);
                if (numero1 > numero2) {
                    console.log(`El número que le sigue es: ${numero1}`);
                    console.log(`El número menor es: ${numero2}`);
                }
                else {
                    console.log(`El número que le sigue es: ${numero2}`);
                    console.log(`El número menor es: ${numero1}`);
                }
            }
            rl.close();
        });
    });
});
