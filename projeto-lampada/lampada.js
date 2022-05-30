let lamp = document.getElementById('imagem');
lamp.onclick = function() {
   if (lamp.src.match('lampada-on')) {
    lamp.src="lampada-off.gif";
    document.getElementById('trocar').innerHTML = "Lâmpada apagada!";
    // alert('Lámpada apagada');
   } else {
    lamp.src="lampada-on.gif";
    document.getElementById('trocar').innerHTML = "Lâmpada acesa!";
}
}