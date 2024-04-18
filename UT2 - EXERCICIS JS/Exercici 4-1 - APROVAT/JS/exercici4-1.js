function Analitzar() {
    
    let nota = document.getElementById("nota_numerica").value;
    let frase;
    if (nota < 5) {
        frase = "HAS SUSPÈS";
    } else {
        frase = "HAS APROVAT";
    }
    
    document.getElementById("result").innerHTML = frase;
    document.getElementById("result").style.color = "black";

}