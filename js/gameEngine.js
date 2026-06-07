const RETOS = [

  // ─── RETO 1 · Tipo 1 (Selección múltiple) ────────────────
  {
    id: 1, tipo: 1,
    titulo: "El mural que nadie midió",
    eyebrow: "Nivel 1 · Cuadrado de binomio · (a+b)²",
    tags: [
      { label: "Nivel 1 — Básico",  cls: "rtag-green"  },
      { label: "(a+b)²",            cls: "rtag-purple" },
      { label: "Área",              cls: "rtag-gold"   }
    ],
    narrativa: `El software de infraestructura aprobó el presupuesto para un mural artístico en el patio
      principal cuyo lado mide <strong>(3x + 5)</strong> metros. Sin embargo, el algoritmo calculó el área
      usando la expresión simplista <em>9x² + 25</em>, ignorando por completo la zona central de la
      superficie. Como el presupuesto quedó subvalorado, los materiales no alcanzarán.
      ¿Cuál es el área matemática real que el sistema debió procesar?`,
    enunciado: "Desarrolla correctamente el producto notable: (3x + 5)²",
    opciones: [
      {
        id: "1a", texto: "9x² + 25", correcta: false,
        feedback: `<strong>Incorrecto.</strong> El algoritmo cometió el error clásico: asumir que el
          cuadrado de un binomio es solo la suma de los cuadrados individuales. Recuerda:
          <em>(a+b)² = a² + 2ab + b²</em>. El término central indispensable es
          <em>2·(3x)·5 = 30x</em>.`
      },
      {
        id: "1b", texto: "9x² + 15x + 25", correcta: false,
        feedback: `<strong>Incorrecto.</strong> El coeficiente del término central está mal. El producto
          real es <em>2·(3x)·5 = 30x</em>, no 15x. No olvides el factor doble de la regla.`
      },
      {
        id: "1c", texto: "9x² + 30x + 25", correcta: true,
        feedback: `<strong>¡Correcto!</strong> <em>(3x+5)² = (3x)² + 2·(3x)·5 + 5² = 9x² + 30x + 25</em>.
          El término <em>30x</em> representa el área combinada de las secciones intermedias del
          mural que el sistema había borrado.`
      },
      {
        id: "1d", texto: "6x² + 30x + 10", correcta: false,
        feedback: `<strong>Incorrecto.</strong> Confundiste elevar al cuadrado con multiplicar por 2.
          Recuerda: <em>(3x)·(3x) = 9x²</em> y <em>5·5 = 25</em>.`
      }
    ]
  },

  // ─── RETO 2 · Tipo 2 (Drag & Drop) ──────────────────────
  {
    id: 2, tipo: 2,
    titulo: "El terreno que se recortó",
    eyebrow: "Nivel 2 · Cuadrado de diferencia · (a−b)²",
    tags: [
      { label: "Nivel 2 — Fácil",       cls: "rtag-green"  },
      { label: "(a−b)²",                cls: "rtag-purple" },
      { label: "Distribución espacial", cls: "rtag-pink"   }
    ],
    narrativa: `El nuevo terreno escolar quedó cuadrado con un lado de <strong>(5x − 4)</strong> metros.
      El procesador registró el área final como <em>25x² + 16</em>, sobreestimando el espacio real y
      provocando que se comprara un exceso inútil de semillas. ¿Qué expresión restablece el
      cálculo correcto?`,
    enunciado: "Arrastra el desarrollo correcto para la reducción del área: (5x − 4)²",
    opciones: [
      {
        id: "2a", texto: "25x² + 16", correcta: false,
        feedback: `<strong>Incorrecto.</strong> Falta el término central. La estructura es
          <em>(a-b)² = a² - 2ab + b²</em>. El signo negativo en el término central es obligatorio.`
      },
      {
        id: "2b", texto: "25x² + 40x + 16", correcta: false,
        feedback: `<strong>Incorrecto.</strong> La magnitud del término central es correcta, pero el
          signo debe ser <strong>negativo</strong>, pues el binomio original resta.`
      },
      {
        id: "2c", texto: "25x² − 40x + 16", correcta: true,
        feedback: `<strong>¡Correcto!</strong> <em>(5x−4)² = 25x² − 40x + 16</em>. El signo negativo
          en <em>-40x</em> demuestra cómo el área disminuye al contraer los límites del terreno.`
      },
      {
        id: "2d", texto: "25x² − 20x + 16", correcta: false,
        feedback: `<strong>Incorrecto.</strong> Omitiste el factor doble: <em>2·(5x)·4 = 40x</em>,
          no 20x.`
      }
    ]
  },

  // ─── RETO 3 · Tipo 3 (Escribir "correcto") ───────────────
  {
    id: 3, tipo: 3,
    titulo: "El contenedor de doble cara",
    eyebrow: "Nivel 3 · Diferencia de cuadrados · (a+b)(a−b)",
    tags: [
      { label: "Nivel 3 — Medio",      cls: "rtag-gold"   },
      { label: "(a+b)(a−b)",           cls: "rtag-purple" },
      { label: "Diferencia cuadrados", cls: "rtag-pink"   }
    ],
    narrativa: `Una losa industrial mide <strong>(7x + 6)</strong> metros de largo y
      <strong>(7x − 6)</strong> de ancho. El microcontrolador simplificó erróneamente el producto
      como <em>49x² + 36</em>. ¿Cuál es el producto neto real?`,
    enunciado: `Analiza las opciones y escribe la palabra <strong>correcto</strong> frente a la
      simplificación válida de: (7x + 6)(7x − 6)`,
    opciones: [
      {
        id: "3a", texto: "49x² + 36", correcta: false,
        feedback: `<strong>Incorrecto.</strong> Producto de conjugados nunca da suma. El último término
          (+6·-6) es obligatoriamente una <strong>resta</strong>.`
      },
      {
        id: "3b", texto: "49x² − 36", correcta: true,
        feedback: `<strong>¡Correcto!</strong> <em>(7x+6)(7x−6) = (7x)² − 6² = 49x² − 36</em>.
          Los términos +42x y −42x se anulan exactamente.`
      },
      {
        id: "3c", texto: "49x² − 84x − 36", correcta: false,
        feedback: `<strong>Incorrecto.</strong> En una estructura conjugada, los productos cruzados
          de igual magnitud y signos contrarios producen cero.`
      },
      {
        id: "3d", texto: "49x² + 84x − 36", correcta: false,
        feedback: `<strong>Incorrecto.</strong> Los productos internos (+42x y -42x) se cancelan
          mutuamente de forma total.`
      }
    ]
  },

  // ─── RETO 4 · Tipo 2 (Drag & Drop) ──────────────────────
  {
    id: 4, tipo: 2,
    titulo: "El tanque de agua del colegio",
    eyebrow: "Nivel 4 · Cubo de binomio · (2x+3)³",
    tags: [
      { label: "Nivel 4 — Medio-alto", cls: "rtag-gold"   },
      { label: "(2x+3)³",              cls: "rtag-purple" },
      { label: "Volumen cúbico",       cls: "rtag-pink"   }
    ],
    narrativa: `El tanque cúbico de reserva tiene arista <strong>(2x + 3)</strong> dm. El procesador
      estimó la capacidad como <em>8x³ + 27</em>, omitiendo los términos de expansión interna.
      En alta demanda, el suministro se agotaría un 60% antes. ¿Qué polinomio describe la
      capacidad real?`,
    enunciado: "Arrastra el polinomio tridimensional exacto que representa el volumen: (2x + 3)³",
    opciones: [
      {
        id: "4a", texto: "8x³ + 27", correcta: false,
        feedback: `<strong>Incorrecto.</strong> Un cubo de binomio requiere 4 términos con
          coeficientes 1-3-3-1. No puedes solo elevar los extremos.`
      },
      {
        id: "4b", texto: "8x³ + 12x² + 18x + 27", correcta: false,
        feedback: `<strong>Incorrecto.</strong> Los coeficientes intermedios quedaron cortos.
          Recuerda: <em>3·(2x)²·3 = 3·4x²·3 = 36x²</em>.`
      },
      {
        id: "4c", texto: "8x³ + 36x² + 54x + 27", correcta: true,
        feedback: `<strong>¡Correcto!</strong> <em>(2x+3)³ = 8x³ + 36x² + 54x + 27</em>.`
      },
      {
        id: "4d", texto: "6x³ + 36x² + 54x + 27", correcta: false,
        feedback: `<strong>Incorrecto.</strong> <em>(2x)³ = 8x³</em>, no 6x³.`
      }
    ]
  },

  // ─── RETO 5 · Tipo 5 (Respuesta abierta) ─────────────────
  {
    id: 5, tipo: 5,
    titulo: "El festival de matemáticas",
    eyebrow: "Nivel 5 · Factorización compuesta",
    tags: [
      { label: "Nivel 5 — Alto",          cls: "rtag-pink"   },
      { label: "Factor común",            cls: "rtag-purple" },
      { label: "Diferencia de cuadrados", cls: "rtag-gold"   }
    ],
    narrativa: `El fondo monetario del festival se rige por la expresión <strong>50x³ − 72x</strong>.
      El sistema la catalogó como "irreducible", bloqueando los desembolsos. Para destrabar los
      fondos, debes descomponerla en sus factores primos absolutos.`,
    enunciado: "Factoriza completamente para destrabar los fondos: 50x³ − 72x",
    instruccionExtra: "Sin espacios. Orden: factor común monomio, luego binomios. Ejemplo: 2x(5x+6)(5x-6)",
    respuestaExacta: "2x(5x+6)(5x-6)",
    respuestasAceptadas: ["2x(5x+6)(5x-6)", "2x(5x-6)(5x+6)"],
    opciones: [
      { id: "5a", texto: "x(50x² − 72)",       correcta: false,
        feedback: `<strong>Incorrecto.</strong> El MCD numérico de 50 y 72 es 2, no 1.` },
      { id: "5b", texto: "2x(25x² − 36)",      correcta: false,
        feedback: `<strong>Incompleto.</strong> <em>25x² − 36</em> aún es factorizable.` },
      { id: "5c", texto: "2x(5x + 6)(5x − 6)", correcta: true,
        feedback: `<strong>¡Correcto!</strong> Factor común <em>2x</em> + diferencia de cuadrados.` },
      { id: "5d", texto: "2(25x³ − 36x)",      correcta: false,
        feedback: `<strong>Incorrecto.</strong> <em>x</em> también es factor común.` }
    ]
  },

  // ─── RETO 6 · Tipo 6 (Código final) ──────────────────────
  {
    id: 6, tipo: 6,
    titulo: "La fórmula justa del sistema",
    eyebrow: "Nivel 6 · Experto · Binomio con fracciones",
    tags: [
      { label: "Nivel 6 — Experto",  cls: "rtag-pink"   },
      { label: "Misión final",       cls: "rtag-purple" },
      { label: "Criterio analítico", cls: "rtag-gold"   }
    ],
    narrativa: `El núcleo evalúa becas con la ecuación <strong>(½x + 4)² − 16</strong>. Un error redujo
      el algoritmo a <em>¼x²</em>, excluyendo a decenas de estudiantes. Resuelve y genera el código
      de acceso que restaurará los derechos de la comunidad estudiantil.`,
    enunciado: "Desarrolla y simplifica al máximo: (½x + 4)² − 16",
    opciones: [
      { id: "6a", texto: "¼x²",           codigo: "ALFA-00",  correcta: false,
        feedback: `<strong>Código Denegado.</strong> Omitiste el doble producto: <em>2·(½x)·4 = 4x</em>.` },
      { id: "6b", texto: "¼x² + 4x + 16", codigo: "DELTA-44", correcta: false,
        feedback: `<strong>Código Denegado.</strong> Olvidaste restar el <em>−16</em> exterior.` },
      { id: "6c", texto: "¼x² + 4x",      codigo: "EAP-2026", correcta: true,
        feedback: `<strong>¡CÓDIGO CORRECTO! SISTEMA RESTAURADO.</strong><br>
          <em>¼x² + 4x + 16 − 16 = ¼x² + 4x</em>.` },
      { id: "6d", texto: "¼x² + 2x",      codigo: "SIGMA-88", correcta: false,
        feedback: `<strong>Código Denegado.</strong> El doble producto es 4x, no 2x.` }
    ]
  }

];
// ============================================================
//  gameEngine.js  —  PARTE 2 / 5
//  Estado · sessionStorage · Utilidades · Temporizador
//  Penalizaciones + historial real de errores por reto
// ============================================================

