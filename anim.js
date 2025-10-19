// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "Hola, ¿qué tal, princesa?", time: 8 },
    { text: "Te quería saludar, también felicitar", time: 11 },
    { text: "No lo puedo evitar, sé que no es tu cumpleaños", time: 14},
    { text: "Pero te felicito por lo hermosa que estás", time: 18 },
    { text: "Nunca había conocido una mujer tan centrada", time: 23  },
    { text: "Tan inteligente, buena y bien educada", time: 27 },
    { text: "Con forma de ser maravillosa de plano", time: 31 },
    { text: "Mi niña, tú eres toda una diosa", time: 35 },
    { text: "Pero te lo confieso", time: 38 },
    { text: "Entre tanta belleza, hay un pequeño detalle", time: 42  },
    { text: "Porque a tu dominó le hace falta una pieza", time: 48 },
    { text: "Alguien que te trate bien, que te sepa querer", time: 54  },
    { text: "Que en un beso intenso te enchine la piel", time: 59 },
    { text: "Que cuando tú estés con él no le importe nada más", time: 62 },
    { text: "Que tus ojos color miel", time: 66 },
    { text: "Alguien que te haga volar, que mire las estrellas", time: 69 },
    { text: "Y con todas ellas tu cara la forme", time: 73 },
    { text: "Y que a la más bella le ponga tu nombre", time: 77 },
    { text: "Sé muy bien que no soy quién", time: 84 },
    { text: "Para darte consejos, pero ahí te lo dejo", time: 86 },
    { text: "Estás hermosísima, sin un defecto", time: 90 },
    { text: "Tú lo tienes todo, te digo la neta", time: 94 },
    { text: "Pero sin mí estás casi completa", time: 98 },
    { text: "♥----♥----♥", time: 107 },
    { text: "♥----I----♥", time: 110 },
    { text: "♥---LOVE---♥", time: 113 },
    { text: "♥---YOU---♥", time: 116 },
    { text: "♥----♥----♥", time: 119 },
    { text: "Alguien que te trate bien, que te sepa querer", time: 121 },
    { text: "Que en un beso intenso te enchine la piel", time: 125 },
    { text: "Que cuando tú estés con él no le importe nada más", time: 128 },
    { text: "Que tus ojos color miel", time: 132 },
    { text: "Alguien que te haga volar, que mire las estrellas", time: 136 },
    { text: "Y con todas ellas tu cara la forme", time: 140 },
    { text: "Y que a la más bella le ponga tu nombre", time: 143 },
    { text: "Sé muy bien que no soy quién", time: 150 },
    { text: "Para darte consejos, pero ahí te lo dejo", time: 153 },
    { text: "Estás hermosísima, sin un defecto", time: 156 },
    { text: "Tú lo tienes todo, te digo la neta", time: 160 },
    { text: "Pero sin mí estás casi completa", time: 164 },
    { text: "Pero sin mí estás casi completa", time: 172 }
];

// Función auxiliar para obtener la duración de una línea.
// La duración es el tiempo de inicio de la siguiente línea menos el tiempo de inicio de la actual.
function getLineDuration(index) {
    if (index < lyricsData.length - 1) {
        return lyricsData[index + 1].time - lyricsData[index].time;
    }
    // Si es la última línea, le damos una duración fija (ej. 10 segundos).
    return 10; 
}


// Animar las letras (VERSION MEJORADA)
function updateLyrics() {
    var delayOffset = 0.5; // Ajuste el desplazamiento para que la letra aparezca un poco antes (ajustable)
    var time = audio.currentTime + delayOffset; // Usar '+' para adelantar, para que la letra aparezca justo a tiempo

    // Encuentra el índice de la línea que debería estar activa
    var currentLineIndex = lyricsData.findIndex((line, index) => {
        // Obtenemos la duración real de la línea
        const duration = getLineDuration(index);
        
        // La línea está activa si la hora actual está entre su 'time' y (su 'time' + su duración)
        return time >= line.time && time < line.time + duration;
    });


    if (currentLineIndex !== -1) {
        var currentLine = lyricsData[currentLineIndex];
        
        // **Nueva Lógica de Transición (más limpia y fluida)**
        
        // 1. Duraciones para la transición
        var fadeInDuration = 0.8; // Duración de la aparición
        var fadeOutDuration = 0.8; // Duración de la desaparición

        // 2. Tiempo de duración real de la línea
        var duration = getLineDuration(currentLineIndex);

        // 3. El tiempo relativo en el que estamos dentro de la línea actual
        var timeInLine = time - currentLine.time;
        
        var opacity = 1; // Por defecto, opacidad completa

        // Efecto de aparición (Fade In)
        if (timeInLine < fadeInDuration) {
            opacity = timeInLine / fadeInDuration;
        } 
        // Efecto de desaparición (Fade Out) - Ocurre justo antes de que la línea termine
        else if (duration - timeInLine < fadeOutDuration) {
            opacity = (duration - timeInLine) / fadeOutDuration;
        }

        // Aplica el efecto de opacidad y el texto
        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        // Restablece la opacidad y el contenido si no hay una línea actual
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

// Escuchar el evento 'timeupdate' del audio en lugar de usar setInterval
// Esto es más eficiente y preciso para la sincronización
audio.addEventListener('timeupdate', updateLyrics);

// Opcional: Si prefieres seguir usando setInterval, esta línea debe permanecer.
// Si usas el 'timeupdate' del audio, puedes comentar o eliminar esta línea.
// setInterval(updateLyrics, 100);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation =
        "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
    setTimeout(function () {
        titulo.style.display = "none";
    }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
