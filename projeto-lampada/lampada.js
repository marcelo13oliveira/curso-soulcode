let lamp = document.getElementById('imagem');
lamp.onclick = function() {
   if (lamp.src.match('lampada-on')) {
    lamp.src="lampada-off.gif";
    alert('Lámpada apagada');
   } else {
    lamp.src="lampada-on.gif";
alert('Lámpada acesa');
}
}