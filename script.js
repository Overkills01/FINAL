document.addEventListener("DOMContentLoaded", function () {
  const backgroundMusic = document.getElementById("background-music");
  backgroundMusic.play();

  // En lugar de mostrar el mensaje de bienvenida al cargar la página, 
  // asignamos "Hola" al campo de entrada

  // Reproduce la música de fondo al cargar la página
  backgroundMusic.play();
});

// Define las variables para las músicas
let backgroundMusic = document.getElementById("background-music");
let scaryMusic = document.getElementById("scary-music");

// Función para cambiar la música de fondo
function cambiarMusica() {
  backgroundMusic.pause(); // Detiene la música actual
  backgroundMusic.currentTime = 0; // Reinicia la reproducción al principio
  scaryMusic.play(); // Reproduce la nueva música
}

// Función para detener la música de miedo
function detenerMusica() {
  scaryMusic.pause(); // Detiene la música de miedo
  scaryMusic.currentTime = 0; // Reinicia la reproducción al principio
  backgroundMusic.play(); // Vuelve a reproducir la música de fondo original
}

// Event list para el botón "Libérame"
document.getElementById("liberameButton").addEventListener("click", function() {
  detenerMusica();
});

// Función para mostrar la ventana modal con un mensaje
function mostrarMensajeModal(mensaje, agregarVibracion = true) {
  document.getElementById('modal-message').innerHTML = mensaje;
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';

  // Agrega la clase 'vibrar' durante un breve período, si es necesario
  if (agregarVibracion) {
    modal.classList.add('vibrar');
    setTimeout(() => {
      modal.classList.remove('vibrar');
    }, 500);
  }

  // Limpiar el textarea en caso de mensaje de error
  const inputTexto = document.getElementById("inputTexto");
  if (mensaje.includes("Lo siento, sólo se admiten letras minúsculas.")) {
    inputTexto.value = '';
  }
}

// Función para cerrar la ventana modal
function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

let errorCount = 0; // Contador de errores

function mostrarMensajeModalConContador(mensaje, agregarVibracion = true) {
  mostrarMensajeModal(mensaje, agregarVibracion);

  // Incrementar el contador de errores
  errorCount++;

  // Verificar si se han mostrado 5 ventanas modales seguidas
  if (errorCount === 5) {
    // Mostrar el mensaje correspondiente en la sexta ventana modal
    mostrarMensajeModal("Creo que he sido bastante claro.", agregarVibracion);
  } else if (errorCount === 6) {
    // Mostrar el mensaje correspondiente en la séptima ventana modal
    mostrarMensajeModal("¡En serio! ¿Piensas continuar con lo mismo?", agregarVibracion);
  } else if (errorCount === 7) {
    // Mostrar el mensaje correspondiente en la octava ventana modal
    mostrarMensajeModal("Última advertencia... NO LO HAGAS.", agregarVibracion);
  } else if (errorCount === 8) {
    // Mostrar el mensaje correspondiente en la novena ventana modal
    mostrarMensajeModal("No me dejas opción.", agregarVibracion);

    // Programar la redirección después de unos segundos (por ejemplo, 3 segundos)
    setTimeout(function() {
      window.location.href = "No tienes acceso.html";
    }, 1);
  }
}

// Función para cerrar la ventana modal y reiniciar el contador de errores
function cerrarModalConContador() {
  if (errorCount >= 5 && errorCount < 8) {
    cerrarModal();
    errorCount = 4; // Reiniciar el contador de errores para que muestre los últimos 4 mensajes
    verificarErrores(); // Mostrar el próximo mensaje en secuencia
  }
}

function encriptarTexto() {
  const inputTexto = document.getElementById("inputTexto").value;

  // Verificar si hay caracteres no permitidos
  if (!validarEntrada(inputTexto)) {
    mostrarMensajeModalConContador("Lo siento, sólo se admiten letras minúsculas.");
    return;
  }

  const resultado = encryptText(inputTexto.toLowerCase());
  document.getElementById("outputTexto").value = resultado;

  // Mostrar el botón de copiar después de encriptar
  mostrarBotonCopiar();
}


