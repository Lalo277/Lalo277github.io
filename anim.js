// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hola, ¿qué tal, princesa?", time: 6 },
  { text: "Te quería saludar, también felicitar", time: 8 },
  { text: "No lo puedo evitar, sé que no es tu cumpleaños", time: 12 },
  { text: "Pero te felicito por lo hermosa que estás", time: 16 },
  { text: "Nunca había conocido una mujer tan centrada", time: 21  },
  { text: "Tan inteligente, buena y bien educada", time: 25  },
  { text: "Con forma de ser maravillosa de plano", time: 29  },
  { text: "Mi niña, tú eres toda una diosa", time: 33  },
  { text: "Pero te lo confieso", time: 35  },
  { text: "Entre tanta belleza, hay un pequeño detalle", time: 40  },
  { text: "Porque a tu dominó le hace falta una pieza", time: 46  },
  { text: "Alguien que te trate bien, que te sepa querer", time: 53  },
  { text: "Que en un beso intenso te enchine la piel", time: 57  },
  { text: "Que cuando tú estés con él no le importe nada más", time: 59  },
  { text: "Que tus ojos color miel", time: 64 },
  { text: "Alguien que te haga volar, que mire las estrellas", time: 67  },
  { text: "Y con todas ellas tu cara la forme", time: 72 },
  { text: "Y que a la más bella le ponga tu nombre", time: 75 },
  { text: "Sé muy bien que no soy quién", time: 82 },
  { text: "Para darte consejos, pero ahí te lo dejo", time: 85 },
  { text: "Estás hermosísima, sin un defecto", time: 88 },
  { text: "Tú lo tienes todo, te digo la neta", time: 92 },
  { text: "Pero sin mí estás casi completa", time: 96 },
  { text: "♥----♥----♥", time: 100 },
  { text: "♥----I----♥", time: 104 },
  { text: "♥---LOVE---♥", time: 108 },
  { text: "♥---YOU---♥", time: 112 },
  { text: "♥----♥----♥", time: 115 },
  { text: "Alguien que te trate bien, que te sepa querer", time: 117 },
  { text: "Que en un beso intenso te enchine la piel", time: 123 },
  { text: "Que cuando tú estés con él no le importe nada más", time: 126},
  { text: "Que tus ojos color miel", time: 129},
  { text: "Alguien que te haga volar, que mire las estrellas", time: 134},
  { text: "Y con todas ellas tu cara la forme", time: 128 },
  { text: "Y que a la más bella le ponga tu nombre", time: 142 },
  { text: "Sé muy bien que no soy quién", time: 149 },
  { text: "Para darte consejos, pero ahí te lo dejo", time: 151 },
  { text: "Estás hermosísima, sin un defecto", time: 155 },
  { text: "Tú lo tienes todo, te digo la neta", time: 158 },
  { text: "Pero sin mí estás casi completa", time: 162 },
  { text: "Pero sin mí estás casi completa", time: 167 },
  { text: "Pero sin mí estás casi completa", time: 172 }
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
