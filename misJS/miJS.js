function desplazarTexto(){
    var texto = document.getElementById("capaTexto").innerHTML;
    texto = texto.substring(1, texto.length) + texto.substring(0,1);
    document.getElementById("capaTexto").innerHTML = texto;
}
function arrancarRotativo(){
    setInterval(desplazarTexto,125);
}