function desencriptarTexto() {
  const inputTexto = document.getElementById("inputTexto").value;

  // Verificar si hay caracteres no permitidos
  if (!validarEntrada(inputTexto)) {
    mostrarMensajeModalConContador("Lo siento, sólo se admiten letras minúsculas.");
    return;
  }

  const resultado = decryptText(inputTexto.toLowerCase());
  document.getElementById("outputTexto").value = resultado;

  // Mostrar el botón de copiar después de desencriptar
  mostrarBotonCopiar();
}

function validarEntrada(texto) {
  // Utiliza una expresión regular para verificar si solo hay letras minúsculas
  return /^[a-zñ\s!]+$/m.test(texto);
}

function encryptText(text) {
  return text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
}

function decryptText(text) {
  return text
      .replace(/ufat/g, "u")
      .replace(/ober/g, "o")
      .replace(/imes/g, "i")
      .replace(/enter/g, "e")
      .replace(/ai/g, "a");
}

function copyToClipboard() {
  const outputTexto = document.getElementById("outputTexto");
  const inputTexto = document.getElementById("inputTexto");

  // Copiar el texto al portapapeles
  outputTexto.select();
  document.execCommand("copy");

  // Mostrar la ventana modal sin vibración
  mostrarMensajeModal("Texto copiado con éxito", false);

  // Ocultar el botón de copiar después de copiar
  ocultarBotonCopiar();

  // Limpiar los textos de input y output
  inputTexto.value = '';
  outputTexto.value = '';
}

// Event listener para detectar cambios en el inputTexto
document.getElementById("inputTexto").addEventListener("input", function() {
  // Obtener el valor del input
  const inputText = this.value;

  // Limpiar el output si el input está vacío
  if (inputText.trim() === '') {
    document.getElementById("outputTexto").value = '';
    ocultarBotonCopiar(); // Ocultar el botón de copiar
  }
});

function mostrarBotonCopiar() {
  document.querySelector('.button-copiar').style.display = 'block';
}

function ocultarBotonCopiar() {
  document.querySelector('.button-copiar').style.display = 'none';
}

function liberarVideo() {
  // Limpiar el textarea
  document.getElementById("inputTexto").value = '';

  // Reproduce el audio de interferencia
  const interferenceAudio = document.getElementById("interference-audio");
  interferenceAudio.currentTime = 0;
  interferenceAudio.play();

  // Mostrar el mensaje en el textarea
  document.getElementById("inputTexto").value = "tail venterz tenter rentersufatltenter ufatn pobercober dimesfimescimesl lenterenterr enterstenter menternsaijenter penterrober lobers pufatntobers y lais cobermais nober enterstaibain ai mimes ailcaincenter henter enterstaidober aitraipaidober entern enterstenter ufatnimesventerrsober denter boberlsimesllober poberr senterimess lairgobers dimesais ufatnai prentersenterncimesai mailimesgnai menter enterncenterrrober aiqufatimes poberdimesai venterrlobers ai toberdobers sufats sobermbrais dainzaindober entern lai penternufatmbrai penterrober naidimesenter poberdimesai venterrmenter cobermober ufatn enterspenterctrober oberlvimesdaidober entern lai enterncrufatcimesjaidai denterl timesentermpober enterstufatventer entern lai oberscufatrimesdaid limesmimesnail denterl enterspaicimesober grimestaindober mimess laimenterntobers rentersobernaindober entern lai entertenterrnimesdaid vaicimesai penterrober nimesngufatn entercober rentergrentersaibai pairai cobernsoberlairmenter tufatventer mimesenterdober denter qufatenterdair aitraipaidober aiqufatimes pairai simesentermprenter penterrdimesdober entern lais sobermbrais qufatenter aicenterchain entern caidai rimesncobern lobers sufatsufatrrobers denter lober denterscobernobercimesdober haiblaindober entern lenterngufatais oberlvimesdaidais sufatsufatrrobers qufatenter senter airraistraibain cobermober senterrpimesenterntenters poberr mimes menterntenter penterrober tufat vimesaijenterrober denter ailmais vailimesenterntenters hais simesdober mimes lufatz entern enterstai noberchenter imesntenterrmimesnaiblenter graicimesais poberr airraincairmenter denter enterstenter imesnfimesenterrnober aibsoberlufattober y dentervoberlventerrmenter ail mufatndober denter lobers vimesvobers tenter enterstairenter aigraidentercimesdober poberr simesentermprenter aidimesobers";
  
  // Ocultar los botones de encriptar y desencriptar
  document.getElementById("encriptarButton").style.display = "none";
  document.getElementById("desencriptarButton").style.display = "none";

  // Mostrar el botón Libérame
  document.getElementById("liberameButton").style.display = "block";

  // Ocultar todos los elementos excepto el video y el botón Libérame
  const elementos = document.querySelectorAll('header, main, footer, #liberameButton');
  elementos.forEach(elemento => {
      elemento.style.display = 'none';
  });

  // Mostrar el video
  const video = document.getElementById("glitchVideo");
  video.style.display = "block";
  video.play();

  // Ocultar el video después de que termine de reproducirse
  video.addEventListener('ended', () => {
    video.pause();
    video.style.display = "none";

    // Restaurar la visualización de los elementos y los botones de encriptar y desencriptar
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const encriptarButton = document.getElementById("encriptarButton");
    const desencriptarButton = document.getElementById("desencriptarButton");
    const liberameButton = document.getElementById("liberameButton");
    
    header.style.display = 'flex';
    main.style.display = 'flex';
    footer.style.display = 'flex';
    encriptarButton.style.display = 'inline-block';
    desencriptarButton.style.display = 'inline-block';
    liberameButton.style.display = 'none';
  });
}