const TOTAL_RETOS      = RETOS.length;
const DURATION_SEC     = 45 * 60;
const PENALIZACION_SEG = 2 * 60;
const MAX_INTENTOS     = 3;

const Estado = {
  startTime:        0,
  penalizacion:     0,
  resueltos:        [],
  intentosPorReto:  {},
  historialPorReto: {},
  respuestasLog:    {}
};

function saveEstado() {
  try {
    sessionStorage.setItem("er-state", JSON.stringify({
      startTime:        Estado.startTime,
      penalizacion:     Estado.penalizacion,
      resueltos:        Estado.resueltos,
      intentosPorReto:  Estado.intentosPorReto,
      historialPorReto: Estado.historialPorReto,
      respuestasLog:    Estado.respuestasLog
    }));
  } catch (_) {}
}

function loadEstado() {
  try {
    const raw = sessionStorage.getItem("er-state");
    if (!raw) return false;
    const data = JSON.parse(raw);
    Estado.startTime        = data.startTime || 0;
    Estado.penalizacion     = data.penalizacion || 0;
    Estado.resueltos        = Array.isArray(data.resueltos) ? data.resueltos : [];
    Estado.intentosPorReto  = data.intentosPorReto || {};
    Estado.historialPorReto = data.historialPorReto || {};
    Estado.respuestasLog    = data.respuestasLog || {};
    return Estado.startTime > 0;
  } catch (_) {
    return false;
  }
}

