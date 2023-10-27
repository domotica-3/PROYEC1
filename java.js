// Función para cargar el contenido del archivo Arduino .ino
function loadArduinoCode() {
    // Ruta al archivo Arduino .ino

    const arduinoCodeFilePath = "Codigos_arduino_ESPArduino_Esca_Senales/Arduino_Esca_Senales.ino";

    // Realizar una solicitud para cargar el archivo
    fetch(arduinoCodeFilePath)
        .then(response => response.text())
        .then(code => {
            // Mostrar el código en la sección correspondiente
            const arduinoCodeContent = document.getElementById("arduino-code-content");
            arduinoCodeContent.textContent = code;
            prettyPrint(arduinoCodeContent);
        })
        .catch(error => {
            console.error('Error al cargar el archivo:', error);
        });
}

// Llamar a la función para cargar el código cuando se cargue la página
window.addEventListener('load', loadArduinoCode);