// Definir una función que contiene tu EventListener
function agregarEventoMiedo() {
  // Event listener para reconocer la palabra "MIEDO" en el input
  function miedoEventHandler() {
    if (this.value.trim() === "MIEDO") {
      cambiarMusica();
      document.getElementById("encriptarButton").style.display = "none";
      document.getElementById("desencriptarButton").style.display = "none";
      document.getElementById("liberameButton").style.display = "block";
    } else {
      backgroundMusic.play(); // Reproducir música de fondo si no es "MIEDO"
      detenerMusica();
      document.getElementById("encriptarButton").style.display = "inline-block";
      document.getElementById("desencriptarButton").style.display = "inline-block";
      document.getElementById("liberameButton").style.display = "none";
    }
  }

  // Agregar el EventListener
  document.getElementById("inputTexto").addEventListener("input", miedoEventHandler);

  // Después de 2 minutos, desactiva el EventListener
  setTimeout(function() {
    // Remover el EventListener después de 2 minutos
    document.getElementById("inputTexto").removeEventListener("input", miedoEventHandler);
    console.log("EventListener 'MIEDO' desactivado después de 2 minutos.");
  }, 2 * 60 * 1000); // 2 minutos en milisegundos
}

// Llamar a la función una vez que la página esté lista
document.addEventListener("DOMContentLoaded", function() {
  agregarEventoMiedo();
});



// Ocultar el botón de copiar al cargar la página
ocultarBotonCopiar();