const $id = id => document.getElementById(id);
const $qs = (sel, ctx = document) => ctx.querySelector(sel);
const getParam = key => new URLSearchParams(window.location.search).get(key);

const formatTime = sec => {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

const normalizeRespuesta = str =>
  (str || "")
    .trim()
    .replace(/\s+/g, "")
    .toLowerCase()
    .replace(/\u2212/g, "-")
    .replace(/\u00d7/g, "*");

function registrarIntentoFallido(retoId, respuestaUsuario = null) {
  if (!Estado.intentosPorReto[retoId])  Estado.intentosPorReto[retoId]  = 0;
  if (!Estado.historialPorReto[retoId]) Estado.historialPorReto[retoId] = 0;
  if (!Estado.respuestasLog[retoId])    Estado.respuestasLog[retoId]    = [];

  Estado.intentosPorReto[retoId]++;
  Estado.historialPorReto[retoId]++;

  Estado.respuestasLog[retoId].push({
    tipo: "incorrecta",
    respuesta: respuestaUsuario,
    ts: Date.now()
  });

  const intentos = Estado.intentosPorReto[retoId];
  let penalizado = false;

  if (intentos >= MAX_INTENTOS) {
    Estado.penalizacion += PENALIZACION_SEG;
    Estado.intentosPorReto[retoId] = 0;
    penalizado = true;
    _flashPenalizacion();
  }

  saveEstado();
  return { penalizado, intentosActuales: penalizado ? 0 : intentos };
}

function registrarRespuestaCorrecta(retoId, respuestaUsuario = null) {
  if (!Estado.respuestasLog[retoId]) Estado.respuestasLog[retoId] = [];

  Estado.respuestasLog[retoId].push({
    tipo: "correcta",
    respuesta: respuestaUsuario,
    ts: Date.now()
  });

  if (!Estado.resueltos.includes(retoId)) {
    Estado.resueltos.push(retoId);
    Estado.resueltos.sort((a, b) => a - b);
  }
  saveEstado();
}

function getIntentosReto(retoId) {
  return Estado.intentosPorReto[retoId] || 0;
}

function getHistorialReto(retoId) {
  return Estado.historialPorReto[retoId] || 0;
}

function getTiempoRestante() {
  if (!Estado.startTime) return DURATION_SEC;
  const elapsed = Math.floor((Date.now() - Estado.startTime) / 1000);
  return Math.max(0, DURATION_SEC - elapsed - Estado.penalizacion);
}

function _flashPenalizacion() {
  const clockEl = $id("clock");
  if (clockEl) {
    clockEl.classList.add("penalizado");
    setTimeout(() => clockEl.classList.remove("penalizado"), 2000);
  }

  const banner = document.createElement("div");
  banner.className = "penalizacion-banner";
  banner.setAttribute("role", "alert");
  banner.setAttribute("aria-live", "assertive");
  banner.innerHTML = `
    <span class="pen-icon" aria-hidden="true">⏱</span>
    <span class="pen-msg">
      <strong>−${formatTime(PENALIZACION_SEG)} de penalización</strong>
      por ${MAX_INTENTOS} intentos fallidos seguidos
    </span>
  `;
  document.body.appendChild(banner);
  requestAnimationFrame(() => banner.classList.add("visible"));
  setTimeout(() => {
    banner.classList.remove("visible");
    setTimeout(() => banner.remove(), 400);
  }, 3000);
}

function _mostrarAlertaIntentos(retoId, intentosActuales, penalizado) {
  let alertEl = $id("intentos-alerta");
  if (!alertEl) {
    alertEl = document.createElement("p");
    alertEl.id = "intentos-alerta";
    alertEl.className = "intentos-alerta";
    const btnValidar = $id("btn-validar");
    if (btnValidar) btnValidar.insertAdjacentElement("afterend", alertEl);
  }

  const restantes = MAX_INTENTOS - intentosActuales;

  if (penalizado) {
    alertEl.className = "intentos-alerta critico";
    alertEl.textContent = `⚠ Se aplicó −${formatTime(PENALIZACION_SEG)}. Tienes ${MAX_INTENTOS} intentos nuevos.`;
  } else if (intentosActuales === 0) {
    alertEl.classList.add("hidden");
  } else if (restantes === 1) {
    alertEl.className = "intentos-alerta critico";
    alertEl.textContent = `⚠ Último intento. El siguiente error descuenta −${formatTime(PENALIZACION_SEG)}.`;
  } else {
    alertEl.className = "intentos-alerta";
    alertEl.textContent = `Llevas ${intentosActuales} intento${intentosActuales > 1 ? "s" : ""} fallido${intentosActuales > 1 ? "s" : ""}. Penalización al ${MAX_INTENTOS}.º`;
  }
}

let _clockInterval = null;

function startClock() {
  const clockEl     = $id("clock");
  const progressBar = $id("progress-bar");
  const progressTxt = $id("progress-txt");
  const penalizEl   = $id("penalizacion-txt");

  if (!clockEl) return;
  if (_clockInterval) clearInterval(_clockInterval);

  const tick = () => {
    const remaining = getTiempoRestante();

    clockEl.textContent = formatTime(remaining);
    clockEl.classList.remove("warning", "danger");
    if (remaining <= 60) clockEl.classList.add("danger");
    else if (remaining <= 300) clockEl.classList.add("warning");

    if (penalizEl) {
      if (Estado.penalizacion > 0) {
        penalizEl.textContent = `−${formatTime(Estado.penalizacion)}`;
        penalizEl.classList.remove("hidden");
      } else {
        penalizEl.classList.add("hidden");
      }
    }

    if (progressBar) {
      const pct = Math.round((Estado.resueltos.length / TOTAL_RETOS) * 100);
      progressBar.style.width = pct + "%";
      progressBar.setAttribute("aria-valuenow", pct);
    }
    if (progressTxt) {
      progressTxt.textContent = `${Estado.resueltos.length} / ${TOTAL_RETOS}`;
    }

    if (remaining <= 0) {
      clearInterval(_clockInterval);
      window.location.href = "cierre.html";
    }
  };

  tick();
  _clockInterval = setInterval(tick, 1000);
}
// ============================================================
//  gameEngine.js  —  PARTE 3 / 5
//  initVestibulo · initMapa · initReto · Renderizadores
// ============================================================

function initVestibulo() {
  const btn = $id("btn-iniciar-mision");
  if (!btn) return;

  btn.addEventListener("click", () => {
    Estado.startTime        = Date.now();
    Estado.resueltos        = [];
    Estado.penalizacion     = 0;
    Estado.intentosPorReto  = {};
    Estado.historialPorReto = {};
    Estado.respuestasLog    = {};
    saveEstado();
    window.location.href = "mapa.html";
  });
}

function initMapa() {
  if (!window.location.pathname.includes("mapa.html")) return;

  const desbloqueado = Estado.resueltos.length + 1;

  RETOS.forEach(reto => {
    const nodo = $id(`nodo-${reto.id}`);
    if (!nodo) return;

    nodo.classList.remove("completed", "active-node", "locked");

    if (Estado.resueltos.includes(reto.id)) {
      nodo.classList.add("completed");
      nodo.href = `reto.html?id=${reto.id}`;

      const lbl = $qs(".nodo-status-label", nodo);
      if (lbl) {
        lbl.className = "nodo-status-label status-completed";
        lbl.textContent = "✓ Completado";
      }
    } else if (reto.id === desbloqueado) {
      nodo.classList.add("active-node");
      nodo.href = `reto.html?id=${reto.id}`;

      const lbl = $qs(".nodo-status-label", nodo);
      if (lbl) {
        lbl.className = "nodo-status-label status-active";
        lbl.textContent = "🔓 Disponible";
      }
    } else {
      nodo.classList.add("locked");
      nodo.removeAttribute("href");
      nodo.setAttribute("aria-disabled", "true");
      nodo.addEventListener("click", e => e.preventDefault());
    }
  });

  if (Estado.resueltos.length >= TOTAL_RETOS) {
    window.location.href = "cierre.html";
  }
}

function initReto() {
  if (!window.location.pathname.includes("reto.html")) return;

  const idParam = parseInt(getParam("id"), 10);
  const reto = RETOS.find(r => r.id === idParam);
  if (!reto) {
    window.location.href = "mapa.html";
    return;
  }

  _pintarEstructura(reto);
  _renderIntentosPrevios(reto.id);

  switch (reto.tipo) {
    case 1: _renderTipo1(reto); break;
    case 2: _renderTipo2(reto); break;
    case 3: _renderTipo3(reto); break;
    case 5: _renderTipo5(reto); break;
    case 6: _renderTipo6(reto); break;
    default: _renderTipo1(reto);
  }
}

function _pintarEstructura(reto) {
  const eyebrow   = $id("reto-eyebrow");
  const titulo    = $id("reto-titulo");
  const tagsCont  = $id("reto-tags");
  const narrativa = $id("reto-narrativa");
  const enunciado = $id("reto-enunciado");

  if (eyebrow)   eyebrow.textContent = reto.eyebrow || "";
  if (titulo)    titulo.textContent  = reto.titulo || "";
  if (narrativa) narrativa.innerHTML = reto.narrativa || "";
  if (enunciado) enunciado.innerHTML = reto.enunciado || "";

  if (tagsCont && reto.tags) {
    tagsCont.innerHTML = reto.tags
      .map(t => `<span class="rtag ${t.cls}">${t.label}</span>`)
      .join("");
  }
}

function _renderIntentosPrevios(retoId) {
  const totalFallos = getHistorialReto(retoId);
  if (!totalFallos) return;

  let info = $id("historial-reto");
  if (!info) {
    info = document.createElement("p");
    info.id = "historial-reto";
    info.className = "historial-reto";
    const enunciado = $id("reto-enunciado");
    if (enunciado) enunciado.insertAdjacentElement("afterend", info);
  }

  info.textContent = `Historial del reto: ${totalFallos} intento${totalFallos > 1 ? "s" : ""} fallido${totalFallos > 1 ? "s" : ""} acumulado${totalFallos > 1 ? "s" : ""}.`;
}

function _renderTipo1(reto) {
  const cont = $id("opciones-container");
  if (!cont) return;

  const letras = ["A", "B", "C", "D"];
  cont.innerHTML = reto.opciones.map((op, i) => `
    <label class="opcion-pro" for="op-${op.id}">
      <input class="radio-oculto" type="radio"
             id="op-${op.id}" name="respuesta" value="${op.id}"
             aria-label="Opción ${letras[i]}: ${op.texto}">
      <div class="opcion-pro-inner">
        <div class="opcion-letra">${letras[i]}</div>
        <div class="opcion-texto">${op.texto}</div>
      </div>
    </label>
  `).join("");

  cont.querySelectorAll("input[type=radio]").forEach(inp => {
    inp.addEventListener("change", () => {
      cont.querySelectorAll(".opcion-pro-inner").forEach(el => el.classList.remove("selected"));
      const box = inp.closest(".opcion-pro")?.querySelector(".opcion-pro-inner");
      if (box) box.classList.add("selected");
    });
  });

  _attachValidar(reto, () => {
    const sel = cont.querySelector("input[type=radio]:checked");
    if (!sel) return null;
    const op = reto.opciones.find(o => o.id === sel.value);
    return { id: sel.value, valor: op ? op.texto : sel.value };
  });
}

function _renderTipo2(reto) {
  const cont = $id("opciones-container");
  if (!cont) return;

  const opcMezcladas = [...reto.opciones].sort(() => Math.random() - 0.5);

  cont.innerHTML = `
    <div class="drag-pool" id="drag-pool" aria-label="Fichas disponibles" role="list">
      ${opcMezcladas.map(op => `
        <div class="drag-chip"
             id="chip-${op.id}"
             data-id="${op.id}"
             draggable="true"
             tabindex="0"
             role="option"
             aria-label="Ficha: ${op.texto}">
          ${op.texto}
        </div>
      `).join("")}
    </div>
    <div class="drop-zone" id="drop-zone"
         role="button" tabindex="0"
         aria-label="Zona de respuesta: arrastra aquí tu selección"
         aria-live="polite">
      <span class="drop-placeholder" id="drop-placeholder">← Arrastra aquí tu respuesta</span>
    </div>
  `;

  const pool = $id("drag-pool");
  const zone = $id("drop-zone");
  let chipEnZona = null;

  pool.querySelectorAll(".drag-chip").forEach(chip => {
    chip.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", chip.dataset.id);
      chip.classList.add("dragging");
    });
    chip.addEventListener("dragend", () => chip.classList.remove("dragging"));
    chip.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        moverChipAZona(chip);
      }
    });
  });

  zone.addEventListener("dragover", e => {
    e.preventDefault();
    zone.classList.add("drag-over");
  });
  zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
  zone.addEventListener("drop", e => {
    e.preventDefault();
    zone.classList.remove("drag-over");
    const chipId = e.dataTransfer.getData("text/plain");
    const chip = document.getElementById(`chip-${chipId}`);
    if (chip) moverChipAZona(chip);
  });

  function moverChipAZona(chip) {
    if (chipEnZona) {
      chipEnZona.classList.remove("chip-en-zona");
      pool.appendChild(chipEnZona);
      chipEnZona = null;
    }
    zone.innerHTML = "";
    chip.classList.add("chip-en-zona");
    zone.appendChild(chip);
    chipEnZona = chip;
  }

  _attachValidar(reto, () => {
    if (!chipEnZona) return null;
    return { id: chipEnZona.dataset.id, valor: chipEnZona.textContent.trim() };
  });
}

