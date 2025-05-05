// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hola, ¿qué tal, princesa?", time: 10 },
  { text: "Te quería saludar, también felicitar", time: 10+2 },
  { text: "No lo puedo evitar, sé que no es tu cumpleaños", time: 14+2 },
  { text: "Pero te felicito por lo hermosa que estás", time: 18+2  },
  { text: "Nunca había conocido una mujer tan centrada", time: 23+2  },
  { text: "Tan inteligente, buena y bien educada", time: 27+2  },
  { text: "Con forma de ser maravillosa de plano", time: 31+2  },
  { text: "Mi niña, tú eres toda una diosa", time: 35+2  },
  { text: "Pero te lo confieso", time: 38+2  },
  { text: "Entre tanta belleza, hay un pequeño detalle", time: 42+2  },
  { text: "Porque a tu dominó le hace falta una pieza", time: 48+2  },
  { text: "Alguien que te trate bien, que te sepa querer", time: 55+2  },
  { text: "Que en un beso intenso te enchine la piel", time: 59+2  },
  { text: "Que cuando tú estés con él no le importe nada más", time: 61+2  },
  { text: "Que tus ojos color miel", time: 66+2 },
  { text: "Alguien que te haga volar, que mire las estrellas", time: 69+2  },
  { text: "Y con todas ellas tu cara la forme", time: 74+2 },
  { text: "Y que a la más bella le ponga tu nombre", time: 77+2 },
  { text: "Sé muy bien que no soy quién", time: 84+2 },
  { text: "Para darte consejos, pero ahí te lo dejo", time: 87+2 },
  { text: "Estás hermosísima, sin un defecto", time: 90+2 },
  { text: "Tú lo tienes todo, te digo la neta", time: 94+2 },
  { text: "Pero sin mí estás casi completa", time: 98+2 },
  { text: "♥----♥----♥", time: 105 },
  { text: "♥----I----♥", time: 109 },
  { text: "♥---LOVE---♥", time: 113 },
  { text: "♥---YOU---♥", time: 117 },
  { text: "♥----♥----♥", time: 120 },
  { text: "Alguien que te trate bien, que te sepa querer", time: 119+2 },
  { text: "Que en un beso intenso te enchine la piel", time: 125+2 },
  { text: "Que cuando tú estés con él no le importe nada más", time: 128+2 },
  { text: "Que tus ojos color miel", time: 131+2 },
  { text: "Alguien que te haga volar, que mire las estrellas", time: 136+2},
  { text: "Y con todas ellas tu cara la forme", time: 140+2 },
  { text: "Y que a la más bella le ponga tu nombre", time: 144+2 },
  { text: "Sé muy bien que no soy quién", time: 151+2 },
  { text: "Para darte consejos, pero ahí te lo dejo", time: 153+2 },
  { text: "Estás hermosísima, sin un defecto", time: 157+2 },
  { text: "Tú lo tienes todo, te digo la neta", time: 160+2 },
  { text: "Pero sin mí estás casi completa", time: 164+2 },
  { text: "Pero sin mí estás casi completa", time: 172 },
  { text: "Pero sin mí estás casi completa", time: 175 }
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