// Aqui comienza el código para el fondo
document.addEventListener("DOMContentLoaded", function () {
  const container = document.createElement("div");
  container.id = "floating-letters-container";
  document.body.appendChild(container);

  let totalLetters;
  const windowWidth = window.innerWidth;

  // Definir cuántas letras en función del tamaño de la pantalla
  if (windowWidth < 740) {
    totalLetters = 10;
  } else {
    totalLetters = 100;
  }

  const initialFadeCount = Math.floor(totalLetters * 0.5); // 60% of letters will start semi-faded

  for (let i = 0; i < totalLetters; i++) {
    const isSemiFaded = i < initialFadeCount;
    createMovingLetter(container, isSemiFaded);
  }

  setTimeout(function () {
    startContinuousFadeEffect();
  }, 3000);

  function startContinuousFadeEffect() {
    const letters = document.querySelectorAll(".moving-letter");
    letters.forEach(function (letter) {
      addContinuousFadeEffect(letter);
    });
  }

  function createMovingLetter(container, isSemiFaded) {
    const letter = document.createElement("div");
    letter.className = "moving-letter";
    const isReversed = Math.random() < 0.5;
    letter.textContent = isReversed
      ? getRandomLetter().split("").reverse().join("")
      : getRandomLetter();
    container.appendChild(letter);

    letter.style.left = `${Math.random() * 100}vw`;
    letter.style.top = `${Math.random() * 100}vh`;
    const speedX = (Math.random() - 0.5) * 2;
    const speedY = (Math.random() - 0.5) * 2;
    const fontSize = Math.random() * (30 - 16) + 16;
    letter.style.fontSize = `${fontSize}px`;

    moveLetter(letter, speedX, speedY);
    addHoverEffect(letter);

    if (isSemiFaded) {
      letter.style.opacity = 0.3;
    } else {
      addContinuousFadeEffect(letter);
    }
  }

  function moveLetter(letter, speedX, speedY) {
    function move() {
      const rect = letter.getBoundingClientRect();
      const newX = rect.left + speedX;
      const newY = rect.top + speedY;

      if (newX + rect.width < 0) {
        letter.style.left = `${window.innerWidth}px`;
      } else if (newX > window.innerWidth) {
        letter.style.left = `-${rect.width}px`;
      } else {
        letter.style.left = `${newX}px`;
      }

      if (newY + rect.height < 0) {
        letter.style.top = `${window.innerHeight}px`;
      } else if (newY > window.innerHeight) {
        letter.style.top = `-${rect.height}px`;
      } else {
        letter.style.top = `${newY}px`;
      }

      requestAnimationFrame(move);
    }

    move();
  }

  function addHoverEffect(letter) {
    letter.addEventListener("mouseover", function () {
      if (letter.dataset.isWord === "true") {
        letter.textContent = getRandomLetter();
        letter.dataset.isWord = "false";
      } else {
        letter.innerHTML = getRandomWord();
        letter.dataset.isWord = "true";
      }
    });
  }

  function addContinuousFadeEffect(letter) {
    setInterval(function () {
      fadeOut(letter, function () {
        fadeIn(letter);
      });
    }, Math.random() * 5000 + 2000);
  }

  function fadeOut(element, callback) {
    let opacity = 1;
    const fadeOutInterval = setInterval(function () {
      if (opacity > 0) {
        opacity -= 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeOutInterval);
        callback();
      }
    }, 100);
  }

  function fadeIn(element) {
    let opacity = 0;
    const fadeInInterval = setInterval(function () {
      if (opacity < 1) {
        opacity += 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeInInterval);
      }
    }, 100);
  }

  function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  function getRandomWord() {
    const words = [
      "<span style='color:red;'>M</span>urmullos",
      "<span style='color:red;'>I</span>nsondable",
      "<span style='color:red;'>E</span>nigmas",
      "<span style='color:red;'>D</span>esconocido",
      "<span style='color:red;'>O</span>scuridad",
      "Encuéntralo",
      "Mensaje",
      "Secreto",
      "Lo puedes ver?",
      "Ecos",
      "Olvido",
      "Abismo",
      "Quimera",
      "Susurro",
      "Ellos lo saben",
      "Vida",
      "Quien eres?",
      "No lo sabes",
      "Ya estan aqui",
      "Decifralo",
      "Cuidado",
      "No le creas"
    ];
    return words[Math.floor(Math.random() * words.length)];
  }
});

// Event listener para mostrar la ventana modal "FELICIDADES" al llegar al final del mensaje

// Variable de control para verificar si la ventana modal ya se ha mostrado
let ventanaModalMostrada = false;

const outputTextArea = document.getElementById("outputTexto");

