$(document).ready(function() {
    // Array de nombres de imágenes
    var imagenes = ["imagenes/Casa.jpg", "imagenes/diagrama_normativa_isa.jpg", "imagenes/esquema_conexiones.jpg"];
    var indice = 0; // Índice actual de la imagen

    // Función para cambiar la imagen
    function cambiarImagen() {
        $("#imagen1").attr("src", imagenes[indice]);
        // Incrementa el índice o reinícialo si llega al final
        indice = (indice + 1) % imagenes.length;
    }

    // Llama a la función para cambiar la imagen cada cierto tiempo (por ejemplo, cada 3 segundos)
    setInterval(cambiarImagen, 3000);
});
