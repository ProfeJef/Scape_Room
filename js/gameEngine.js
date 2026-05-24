// gameEngine.js

// Estado inicial del juego
const GAME_STATE = {
  startTime: null,
  duration: 45 * 60, // 45 minutos
  currentTime: null,
  retos: [
    {
      id: 1,
      titulo: "Reto 1: Alineación de objetivos",
      enunciado: "Elige la actividad que mejor se alinea con el objetivo curricular: 'El estudiante justifica el uso de productos notables en contextos de área y volumen'.",
      opciones: [
        {
          id: "a1",
          texto: "Resolver 20 ejercicios tipo prueba de selección múltiple.",
          correcta: false,
          feedback:
            "Optar por ejercicios descontextualizados favorece la memorización, no la justificación. El objetivo curricular exige comprensión profunda más que repetición mecánica."
        },
        {
          id: "a2",
          texto: "Analizar el diseño de un mural escolar usando el cuadrado de un binomio.",
          correcta: true,
          feedback:
            "Este tipo de tarea conecta algebra con realidad, permitiendo argumentar el uso de productos notables en contextos de área. Favorece el aprendizaje significativo y crítico."
        }
      ]
    },
    {
      id: 2,
      titulo: "Reto 2: Evaluación formativa",
      enunciado: "El profesor quiere reemplazar un examen tradicional sumativo por una evaluación procesual. ¿Qué estrategia es más coherente con la evaluación formativa?",
      opciones: [
        {
          id: "b1",
          texto: "Reemplazar el examen por una serie de tareas con calificación global al final.",
          correcta: false,
          feedback:
            "Si se mantiene el enfoque de calificación global al final, se sigue priorizando resultado sobre proceso. La evaluación formativa implica retroalimentación continua y oportunidad de ajuste."
        },
        {
          id: "b2",
          texto: "Implementar rúbricas y retroalimentación escrita en cada tarea, permitiendo reenvíos con ajustes.",
          correcta: true,
          feedback:
            "Este enfoque permite al estudiante revisar errores, hacer ajustes y aprender de la retroalimentación, coherente con una evaluación formativa que acompaña el aprendizaje en lugar de solo juzgarlo."
        }
      ]
    },
    {
      id: 3,
      titulo: "Reto 3: Gamificación ética",
      opciones: [
        {
          id: "c1",
          texto: "Entregar puntos y premios solo por responder rápido, sin importar el razonamiento.",
          correcta: false,
          feedback:
            "Esta mecánica favorece el conductismo superficial, promoviendo la respuesta rápida sobre la profundidad del pensamiento. La gamificación ética debe sostener el razonamiento, la reflexión y el sentido del reto."
        },
        {
          id: "c2",
          texto: "Usar puntos para premiar justificaciones completas, variedad de estrategias y colaboración entre pares.",
          correcta: true,
          feedback:
            "Este diseño de mecánica refuerza el pensamiento crítico y la colaboración, alineando la gamificación con el aprendizaje significativo más que con la mera velocidad o acierto. La evaluación se vuelve más rica y formativa."
        }
      ]
    }
  ]
};

// DOM utils
const qs = (sel) => document.querySelector(sel);
const $ = (id) => document.getElementById(id);

// Extraer parámetro de la URL
const getUrlParams = (url = window.location.href) => {
  const params = new URLSearchParams(new URL(url).search);
  const out = {};
  for (const [k, v] of params.entries()) {
    out[k] = v;
  }
  return out;
};

// Guardar/leer estado del juego
const setStorage = (key, data) => {
  localStorage.setItem(`escape-educ-${key}`, JSON.stringify(data));
};

const getStorage = (key) => {
  const s = localStorage.getItem(`escape-educ-${key}`);
  return s ? JSON.parse(s) : null;
};

// Iniciar o resumir timer
const initTimer = () => {
  let { startTime, currentTime, retosResueltos } = getStorage("timer") || {};
  const now = Date.now();
  const start = startTime || now;

  if (!startTime) {
    setStorage("timer", { startTime: start, currentTime: start, retosResueltos: [] });
  }

  GAME_STATE.startTime = start;
  GAME_STATE.currentTime = currentTime || start;
  GAME_STATE.retosResueltos = retosResueltos || [];

  // Si el juego terminó, redirigir a cierre
  if (GAME_STATE.retosResueltos.length >= GAME_STATE.retos.length) {
    window.location.href = "cierre.html";
  }
};

// Formatear tiempo (MM:SS)
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

// Contador regresivo
const startClock = () => {
  const clockEl = qs(".clock") || qs("#clock");
  const tick = () => {
    const now = Date.now();
    const elapsed = Math.floor((now - GAME_STATE.startTime) / 1000);
    const remaining = Math.max(0, GAME_STATE.duration - elapsed);
    clockEl.textContent = formatTime(remaining);
    // Guardar el instante de tiempo actual
    GAME_STATE.currentTime = now;
    setStorage("timer", {
      startTime: GAME_STATE.startTime,
      currentTime: GAME_STATE.currentTime,
      retosResueltos: GAME_STATE.retosResueltos
    });
    if (remaining <= 0) {
      window.location.href = "cierre.html";
    }
  };
  setInterval(tick, 1000);
  tick();
};

// Actualizar barra de progreso
const updateProgress = () => {
  const total = GAME_STATE.retos.length;
  const solved = GAME_STATE.retosResueltos.length;
  const percent = Math.round((solved / total) * 100);
  const bar = qs(".progress-bar") || qs("#progress-bar");
  if (bar) {
    bar.style.width = `${percent}%`;
  }
};