function _renderTipo3(reto) {
  const cont = $id("opciones-container");
  if (!cont) return;

  cont.innerHTML = reto.opciones.map((op, i) => `
    <div class="tipo3-row" id="row-${op.id}" role="group" aria-label="Opción ${i + 1}">
      <div class="tipo3-expresion">${op.texto}</div>
      <div class="tipo3-input-wrap">
        <label for="input-${op.id}" class="sr-only">
          Escribe "correcto" si esta es la respuesta válida
        </label>
        <input type="text"
               id="input-${op.id}"
               class="tipo3-input"
               data-id="${op.id}"
               placeholder="escribe aquí…"
               autocomplete="off"
               spellcheck="false"
               maxlength="20">
      </div>
    </div>
  `).join("");

  _attachValidar(reto, () => {
    const inputs = cont.querySelectorAll(".tipo3-input");
    for (const inp of inputs) {
      if (inp.value.trim().toLowerCase() === "correcto") {
        const op = reto.opciones.find(o => o.id === inp.dataset.id);
        return { id: inp.dataset.id, valor: op ? op.texto : inp.dataset.id };
      }
    }
    return null;
  });
}

function _renderTipo5(reto) {
  const cont = $id("opciones-container");
  if (!cont) return;

  cont.innerHTML = `
    <div class="tipo5-wrap">
      <p class="tipo5-instruccion">${reto.instruccionExtra || ""}</p>
      <div class="tipo5-input-group">
        <label for="respuesta-libre" class="sr-only">Tu respuesta</label>
        <input type="text"
               id="respuesta-libre"
               class="tipo5-input"
               placeholder="Escribe tu respuesta aquí…"
               autocomplete="off"
               spellcheck="false"
               maxlength="60"
               aria-describedby="respuesta-libre-hint">
        <span id="respuesta-libre-hint" class="tipo5-hint">
          Ejemplo: <code>${reto.respuestaExacta}</code>
        </span>
      </div>
    </div>
  `;

  const input = $id("respuesta-libre");
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      $id("btn-validar")?.click();
    }
  });

  _attachValidar(reto, () => {
    const raw = input.value;
    const val = normalizeRespuesta(raw);
    if (!val) return null;

    const aceptadas = (reto.respuestasAceptadas || [reto.respuestaExacta])
      .map(r => normalizeRespuesta(r));

    if (aceptadas.includes(val)) {
      return { id: "5c", valor: raw.trim() };
    }
    return { id: "wrong-open", valor: raw.trim() };
  });
}

