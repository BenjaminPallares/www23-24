// DECLARACIÓN VARIABLES

let num1 = 2;
let num2 = 3;

// ******** SUMA ************

let result = num1 + num2;

//1.1 Salida por Consola
console.log("La primera suma vale " + result);
// console.log(`La segunda suma vale ${result}`);

//1.2 Salida con document.write
//document.write("La primera suma vale " + result);

//1.3 document.getElementdyId ()
document.getElementById("resultat1").innerHTML = result;



// SOBRECARGA OPERADOR SUMA

let x = 5;
let y = "tortillas";
let result2 = x + y;

console.log("La segunda suma vale " + result2);

// ******** RESTA ************

// Como result está declarada antes, no hace falta volverla a declarar

result = num1 - num2;
console.log("La resta vale " + result);
document.getElementById("resultat2").innerHTML = result;

// ******** producto ************

// Como result está declarada antes, no hace falta volverla a declarar

result = num1 * num2;
console.log("El producto vale " + result);
document.getElementById("resultat3").innerHTML = result;

// ******** DIVISIÓN ************

// Como result está declarada antes, no hace falta volverla a declarar

result = num1 / num2;
console.log("La división vale " + result);
document.getElementById("resultat4").innerHTML = result;

// ******** POTENCIA ************

// Como result está declarada antes, no hace falta volverla a declarar

result = num1 ** num2;
console.log( num1 + " elevado a " + num2 + " vale " + result);
document.getElementById("resultat5").innerHTML = result;

// *********** RESTO DE LA DIVISIÓ O MÓDULO *******

result = num1 % num2;
console.log("El resto de la división vale " + result);
document.getElementById("resultat6").innerHTML = result;

// POSTINCREMENTO y POSTDECREMENTO
// NOTA: DECLARACIONES ANTERIORES
// let num1 = 2;
// let num2 = 3;

num1++; // num1 = num1 + 1;
result = num1;
console.log ("Después del incremento de num1, el resultado vale " + result);
document.getElementById("resultat7").innerHTML = result;

num1--; // num1 = num1 - 1;
result = num1;
console.log ("Después del decremento de num1, el resultado vale " + result);
document.getElementById("resultat8").innerHTML = result;