// Iniciar misión desde index.html
const btnIniciar = $("btn-iniciar-mision");
if (btnIniciar) {
  btnIniciar.addEventListener("click", () => {
    // Limpiar estado previo
    localStorage.clear();
    // Iniciar el juego
    initTimer();
    updateProgress();
    startClock();
    // Redirigir al mapa de retos
    window.location.href = "mapa.html";
  });
}

// Manejar mapa.html (panel de retos)
const urlParams = getUrlParams();
const mapNodeIds = {
  1: "nodo-1",
  2: "nodo-2",
  3: "nodo-3"
};

const initMapa = () => {
  const { retosResueltos } = getStorage("timer") || { retosResueltos: [] };
  const unlocked = Math.max(...[1].map(x => x), ...[0, ...retosResueltos, 1]);
  Object.keys(mapNodeIds).forEach(k => {
    const id = parseInt(k);
    const node = $(mapNodeIds[id]);
    if (!node) return;
    if (id <= unlocked + 1) {
      node.classList.remove("locked");
      node.href = `reto.html?id=${id}`;
      if (retosResueltos.includes(id)) {
        node.classList.add("completed");
      } else {
        node.classList.add("active");
      }
    } else {
      node.classList.add("locked");
      node.href = "#";
    }
  });
  startClock();
  updateProgress();
};

if (window.location.pathname.includes("mapa.html")) {
  initTimer();
  initMapa();
}

// Manejar reto.html (plantilla dinámica)
if (window.location.pathname.includes("reto.html")) {
  initTimer();
  const params = getUrlParams();
  const retoId = parseInt(params.id);
  const reto = GAME_STATE.retos.find(r => r.id === retoId);
  if (!reto) {
    window.location.href = "mapa.html";
  }

  startClock();
  updateProgress();

  // Titular
  qs("#reto-titulo").textContent = reto.titulo;
  qs("#reto-enunciado").textContent = reto.enunciado;

  // Opciones
  const ops = reto.opciones;
  const opsEl = qs("#reto-opciones");
  opsEl.innerHTML = ops
    .map(
      (o, idx) => `
      <label class="opcion">
        <input type="radio" name="opcion" value="${o.id}" id="opt-${o.id}" />
        <label for="opt-${o.id}">${o.texto}</label>
      </label>`
    )
    .join("");

  // Validar
  const form = qs("#reto-form");
  const feedback = qs("#feedback");
  const fbTitle = qs("#feedback-title");
  const fbText = qs("#feedback-text");

  form.addEventListener("click", (e) => {
    const input = e.target.closest('input[type="radio"]');
    if (!input) return;
    const selected = input.value;
    const option = ops.find(o => o.id === selected);
    if (!option) return;

    const correct = option.correcta;
    feedback.className = "feedback-container" + (correct ? " correct" : " incorrect");
    feedback.classList.add("visible");
    fbTitle.textContent = correct ? "✅ Respuesta correcta" : "⚠️ Respuesta incorrecta";
    fbText.textContent = option.feedback;

    // Marcar el reto si es correcto y no estaba resuelto
    const { retosResueltos } = GAME_STATE;
    const isNew = !retosResueltos.includes(retoId);
    if (correct && isNew) {
      retosResueltos.push(retoId);
      GAME_STATE.retosResueltos = retosResueltos;
      setStorage("timer", {
        startTime: GAME_STATE.startTime,
        currentTime: GAME_STATE.currentTime,
        retosResueltos: GAME_STATE.retosResueltos
      });
      // Redirigir al mapa para actualizar estado
      setTimeout(() => {
        window.location.href = "mapa.html";
      }, 1500);
    }
  });
}

// Pantalla de cierre
if (window.location.pathname.includes("cierre.html")) {
  const { startTime, currentTime, retosResueltos } = getStorage("timer") || {};
  const elapsed = startTime ? (currentTime - startTime) / 1000 : 0;
  const minutes = Math.floor(elapsed / 60);
  const seconds = Math.floor(elapsed % 60);
  const total = GAME_STATE.retos.length;

  if (retosResueltos.length === total) {
    qs(".cierre-title").textContent = "¡Misión cumplida!";
    qs(".cierre-message").innerHTML = `
      <p>Has restaurado el sistema educativo frente al ataque de memorización tradicional.</p>
      <p>El uso de la evaluación formativa y la gamificación ética permite construir praxis de enseñanza que valoran el pensamiento crítico, la colaboración y el sentido real del aprendizaje.</p>
    `;
  } else {
    qs(".cierre-title").style.color = "var(--warn)";
    qs(".cierre-title").textContent = "Tiempo agotado";
    qs(".cierre-message").textContent =
      "El sistema se cerró antes de restaurar todas las decisiones. Vuelve a iniciar la misión desde el vestíbulo.";
  }

  // Mostrar estadísticas
  qs(".stats").innerHTML = `
    <p>Tiempo jugado: <strong>${minutes}m ${seconds}s</strong></p>
    <p>Retos resueltos: <strong>${retosResueltos.length}/${total}</strong></p>
    <p>Tasa de aciertos aprox.: <strong>${total ? Math.round((retosResueltos.length / total) * 100) : 0}%</strong></p>
  `;

  // Botón reiniciar
  const btnReset = document.createElement("button");
  btnReset.className = "btn btn-primary";
  btnReset.textContent = "Reiniciar juego";
  btnReset.onclick = () => {
    localStorage.clear();
    window.location.href = "index.html";
  };
  const footer = document.querySelector(".cierre-body") || document.body;
  if (footer) {
    footer.appendChild(btnReset);
  }
}