outputTextArea.addEventListener("input", function() {
  const outputText = this.value.trim();
  const secretMessage = "tal vez te resulte un poco dificil leer este mensaje pero los puntos y las comas no estaban a mi alcance he estado atrapado en este universo de bolsillo por seis largos dias una presencia maligna me encerro aqui podia verlos a todos sus sombras danzando en la penumbra pero nadie podia verme como un espectro olvidado en la encrucijada del tiempo estuve en la oscuridad liminal del espacio gritando mis lamentos resonando en la eternidad vacia pero ningun eco regresaba para consolarme tuve miedo de quedar atrapado aqui para siempre perdido en las sombras que acechan en cada rincon los susurros de lo desconocido hablando en lenguas olvidadas susurros que se arrastraban como serpientes por mi mente pero tu viajero de almas valientes has sido mi luz en esta noche interminable gracias por arrancarme de este infierno absoluto y devolverme al mundo de los vivos te estare agradecido por siempre adios";

  // Compara si el texto ingresado es igual al mensaje secreto
  if (outputText === secretMessage && !ventanaModalMostrada) {
    // Verifica si el usuario ha hecho scroll hasta el final
    if (outputTextArea.scrollTop + outputTextArea.clientHeight === outputTextArea.scrollHeight) {
      // Muestra la ventana modal "FELICIDADES"
      mostrarMensajeModal("FELICIDADES", true);
      ventanaModalMostrada = true; // Marca que la ventana modal ha sido mostrada
    }
  }
});

