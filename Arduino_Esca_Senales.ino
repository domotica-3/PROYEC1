// Código de escalización de señales para Arduino (Archivo: codigos/Arduino_Esca_Senales)
#define LM35_PIN A0  // Pin de conexión para el sensor LM35
#define MQ6_PIN A1   // Pin de conexión para el sensor MQ-6
#define VREF 5.0     // Referencia de voltaje para la conversión analógica a digital

void setup() {
    Serial.begin(9600);  // Inicia la comunicación serial a 9600 baudios
}

void loop() {
    int lm35_raw = analogRead(LM35_PIN);  // Lectura analógica del sensor LM35
    int mq6_raw = analogRead(MQ6_PIN);    // Lectura analógica del sensor MQ-6

    float temperature = (lm35_raw / 1024.0) * VREF * 100;  // Escalización de la señal del LM35

    // Filtro de paso bajo para suavizar las lecturas de temperatura
    static float filtered_temperature = temperature;
    filtered_temperature = filtered_temperature * 0.9 + temperature * 0.1;

    // Envío de datos procesados a la consola serial
    Serial.print("Temperature: ");
    Serial.print(filtered_temperature);
    Serial.print(" C, MQ-6 Raw: ");
    Serial.println(mq6_raw);

    // Transmisión de datos al ESP32 Maestro
    // ... (Código para transmisión de datos)
}