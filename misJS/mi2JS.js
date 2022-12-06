let temporizador;
function desplazarTexto(){
    let texto = document.getElementById("capaTexto").innerHTML;
    texto = texto.substring(1, texto.length) + texto.substring(0,1);
    document.getElementById("capaTexto").innerHTML = texto;
}
function arrancarRotativo(){
    temporizador = setInterval(desplazarTexto,100);
}
function detenerRotativo(){
    clearInterval(temporizador);
}