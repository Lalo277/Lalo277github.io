// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tú te vas", time: 0 },
  { text: "No volverás", time: 7 },
  { text: "¿Y yo que haré?", time: 14 },
  { text: "No moriré", time: 21 },
  { text: "¿De casualidad será que tú conocerás", time: 28 },
  { text: "Alguien con tu cara linda y tu personalidad?", time: 35 },
  { text: "Que le guste el cine y los libros que lees tú", time: 42 },
  { text: "Que sea independiente y tan inteligente como tú", time: 49 },
  { text: "Que sea franca y que su pelo huela a tu champú", time: 56 },
  { text: "Pues si no puedo estar contigo quiero estar con alguien como", time: 63 },
  { text: "Tú verás", time: 70 },
  { text: "No podrás", time: 77 },
  { text: "Detener", time: 84 },
  { text: "Mi querer", time: 91 },
  { text: "¿No será que tienes a una amiga por ahí", time: 98 },
  { text: "Que pudieras presentarme y sea perfecta para mí?", time: 105 },
  { text: "Que me hable de ciencia y que disfrute ir a acampar", time: 112 },
  { text: "Que en lugar de andar en coche, ella prefiera caminar", time: 119 },
  { text: "Que quiera ir en bici de Tanzania a Katmandú", time: 126 },
  { text: "Pues si no puedo estar contigo quiero estar con alguien como tú", time: 133 },
  { text: "Tú jamás", time: 140 },
  { text: "Me querrás", time: 147 },
  { text: "Buscaré alguien más", time: 154 },
  { text: "Que su sueño sea ganar el Nobel de la Paz", time: 161 },
  { text: "Que no coma carne pues conoce bien lo que hay detrás", time: 168 },
  { text: "Que sea deportista y que le encante cocinar", time: 175 },
  { text: "Que siempre le sobre tiempo para salir a bailar", time: 182 },
  { text: "Que sea una activista con sentido del humor", time: 189 },
  { text: "Que le excite desnudarse en frente del ventilador", time: 196 },
  { text: "Que le encante el arte y los guaraches de bambú", time: 203 },
  { text: "Pues si no puedo estar contigo quiero estar con alguien como tú", time: 210 },
  { text: "Pues si no puedo estar contigo quiero estar con alguien como tú", time: 217 }
];

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