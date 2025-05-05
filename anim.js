// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hola, ¿qué tal, princesa?", time: 6 },
  { text: "Te quería saludar, también felicitar", time: 8 },
  { text: "No lo puedo evitar, sé que no es tu cumpleaños", time: 12},
  { text: "Pero te felicito por lo hermosa que estás", time: 15 },
  { text: "Nunca había conocido una mujer tan centrada", time: 21  },
  { text: "Tan inteligente, buena y bien educada", time: 25 },
  { text: "Con forma de ser maravillosa de plano", time: 29 },
  { text: "Mi niña, tú eres toda una diosa", time: 31 },
  { text: "Pero te lo confieso", time: 35 },
  { text: "Entre tanta belleza, hay un pequeño detalle", time: 38  },
  { text: "Porque a tu dominó le hace falta una pieza", time: 44 },
  { text: "Alguien que te trate bien, que te sepa querer", time: 51  },
  { text: "Que en un beso intenso te enchine la piel", time: 55 },
  { text: "Que cuando tú estés con él no le importe nada más", time: 57 },
  { text: "Que tus ojos color miel", time: 62 },
  { text: "Alguien que te haga volar, que mire las estrellas", time: 65 },
  { text: "Y con todas ellas tu cara la forme", time: 70 },
  { text: "Y que a la más bella le ponga tu nombre", time: 73 },
  { text: "Sé muy bien que no soy quién", time: 80 },
  { text: "Para darte consejos, pero ahí te lo dejo", time: 83 },
  { text: "Estás hermosísima, sin un defecto", time: 86 },
  { text: "Tú lo tienes todo, te digo la neta", time: 90 },
  { text: "Pero sin mí estás casi completa", time: 94 },
  { text: "♥----♥----♥", time: 96 },
  { text: "♥----I----♥", time: 100 },
  { text: "♥---LOVE---♥", time: 104 },
  { text: "♥---YOU---♥", time: 108 },
  { text: "♥----♥----♥", time: 112 },
  { text: "Alguien que te trate bien, que te sepa querer", time: 115 },
  { text: "Que en un beso intenso te enchine la piel", time: 120 },
  { text: "Que cuando tú estés con él no le importe nada más", time: 124 },
  { text: "Que tus ojos color miel", time: 127 },
  { text: "Alguien que te haga volar, que mire las estrellas", time: 132 },
  { text: "Y con todas ellas tu cara la forme", time: 136 },
  { text: "Y que a la más bella le ponga tu nombre", time: 140 },
  { text: "Sé muy bien que no soy quién", time: 146 },
  { text: "Para darte consejos, pero ahí te lo dejo", time: 149 },
  { text: "Estás hermosísima, sin un defecto", time: 153 },
  { text: "Tú lo tienes todo, te digo la neta", time: 155 },
  { text: "Pero sin mí estás casi completa", time: 160 },
  { text: "Pero sin mí estás casi completa", time: 165 },
  { text: "Pero sin mí estás casi completa", time: 170 }
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
