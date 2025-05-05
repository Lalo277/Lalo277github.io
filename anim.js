// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hola, ¿qué tal, princesa?", time: 4 },
  { text: "Te quería saludar, también felicitar", time: 7 },
  { text: "No lo puedo evitar, sé que no es tu cumpleaños", time: 10},
  { text: "Pero te felicito por lo hermosa que estás", time: 14 },
  { text: "Nunca había conocido una mujer tan centrada", time: 19  },
  { text: "Tan inteligente, buena y bien educada", time: 23 },
  { text: "Con forma de ser maravillosa de plano", time: 27 },
  { text: "Mi niña, tú eres toda una diosa", time: 31 },
  { text: "Pero te lo confieso", time: 33 },
  { text: "Entre tanta belleza, hay un pequeño detalle", time: 38  },
  { text: "Porque a tu dominó le hace falta una pieza", time: 46-4 },
  { text: "Alguien que te trate bien, que te sepa querer", time: 53-4  },
  { text: "Que en un beso intenso te enchine la piel", time: 57-4 },
  { text: "Que cuando tú estés con él no le importe nada más", time: 59-4 },
  { text: "Que tus ojos color miel", time: 64-4 },
  { text: "Alguien que te haga volar, que mire las estrellas", time: 67-4 },
  { text: "Y con todas ellas tu cara la forme", time: 72-4 },
  { text: "Y que a la más bella le ponga tu nombre", time: 75-4 },
  { text: "Sé muy bien que no soy quién", time: 82-4 },
  { text: "Para darte consejos, pero ahí te lo dejo", time: 85-4 },
  { text: "Estás hermosísima, sin un defecto", time: 88-4 },
  { text: "Tú lo tienes todo, te digo la neta", time: 92-4 },
  { text: "Pero sin mí estás casi completa", time: 96-4 },
  { text: "♥----♥----♥", time: 100-4 },
  { text: "♥----I----♥", time: 104-4 },
  { text: "♥---LOVE---♥", time: 108-4 },
  { text: "♥---YOU---♥", time: 112-4 },
  { text: "♥----♥----♥", time: 115-4 },
  { text: "Alguien que te trate bien, que te sepa querer", time: 117-4 },
  { text: "Que en un beso intenso te enchine la piel", time: 123-4 },
  { text: "Que cuando tú estés con él no le importe nada más", time: 126-4 },
  { text: "Que tus ojos color miel", time: 129-4 },
  { text: "Alguien que te haga volar, que mire las estrellas", time: 134-4 },
  { text: "Y con todas ellas tu cara la forme", time: 128-4 },
  { text: "Y que a la más bella le ponga tu nombre", time: 142-4 },
  { text: "Sé muy bien que no soy quién", time: 149-4 },
  { text: "Para darte consejos, pero ahí te lo dejo", time: 151-4 },
  { text: "Estás hermosísima, sin un defecto", time: 155-4 },
  { text: "Tú lo tienes todo, te digo la neta", time: 158-4 },
  { text: "Pero sin mí estás casi completa", time: 162-4 },
  { text: "Pero sin mí estás casi completa", time: 167-4 },
  { text: "Pero sin mí estás casi completa", time: 172-4 }
]


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

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
