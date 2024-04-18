function concatenar () {

    // LEER CONTENIDO DEL PRIMER INPUT
    let cadena1 = document.getElementById("u-l-cad1").value;
    // LEER CONTENIDO DEL SEGUNDO INPUT
    let cadena2 = document.getElementById("u-l-cad2").value;
    
    // JUNTAR LAS CADENAS
    let resultado = cadena1 + cadena2;

    // MOSTRAR EL RESULTADO POR PANTALLA
    document.getElementById("result-u-l").innerHTML = resultado;

}  


function longitud () {

    let cad1 = document.getElementById("u-r-cad1").value;
    document.getElementById("result-u-r").innerHTML = cad1.length;

}


function reemplazar () {

    let cadena = document.getElementById("d-l-cad").value;
    
    let subcadena1 = document.getElementById("d-l-subcad1").value;
    
    let subcadena2 = document.getElementById("d-l-subcad2").value;

    document.getElementById("result-d-l").innerHTML = cadena.replace(subcadena1, subcadena2);

}

function separar () {

    let cadena = document.getElementById("d-r-cad").value;

    let sepa = document.getElementById("d-r-sep").value;

    let array_palabras = cadena.split(sepa);

    // LIMPIAR CAMPO DE RESULTADO
    document.getElementById("result-d-r").innerHTML ="";

    // RECORRER EL VECTOR DE PALABRAS RESULTADO
    // MOSTRANDO CADA UNA EN UNA LÍNEA
    
    for (let i=0; i<array_palabras.length; i++) {
        document.getElementById("result-d-r").innerHTML += `${array_palabras[i]}<br>`;
    }

}   