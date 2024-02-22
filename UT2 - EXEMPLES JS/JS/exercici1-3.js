
// DECLARACIÓN VARIABLES

let num1 = 2;
let num2 = 3;

// ******** SUMA ************

let result = num1 + num2;

//1.3 document.getElementdyId ()
document.getElementById("salida").innerHTML = "La conga de Lalala";
alert("Después de la Salida");  





// ******** RESTA ************

// Como result está declarada antes, no hace falta volverla a declarar

result = num1 - num2;
console.log("La resta vale " + result);

// ******** producto ************

// Como result está declarada antes, no hace falta volverla a declarar

result = num1 * num2;
console.log("El producto vale " + result);

// ******** DIVISIÓN ************

// Como result está declarada antes, no hace falta volverla a declarar

result = num1 / num2;
console.log("La división vale " + result);

// ******** POTENCIA ************

// Como result está declarada antes, no hace falta volverla a declarar

result = num1 ** num2;
console.log( num1 + " elevado a " + num2 + " vale " + result);

// *********** RESTO DE LA DIVISIÓ O MÓDULO *******

result = num1 % num2;
console.log("El resto de la división vale " + result);

// POSTINCREMENTO y POSTDECREMENTO
// NOTA: DECLARACIONES ANTERIORES
// let num1 = 2;
// let num2 = 3;

num1++; // num1 = num1 + 1;
result = num1;
console.log ("Después del incremento de num1, el resultado vale " + result);


num1--; // num1 = num1 - 1;
result = num1;
console.log ("Después del decremento de num1, el resultado vale " + result);


