function Calcula () {
    // LEE EL DATO DEL CAMPO "total" Y LO GUARDA EN LA 
    // VARIABLE tot
    let tot = document.getElementById("total").value;
    
    // LEE EL DATO DEL CAMPO "començals" Y LO GUARDA
    // EN LA VARIABLE comen
    let comen = document.getElementById("començals").value;

    // DEFINIMOS LA VARIABLE divisio Y HACEMOS LA OPERACIÓN
    // AJUSTÁNDOLA A DOS DECIMALES .toFixed(2)
    let divisio = (tot / comen).toFixed(2);

    // MOSTRAMOS POR PANTALLA EN EL id "texto" EL RESULTADO
    // DE LA OPERACIÓN
    document.getElementById("texto").innerHTML = `Heu de pagar ${divisio} € per persona`;

    // document.getElementById("texto").innerHTML = "Heu de pagar " + divisio + "€ per persona";
}