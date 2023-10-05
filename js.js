$(document).ready(function() {
    let currentImage = 1;
    const totalImages = $(".imagenes img").length;

    function changeImage() {
        $(".imagenes img").css("transform", "translateX(-" + (currentImage - 1) * 100 + "%)");
        currentImage = (currentImage % totalImages) + 1;
    }

    setInterval(changeImage, 300000); // Cambia la imagen cada 30 segundos
});