function _renderTipo6(reto) {
  const cont = $id("opciones-container");
  if (!cont) return;

  const letras = ["A", "B", "C", "D"];
  cont.innerHTML = reto.opciones.map((op, i) => `
    <label class="opcion-pro" for="op6-${op.id}">
      <input class="radio-oculto" type="radio"
             id="op6-${op.id}" name="respuesta6" value="${op.id}"
             aria-label="Opción ${letras[i]}: ${op.texto}">
      <div class="opcion-pro-inner">
        <div class="opcion-letra">${letras[i]}</div>
        <div class="opcion-texto">
          ${op.texto}
          <span class="codigo-chip">Código: ${op.codigo}</span>
        </div>
      </div>
    </label>
  `).join("");

  cont.querySelectorAll("input[type=radio]").forEach(inp => {
    inp.addEventListener("change", () => {
      cont.querySelectorAll(".opcion-pro-inner").forEach(el => el.classList.remove("selected"));
      const box = inp.closest(".opcion-pro")?.querySelector(".opcion-pro-inner");
      if (box) box.classList.add("selected");
    });
  });

  _attachValidar(reto, () => {
    const sel = cont.querySelector("input[type=radio]:checked");
    if (!sel) return null;
    const op = reto.opciones.find(o => o.id === sel.value);
    return { id: sel.value, valor: op ? `${op.texto} | ${op.codigo}` : sel.value };
  });
}
// ============================================================
//  gameEngine.js  —  PARTE 4 / 5
//  Validación central · Victoria · Cierre con escala valorativa
// ============================================================