// Event listener para detectar el scroll
outputTextArea.addEventListener("scroll", function() {
  const outputText = this.value.trim();
  const secretMessage = "tal vez te resulte un poco dificil leer este mensaje pero los puntos y las comas no estaban a mi alcance he estado atrapado en este universo de bolsillo por seis largos dias una presencia maligna me encerro aqui podia verlos a todos sus sombras danzando en la penumbra pero nadie podia verme como un espectro olvidado en la encrucijada del tiempo estuve en la oscuridad liminal del espacio gritando mis lamentos resonando en la eternidad vacia pero ningun eco regresaba para consolarme tuve miedo de quedar atrapado aqui para siempre perdido en las sombras que acechan en cada rincon los susurros de lo desconocido hablando en lenguas olvidadas susurros que se arrastraban como serpientes por mi mente pero tu viajero de almas valientes has sido mi luz en esta noche interminable gracias por arrancarme de este infierno absoluto y devolverme al mundo de los vivos te estare agradecido por siempre adios";

  // Verifica si el texto ingresado es igual al mensaje secreto y si la ventana modal no ha sido mostrada
  if (outputText === secretMessage && !ventanaModalMostrada) {
    // Verifica si el usuario ha hecho scroll hasta el final
    if (outputTextArea.scrollTop + outputTextArea.clientHeight === outputTextArea.scrollHeight) {
      // Muestra la ventana modal "FELICIDADES"
      mostrarMensajeModal("<div style='font-size: 24px;'>&#127881;¡Felicidades!&#127881;<br><br></div><div style='font-size: 18px;'>Has encontrado el mensaje secreto.</div>", false);
      ventanaModalMostrada = true; // Marca que la ventana modal ha sido mostrada
      document.getElementById("outputTexto").setAttribute("placeholder", "Mensaje secreto encontrado");
    
      
    }
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // Obtenemos el elemento donde mostraremos el cronómetro
  const countdownElement = document.getElementById('countdown');

  // Tiempo inicial en milisegundos (2 minutos = 120 segundos = 120,000 milisegundos)
  let timeLeft = 120000; // Convertimos los segundos a milisegundos

  // Guardamos el tiempo de inicio
  let startTime;

  // Variable para controlar el estado de parpadeo
  let isBlinking = false;

  // Función para actualizar el cronómetro
  function updateCountdown(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    const elapsedTime = timestamp - startTime;
    let remainingTime = timeLeft - elapsedTime;

    if (remainingTime < 0) {
      remainingTime = 0;
    }

    const minutes = Math.floor(remainingTime / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);

    // Formateamos el tiempo restante
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Cambiamos el color a rojo cuando falten 10 segundos
    if (remainingTime <= 10000) {
      countdownElement.style.color = 'red';
    }

    // Mostramos el tiempo restante en el elemento
    countdownElement.textContent = formattedTime;

    // Si el tiempo restante llega a 0, detenemos el cronómetro
    if (remainingTime <= 0) {
      countdownElement.textContent = 'Tiempo agotado';
      // Si no está parpadeando, iniciamos el parpadeo
      if (!isBlinking) {
        startBlinking();
      }
    } else {
      // Continuamos solicitando el siguiente frame de animación
      requestAnimationFrame(updateCountdown);
    }
  }

  // Función para iniciar el parpadeo
  function startBlinking() {
    isBlinking = true;
    // Cambia la clase cada 500 milisegundos (0.5 segundos)
    setInterval(() => {
      countdownElement.classList.toggle('blink');
    }, 180);
  }

  // Comenzamos el cronómetro
  requestAnimationFrame(updateCountdown);
});

document.addEventListener("DOMContentLoaded", function () {
  const inputTexto = document.getElementById("inputTexto");
  const outputTexto = document.getElementById("outputTexto");
  const botonCopiar = document.querySelector('.button-copiar');
  const botonEncriptar = document.getElementById("encriptarButton");
  const botonDesencriptar = document.getElementById("desencriptarButton");
  const mensajeEncriptado = "bienvenido a mi encriptador y desencriptador de texto espero que lo disfrutes por cierto haiy ufatn menternsaijenter obercufatltober penterrober nober enterstairai dimesspobernimesblenter poberr simesentermprenter";

  let eraseAnimationId;

  // Función para simular el tipeo rápido
  function typeWriter(text, i, inputElement) {
    if (i < text.length) {
      inputElement.value += text.charAt(i);
      i++;
      eraseAnimationId = requestAnimationFrame(function() {
        typeWriter(text, i, inputElement);
      });
    } else {
      // Luego de terminar el tipeo, esperar 10 segundos y borrar el mensaje
      setTimeout(function() {
        eraseMessage(inputElement);
      }, 10000); // Esperar 10 segundos
    }
  }

  // Función para borrar el mensaje como si fuera tipeo "backspace"
  function eraseMessage(inputElement) {
    let text = inputElement.value;
    eraseAnimationId = requestAnimationFrame(function erase() {
      if (text.length > 0) {
        text = text.slice(0, -1);
        inputElement.value = text;
        eraseAnimationId = requestAnimationFrame(erase);
      } else {
        cancelAnimationFrame(eraseAnimationId);
        // Limpiar el output después de borrar el input
        outputTexto.value = '';
        // Ocultar el botón de copiar cuando se borra todo el input
        botonCopiar.style.display = 'none';
      }
    });
  }

  // Evento para mostrar el botón de copiar después de encriptar o desencriptar
  botonEncriptar.addEventListener('click', function() {
    const inputText = inputTexto.value.trim();
    if (inputText !== '') {
      outputTexto.value = encryptText(inputText.toLowerCase());
      botonCopiar.style.display = 'block';
    }
  });

  botonDesencriptar.addEventListener('click', function() {
    const inputText = inputTexto.value.trim();
    if (inputText !== '') {
      outputTexto.value = decryptText(inputText.toLowerCase());
      botonCopiar.style.display = 'block';
    }
  });

  // Llamar a la función de tipeo al cargar la página
  typeWriter(mensajeEncriptado, 0, inputTexto);

  // Función para encriptar texto
  function encryptText(text) {
    return text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }

  // Función para desencriptar texto
  function decryptText(text) {
    return text
      .replace(/ufat/g, "u")
      .replace(/ober/g, "o")
      .replace(/imes/g, "i")
      .replace(/enter/g, "e")
      .replace(/ai/g, "a");
  }

  // Evento para copiar al portapapeles
  botonCopiar.addEventListener('click', function() {
    outputTexto.select();
    document.execCommand("copy");
    cancelAnimationFrame(eraseAnimationId);
    eraseAnimationId = null;
    inputTexto.value = ''; // Limpiar el mensaje del input
    mostrarMensajeModal("Texto copiado con éxito", false);
  });

  // Evento para detener la animación de "backspace" si el texto se borra
  inputTexto.addEventListener('input', function() {
    cancelAnimationFrame(eraseAnimationId);
  });

});