function _dispararVictoria() {
  const overlay = document.createElement("div");
  overlay.className = "victory-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-label", "Misión completada");
  overlay.innerHTML = `
    <div class="victory-content" tabindex="-1">
      <div class="victory-icon" aria-hidden="true">⚡</div>
      <h2 class="victory-title">SISTEMA RESTAURADO</h2>
      <p class="victory-sub">Código <strong>EAP-2026</strong> validado con éxito</p>
      <p class="victory-msg">Has liberado el algoritmo. La comunidad escolar puede acceder a sus derechos nuevamente.</p>
      <button class="btn btn-primary btn-lg" id="btn-al-cierre">Ver resultados finales →</button>
    </div>
  `;

  const colores = ["#38BDF8", "#F59E0B", "#34D399", "#F472B6", "#A78BFA"];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement("div");
    p.className = "confetti-particle";
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colores[i % colores.length]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      animation-duration: ${0.8 + Math.random() * 1.4}s;
      animation-delay: ${Math.random() * 0.6}s;
      animation-timing-function: ease-in;
    `;
    overlay.appendChild(p);
  }

  document.body.appendChild(overlay);
  setTimeout(() => overlay.querySelector(".victory-content")?.focus(), 100);

  overlay.querySelector("#btn-al-cierre").addEventListener("click", () => {
    window.location.href = "cierre.html";
  });
}

function _attachValidar(reto, getSelected) {
  const btnValidar    = $id("btn-validar");
  const feedbackCont  = $id("feedback-container");
  const feedbackIcon  = $id("feedback-icon");
  const feedbackTitle = $id("feedback-title");
  const feedbackBody  = $id("feedback-body");
  const btnNext       = $id("btn-next");

  if (!btnValidar) return;

  btnValidar.addEventListener("click", () => {
    const selected = getSelected();

    if (!selected) {
      if (feedbackCont) {
        feedbackCont.className = "feedback-container visible warning";
        if (feedbackTitle) feedbackTitle.textContent = "Selecciona una opción";
        if (feedbackBody)  feedbackBody.innerHTML = "Elige o escribe una respuesta antes de validar.";
      }
      return;
    }

    const selId = selected.id;
    const respuestaUsuario = selected.valor;
    const opcion = reto.opciones.find(o => o.id === selId);
    const esCorrecta = opcion ? opcion.correcta : false;

    if (feedbackCont) {
      feedbackCont.className = `feedback-container visible ${esCorrecta ? "correct" : "incorrect"}`;
      if (feedbackIcon)  feedbackIcon.textContent = esCorrecta ? "✅" : "❌";
      if (feedbackTitle) feedbackTitle.textContent = esCorrecta ? "¡Correcto! Misión cumplida" : "Intento fallido";
      if (feedbackBody)  feedbackBody.innerHTML = opcion
        ? opcion.feedback
        : "La respuesta no coincide con el desarrollo correcto.";
    }

    if (!esCorrecta) {
      const { penalizado, intentosActuales } = registrarIntentoFallido(reto.id, respuestaUsuario);
      _mostrarAlertaIntentos(reto.id, intentosActuales, penalizado);
      _renderIntentosPrevios(reto.id);
      return;
    }

    btnValidar.disabled = true;
    btnValidar.textContent = "Validado ✓";

    registrarRespuestaCorrecta(reto.id, respuestaUsuario);

    const alerta = $id("intentos-alerta");
    if (alerta) {
      alerta.className = "intentos-alerta exito";
      const fallos = getHistorialReto(reto.id);
      alerta.textContent = fallos === 0
        ? "✅ Resuelto al primer intento."
        : `✅ Resuelto tras ${fallos} intento${fallos > 1 ? "s" : ""} fallido${fallos > 1 ? "s" : ""}.`;
    }

    if (reto.tipo === 6) {
      setTimeout(_dispararVictoria, 700);
      return;
    }

    if (btnNext) {
      const siguienteId = reto.id + 1;
      if (siguienteId <= TOTAL_RETOS) {
        btnNext.href = `reto.html?id=${siguienteId}`;
        btnNext.textContent = "Siguiente reto →";
      } else {
        btnNext.href = "cierre.html";
        btnNext.textContent = "Ver resultados →";
      }
      btnNext.classList.remove("hidden");
      btnNext.focus();
    }
  });
}

function initCierre() {
  if (!window.location.pathname.includes("cierre.html")) return;

  const resueltosN    = Estado.resueltos.length;
  const elapsedSec    = Estado.startTime
    ? Math.min(Math.floor((Date.now() - Estado.startTime) / 1000), DURATION_SEC)
    : 0;
  const tiempoUsado   = formatTime(elapsedSec);
  const tiempoSobra   = formatTime(Math.max(0, DURATION_SEC - elapsedSec));
  const penalizTotal  = formatTime(Estado.penalizacion || 0);
  const historial     = Estado.historialPorReto || {};
  const fallosTotales = Object.values(historial).reduce((a, b) => a + b, 0);
  const promedioFallos = resueltosN > 0 ? (fallosTotales / resueltosN) : fallosTotales;

  let escalaKey = "bajo";
  if (resueltosN === TOTAL_RETOS && fallosTotales === 0) escalaKey = "superior";
  else if (resueltosN >= 4) escalaKey = "alto";
  else if (resueltosN >= 2) escalaKey = "basico";

  const escalas = {
    bajo: {
      icono: "🔰",
      nombre: "BAJO",
      mensaje: "Necesitas reforzar los productos notables básicos. Te conviene repasar el cuadrado de binomio, la diferencia de cuadrados y la identificación correcta del término central.",
      felicitacion: "Cada intento cuenta. Sigue practicando: estás construyendo la base para resolver con más seguridad."
    },
    basico: {
      icono: "🔷",
      nombre: "BÁSICO",
      mensaje: "Comprendes parte de los procedimientos, pero aún cometes errores de signo, coeficientes o factorización completa. Vas por buen camino.",
      felicitacion: "Buen avance. Ya reconoces varias estructuras algebraicas; ahora toca ganar precisión."
    },
    alto: {
      icono: "⭐",
      nombre: "ALTO",
      mensaje: "Tu desempeño fue sólido. Resolviste la mayoría de retos y mostraste dominio de varios productos notables. Aún puedes mejorar la precisión en respuestas complejas.",
      felicitacion: "Muy buen trabajo. Tu razonamiento algebraico es consistente y demuestra comprensión real."
    },
    superior: {
      icono: "🏆",
      nombre: "SUPERIOR",
      mensaje: "Dominio sobresaliente. Resolviste todos los retos sin errores acumulados, aplicando correctamente productos notables, factorización y simplificación algebraica.",
      felicitacion: "¡Excelente! Tu desempeño fue preciso, consistente y de nivel superior."
    }
  };

  const nivel = escalas[escalaKey];

  const bind = {
    "cierre-resueltos": `${resueltosN} / ${TOTAL_RETOS}`,
    "cierre-tiempo": tiempoUsado,
    "cierre-sobrante": tiempoSobra,
    "cierre-penalizacion": penalizTotal,
    "cierre-fallos": String(fallosTotales),
    "cierre-promedio-fallos": resueltosN > 0 ? promedioFallos.toFixed(2) : "0.00",
    "cierre-nivel": `${nivel.icono} ${nivel.nombre}`,
    "cierre-mensaje": nivel.mensaje,
    "cierre-felicitacion": nivel.felicitacion,
    "cierre-icon-nivel": nivel.icono
  };

  Object.entries(bind).forEach(([id, val]) => {
    const el = $id(id);
    if (el) el.innerHTML = val;
  });

  const barraEl = $id("cierre-barra");
  const porcEl  = $id("cierre-porcentaje");
  const pct = Math.round((resueltosN / TOTAL_RETOS) * 100);
  if (barraEl) {
    barraEl.style.width = pct + "%";
    barraEl.setAttribute("aria-valuenow", pct);
  }
  if (porcEl) porcEl.textContent = `${pct}%`;

  ["seg-bajo", "seg-basico", "seg-alto", "seg-superior"].forEach(id => {
    const el = $id(id);
    if (el) el.classList.remove("activo");
  });
  const segActivo = $id(`seg-${escalaKey}`);
  if (segActivo) segActivo.classList.add("activo");

  const listaEl = $id("cierre-lista-retos") || $id("retro-lista");
  if (listaEl) {
    listaEl.innerHTML = RETOS.map((r, i) => {
      const done = Estado.resueltos.includes(r.id);
      const intentosFall = historial[r.id] || 0;

      let claseDot = "dot-fail";
      let claseEstado = "em-fail";
      let estadoTxt = "✗ No resuelto";
      let retro = "Revisa de nuevo este contenido: necesitas reforzar el procedimiento y la lectura cuidadosa del patrón algebraico.";

      if (done && intentosFall === 0) {
        claseDot = "dot-ok";
        claseEstado = "em-ok";
        estadoTxt = "✓ Al primer intento";
        retro = "Excelente precisión. Identificaste correctamente la estructura algebraica desde el primer intento.";
      } else if (done && intentosFall <= 2) {
        claseDot = "dot-warn";
        claseEstado = "em-warn";
        estadoTxt = `✓ Resuelto (${intentosFall} fallo${intentosFall > 1 ? "s" : ""} previo${intentosFall > 1 ? "s" : ""})`;
        retro = "Lo resolviste correctamente después de algunos intentos. Conviene reforzar seguridad en signos y coeficientes.";
      } else if (done) {
        claseDot = "dot-effort";
        claseEstado = "em-effort";
        estadoTxt = `✓ Resuelto (${intentosFall} fallos previos)`;
        retro = "Lograste resolverlo con perseverancia. Sería útil repasar este tipo de producto notable para ganar rapidez y exactitud.";
      }

      return `
        <li class="retro-item ${done ? "done" : "pending"}">
          <span class="retro-dot ${claseDot}" aria-hidden="true"></span>
          <span class="retro-reto-titulo">
            <strong>Reto ${r.id}: ${r.titulo}</strong><br>
            <span>${r.eyebrow || ""}</span><br>
            <em class="${claseEstado}">${estadoTxt}</em><br>
            <span>${retro}</span>
          </span>
        </li>
      `;
    }).join("");
  }

  const modal = $id("felicita-overlay");
  const modalTitulo = $id("felicita-titulo");
  const modalTexto = $id("felicita-texto");
  const modalEmoji = $id("felicita-emoji");

  if (modalTitulo) modalTitulo.textContent = `Nivel alcanzado: ${nivel.nombre}`;
  if (modalTexto)  modalTexto.textContent = nivel.felicitacion;
  if (modalEmoji)  modalEmoji.textContent = nivel.icono;

  if (modal) {
    setTimeout(() => {
      modal.classList.add("visible");
      $id("felicita-box")?.focus();
    }, 500);
  }

  const btnOcultarModal = $id("btn-felicita-ok");
  if (btnOcultarModal && modal) {
    btnOcultarModal.addEventListener("click", () => {
      modal.classList.remove("visible");
      setTimeout(() => { modal.style.display = "none"; }, 350);
    });
  }

  const btnReinicio = $id("btn-reiniciar");
  const btnReinicio2 = $id("btn-reiniciar-2"); // soporte para el segundo botón
  
  const resetFunc = () => {
    try { sessionStorage.removeItem("er-state"); } catch (_) {}
    Estado.startTime        = 0;
    Estado.resueltos        = [];
    Estado.penalizacion     = 0;
    Estado.intentosPorReto  = {};
    Estado.historialPorReto = {};
    Estado.respuestasLog    = {};
    window.location.href = "index.html";
  };
  
  if (btnReinicio) btnReinicio.addEventListener("click", resetFunc);
  if (btnReinicio2) btnReinicio2.addEventListener("click", resetFunc);
}
// ============================================================
//  gameEngine.js  —  PARTE 5 / 5
//  Bootstrap (Punto de entrada)
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Carga el estado guardado entre páginas
  loadEstado();

  // 2. Lee la URL completa en lugar de solo el pathname
  const urlActual = window.location.href.toLowerCase();
  
  // 3. Determina si estamos en el index
  // Si la URL no tiene "mapa", "reto" ni "cierre", asumimos que es el index
  const esIndex = !urlActual.includes("mapa.html") && !urlActual.includes("reto.html") && !urlActual.includes("cierre.html");

  // 4. Arranca el reloj en todas las páginas excepto en el inicio
  if (!esIndex) {
    startClock();
  }

  // 5. Inicializa la lógica específica de la página actual
  if (esIndex) {
    initVestibulo();
  } else if (urlActual.includes("mapa.html")) {
    initMapa();
  } else if (urlActual.includes("reto.html")) {
    initReto();
  } else if (urlActual.includes("cierre.html")) {
    initCierre();
  }
});
