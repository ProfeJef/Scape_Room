// ============================================================
//  gameEngine.js  —  PARTE 1 / 6
//  Base de datos de RETOS completa
//  Escape Room Educativo · Matemáticas 8° · Binomios
// ============================================================

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
      { id: "5a", texto: "x(50x² − 72)",      correcta: false,
        feedback: `<strong>Incorrecto.</strong> El MCD numérico de 50 y 72 es 2, no 1.` },
      { id: "5b", texto: "2x(25x² − 36)",     correcta: false,
        feedback: `<strong>Incompleto.</strong> <em>25x² − 36</em> aún es factorizable.` },
      { id: "5c", texto: "2x(5x + 6)(5x − 6)", correcta: true,
        feedback: `<strong>¡Correcto!</strong> Factor común <em>2x</em> + diferencia de cuadrados.` },
      { id: "5d", texto: "2(25x³ − 36x)",     correcta: false,
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
      { id: "6a", texto: "¼x²",          codigo: "ALFA-00",   correcta: false,
        feedback: `<strong>Código Denegado.</strong> Omitiste el doble producto: <em>2·(½x)·4 = 4x</em>.` },
      { id: "6b", texto: "¼x² + 4x + 16", codigo: "DELTA-44", correcta: false,
        feedback: `<strong>Código Denegado.</strong> Olvidaste restar el <em>−16</em> exterior.` },
      { id: "6c", texto: "¼x² + 4x",     codigo: "EAP-2026",  correcta: true,
        feedback: `<strong>¡CÓDIGO CORRECTO! SISTEMA RESTAURADO.</strong><br>
          <em>¼x² + 4x + 16 − 16 = ¼x² + 4x</em>.` },
      { id: "6d", texto: "¼x² + 2x",     codigo: "SIGMA-88",  correcta: false,
        feedback: `<strong>Código Denegado.</strong> El doble producto es 4x, no 2x.` }
    ]
  }

]; // 
// ============================================================
//  gameEngine.js  —  PARTE 2 / 6  (con penalizaciones)
//  Estado · sessionStorage · Utilidades · Temporizador 45 min
//  Sistema de penalización por intentos fallidos
// ============================================================

// ──────────────────────────────────────────────────────────
//  CONSTANTES
// ──────────────────────────────────────────────────────────
const TOTAL_RETOS      = RETOS.length;   // 6
const DURATION_SEC     = 45 * 60;        // 2 700 s = 45 min
const PENALIZACION_SEG = 2 * 60;         // −2 min por penalización
const MAX_INTENTOS     = 3;              // intentos antes de penalizar

// ──────────────────────────────────────────────────────────
//  ESTADO EN MEMORIA
// ──────────────────────────────────────────────────────────
const Estado = {
  startTime:       0,
  penalizacion:    0,
  resueltos:       [],
  intentosPorReto: {}
};

function saveEstado() {
  try {
    sessionStorage.setItem("er-state", JSON.stringify({
      startTime:       Estado.startTime,
      penalizacion:    Estado.penalizacion,
      resueltos:       Estado.resueltos,
      intentosPorReto: Estado.intentosPorReto
    }));
  } catch (_) {}
}

function loadEstado() {
  try {
    const raw = sessionStorage.getItem("er-state");
    if (!raw) return false;
    const data = JSON.parse(raw);
    Estado.startTime       = data.startTime       || 0;
    Estado.penalizacion    = data.penalizacion     || 0;
    Estado.resueltos       = Array.isArray(data.resueltos) ? data.resueltos : [];
    Estado.intentosPorReto = data.intentosPorReto  || {};
    return Estado.startTime > 0;
  } catch (_) { return false; }
}

// ──────────────────────────────────────────────────────────
//  UTILIDADES
// ──────────────────────────────────────────────────────────
const $id = id => document.getElementById(id);
const $qs = (sel, ctx = document) => ctx.querySelector(sel);
const getParam = key => new URLSearchParams(window.location.search).get(key);

const formatTime = sec => {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

const normalizeRespuesta = str =>
  str.trim()
     .replace(/\s+/g, "")
     .toLowerCase()
     .replace(/\u2212/g, "-")
     .replace(/\u00d7/g, "*");

// ──────────────────────────────────────────────────────────
//  SISTEMA DE PENALIZACIONES
// ──────────────────────────────────────────────────────────
function registrarIntentoFallido(retoId) {
  if (!Estado.intentosPorReto[retoId]) {
    Estado.intentosPorReto[retoId] = 0;
  }
  Estado.intentosPorReto[retoId]++;
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

function getIntentosReto(retoId) {
  return Estado.intentosPorReto[retoId] || 0;
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
    alertEl.id        = "intentos-alerta";
    alertEl.className = "intentos-alerta";
    const btnValidar  = $id("btn-validar");
    if (btnValidar) btnValidar.insertAdjacentElement("afterend", alertEl);
  }

  const restantes = MAX_INTENTOS - intentosActuales;

  if (penalizado) {
    alertEl.className   = "intentos-alerta critico";
    alertEl.textContent = `⚠ Se aplicó −${formatTime(PENALIZACION_SEG)}. Tienes ${MAX_INTENTOS} intentos nuevos.`;
  } else if (intentosActuales === 0) {
    alertEl.classList.add("hidden");
  } else if (restantes === 1) {
    alertEl.className   = "intentos-alerta critico";
    alertEl.textContent = `⚠ Último intento. El siguiente error descuenta −${formatTime(PENALIZACION_SEG)}.`;
  } else {
    alertEl.className   = "intentos-alerta";
    alertEl.textContent = `Llevas ${intentosActuales} intento${intentosActuales > 1 ? "s" : ""} fallido${intentosActuales > 1 ? "s" : ""}. Penalización al ${MAX_INTENTOS}.º`;
  }
}

// ──────────────────────────────────────────────────────────
//  TEMPORIZADOR GLOBAL
// ──────────────────────────────────────────────────────────
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
    if (remaining <= 60)       clockEl.classList.add("danger");
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
//  gameEngine.js  —  PARTE 3 / 6
//  initVestibulo · initMapa
// ============================================================

// ──────────────────────────────────────────────────────────
//  VESTÍBULO  (index.html)
//  Resetea el estado y arranca la misión al pulsar el botón.
// ──────────────────────────────────────────────────────────
function initVestibulo() {
  const btn = $id("btn-iniciar-mision");
  if (!btn) return;

  btn.addEventListener("click", () => {
    Estado.startTime = Date.now();
    Estado.resueltos = [];
    Estado.penalizacion = 0;
    Estado.intentosPorReto = {};
    saveEstado();
    window.location.href = "mapa.html";
  });
}

// ──────────────────────────────────────────────────────────
//  MAPA  (mapa.html)
//  Pinta cada nodo según su estado:
//    - completed   → reto ya resuelto, enlace activo
//    - active-node → siguiente reto disponible
//    - locked      → bloqueado, sin enlace
//  Si todos los retos están resueltos, redirige a cierre.
// ──────────────────────────────────────────────────────────
function initMapa() {
  if (!window.location.pathname.includes("mapa.html")) return;

  const desbloqueado = Estado.resueltos.length + 1; // id del siguiente reto

  RETOS.forEach(reto => {
    const nodo = $id(`nodo-${reto.id}`);
    if (!nodo) return;

    nodo.classList.remove("completed", "active-node", "locked");

    if (Estado.resueltos.includes(reto.id)) {
      // ── Completado ──
      nodo.classList.add("completed");
      nodo.href = `reto.html?id=${reto.id}`;

      const lbl = $qs(".nodo-status-label", nodo);
      if (lbl) {
        lbl.className   = "nodo-status-label status-completed";
        lbl.textContent = "✓ Completado";
      }

    } else if (reto.id === desbloqueado) {
      // ── Disponible ──
      nodo.classList.add("active-node");
      nodo.href = `reto.html?id=${reto.id}`;

      const lbl = $qs(".nodo-status-label", nodo);
      if (lbl) {
        lbl.className   = "nodo-status-label status-active";
        lbl.textContent = "🔓 Disponible";
      }

    } else {
      // ── Bloqueado ──
      nodo.classList.add("locked");
      nodo.removeAttribute("href");
      nodo.setAttribute("aria-disabled", "true");
      nodo.addEventListener("click", e => e.preventDefault());
    }
  });

  // Si completó todo → redirige directo al cierre
  if (Estado.resueltos.length >= TOTAL_RETOS) {
    window.location.href = "cierre.html";
  }
}
// ============================================================
//  gameEngine.js  —  PARTE 4 / 6
//  initReto + renderizadores por tipo (Tipo 1, 2, 3)
// ============================================================

// ──────────────────────────────────────────────────────────
//  DESPACHO DE RETO  (reto.html)
// ──────────────────────────────────────────────────────────
function initReto() {
  if (!window.location.pathname.includes("reto.html")) return;

  const idParam = parseInt(getParam("id"), 10);
  const reto    = RETOS.find(r => r.id === idParam);
  if (!reto) { window.location.href = "mapa.html"; return; }

  _pintarEstructura(reto);

  switch (reto.tipo) {
    case 1: _renderTipo1(reto); break;
    case 2: _renderTipo2(reto); break;
    case 3: _renderTipo3(reto); break;
    case 5: _renderTipo5(reto); break;
    case 6: _renderTipo6(reto); break;
    default: _renderTipo1(reto);
  }
}

// ──────────────────────────────────────────────────────────
//  Cabecero compartido: eyebrow, título, tags, narrativa,
//  enunciado
// ──────────────────────────────────────────────────────────
function _pintarEstructura(reto) {
  const eyebrow   = $id("reto-eyebrow");
  const titulo    = $id("reto-titulo");
  const tagsCont  = $id("reto-tags");
  const narrativa = $id("reto-narrativa");
  const enunciado = $id("reto-enunciado");

  if (eyebrow)   eyebrow.textContent = reto.eyebrow  || "";
  if (titulo)    titulo.textContent  = reto.titulo    || "";
  if (narrativa) narrativa.innerHTML = reto.narrativa || "";
  if (enunciado) enunciado.innerHTML = reto.enunciado || "";

  if (tagsCont && reto.tags) {
    tagsCont.innerHTML = reto.tags
      .map(t => `<span class="rtag ${t.cls}">${t.label}</span>`)
      .join("");
  }
}

// ──────────────────────────────────────────────────────────
//  TIPO 1 · Selección múltiple (radio-button estilizado)
// ──────────────────────────────────────────────────────────
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
      cont.querySelectorAll(".opcion-pro-inner")
          .forEach(el => el.classList.remove("selected"));
      inp.closest(".opcion-pro-inner").classList.add("selected");
    });
  });

  _attachValidar(reto, () => {
    const sel = cont.querySelector("input[type=radio]:checked");
    return sel ? sel.value : null;
  });
}

// ──────────────────────────────────────────────────────────
//  TIPO 2 · Drag & Drop con soporte de teclado
// ──────────────────────────────────────────────────────────
function _renderTipo2(reto) {
  const cont = $id("opciones-container");
  if (!cont) return;

  const opcMezcladas = [...reto.opciones].sort(() => Math.random() - 0.5);

  cont.innerHTML = `
    <div class="drag-pool" id="drag-pool"
         aria-label="Fichas disponibles" role="list">
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
      <span class="drop-placeholder" id="drop-placeholder">
        ← Arrastra aquí tu respuesta
      </span>
    </div>
  `;

  const pool = $id("drag-pool");
  const zone = $id("drop-zone");
  let chipEnZona = null;

  // ── Drag events ──
  pool.querySelectorAll(".drag-chip").forEach(chip => {
    chip.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", chip.dataset.id);
      chip.classList.add("dragging");
    });
    chip.addEventListener("dragend", () =>
      chip.classList.remove("dragging"));

    // Soporte teclado: Enter / Espacio
    chip.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        _moverChipAZona(chip);
      }
    });
  });

  zone.addEventListener("dragover", e => {
    e.preventDefault();
    zone.classList.add("drag-over");
  });
  zone.addEventListener("dragleave", () =>
    zone.classList.remove("drag-over"));
  zone.addEventListener("drop", e => {
    e.preventDefault();
    zone.classList.remove("drag-over");
    const chipId = e.dataTransfer.getData("text/plain");
    const chip   = document.getElementById(`chip-${chipId}`);
    if (chip) _moverChipAZona(chip);
  });

  function _moverChipAZona(chip) {
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

  _attachValidar(reto, () =>
    chipEnZona ? chipEnZona.dataset.id : null
  );
}

// ──────────────────────────────────────────────────────────
//  TIPO 3 · Escribir "correcto" frente a la opción válida
// ──────────────────────────────────────────────────────────
function _renderTipo3(reto) {
  const cont = $id("opciones-container");
  if (!cont) return;

  cont.innerHTML = reto.opciones.map((op, i) => `
    <div class="tipo3-row" id="row-${op.id}"
         role="group" aria-label="Opción ${i + 1}">
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
      if (inp.value.trim().toLowerCase() === "correcto")
        return inp.dataset.id;
    }
    return null;
  });
}
// ============================================================
//  gameEngine.js  —  PARTE 5 / 6
//  Tipo 5 (respuesta abierta) · Tipo 6 (código + confetti)
//  _attachValidar (validación central con penalizaciones)
// ============================================================

// ──────────────────────────────────────────────────────────
//  TIPO 5 · Respuesta abierta con input de texto
// ──────────────────────────────────────────────────────────
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

  // Enter también valida
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      $id("btn-validar")?.click();
    }
  });

  _attachValidar(reto, () => {
    const val = normalizeRespuesta(input.value);
    if (!val) return null;

    const aceptadas = (reto.respuestasAceptadas || [reto.respuestaExacta])
      .map(r => normalizeRespuesta(r));

    return aceptadas.includes(val) ? "5c" : "wrong-open";
  });
}

// ──────────────────────────────────────────────────────────
//  TIPO 6 · Selección múltiple → muestra código → confetti
// ──────────────────────────────────────────────────────────
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
      cont.querySelectorAll(".opcion-pro-inner")
          .forEach(el => el.classList.remove("selected"));
      inp.closest(".opcion-pro-inner").classList.add("selected");
    });
  });

  _attachValidar(reto, () => {
    const sel = cont.querySelector("input[type=radio]:checked");
    return sel ? sel.value : null;
  });
}

// ──────────────────────────────────────────────────────────
//  Animación de victoria (solo Tipo 6)
// ──────────────────────────────────────────────────────────
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
      <p class="victory-msg">Has liberado el algoritmo. La comunidad escolar
        puede acceder a sus derechos nuevamente.</p>
      <button class="btn btn-primary btn-lg" id="btn-al-cierre">
        Ver resultados finales →
      </button>
    </div>
  `;

  // Confetti CSS puro (sin dependencias)
  const colores = ["#38BDF8", "#F59E0B", "#34D399", "#F472B6", "#A78BFA"];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement("div");
    p.className = "confetti-particle";
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colores[i % colores.length]};
      width:  ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      animation-duration:   ${0.8 + Math.random() * 1.4}s;
      animation-delay:      ${Math.random() * 0.6}s;
      animation-timing-function: ease-in;
    `;
    overlay.appendChild(p);
  }

  document.body.appendChild(overlay);
  setTimeout(() => overlay.querySelector(".victory-content")?.focus(), 100);

  overlay.querySelector("#btn-al-cierre")
    .addEventListener("click", () => {
      window.location.href = "cierre.html";
    });
}

// ──────────────────────────────────────────────────────────
//  _attachValidar
//  Conecta #btn-validar con la lógica de evaluación.
//  Integra el sistema de penalizaciones de la Parte 2.
//
//  @param {object}   reto        — objeto del reto activo
//  @param {Function} getSelected — devuelve el id de la opción
//                                  seleccionada (o null)
// ──────────────────────────────────────────────────────────
function _attachValidar(reto, getSelected) {
  const btnValidar    = $id("btn-validar");
  const feedbackCont  = $id("feedback-container");
  const feedbackIcon  = $id("feedback-icon");
  const feedbackTitle = $id("feedback-title");
  const feedbackBody  = $id("feedback-body");
  const btnNext       = $id("btn-next");

  if (!btnValidar) return;

  btnValidar.addEventListener("click", () => {
    const selId = getSelected();

    // ── Sin selección ──
    if (!selId) {
      if (feedbackCont) {
        feedbackCont.className = "feedback-container visible warning";
        if (feedbackTitle) feedbackTitle.textContent = "Selecciona una opción";
        if (feedbackBody)  feedbackBody.innerHTML =
          "Elige o escribe una respuesta antes de validar.";
      }
      return;
    }

    const opcion     = reto.opciones.find(o => o.id === selId);
    const esCorrecta = opcion ? opcion.correcta : false;

    // ── Mostrar feedback ──
    if (feedbackCont) {
      feedbackCont.className =
        `feedback-container visible ${esCorrecta ? "correct" : "incorrect"}`;
      if (feedbackIcon)  feedbackIcon.textContent =
        esCorrecta ? "✅" : "❌";
      if (feedbackTitle) feedbackTitle.textContent =
        esCorrecta ? "¡Correcto! Misión cumplida" : "Intento fallido";
      if (feedbackBody && opcion)
        feedbackBody.innerHTML = opcion.feedback;
    }

    // ── INCORRECTO → registrar penalización ──
    if (!esCorrecta) {
      const { penalizado, intentosActuales } =
        registrarIntentoFallido(reto.id);
      _mostrarAlertaIntentos(reto.id, intentosActuales, penalizado);
      return;
    }

    // ── CORRECTO ──
    btnValidar.disabled    = true;
    btnValidar.textContent = "Validado ✓";

    // Registra el reto como resuelto (sin duplicados)
    if (!Estado.resueltos.includes(reto.id)) {
      Estado.resueltos.push(reto.id);
      saveEstado();
    }

    // Animación especial para Tipo 6 (misión final)
    if (reto.tipo === 6) {
      setTimeout(_dispararVictoria, 700);
      return;
    }

    // Muestra botón siguiente
    if (btnNext) {
      const siguienteId = reto.id + 1;
      if (siguienteId <= TOTAL_RETOS) {
        btnNext.href        = `reto.html?id=${siguienteId}`;
        btnNext.textContent = "Siguiente reto →";
      } else {
        btnNext.href        = "cierre.html";
        btnNext.textContent = "Ver resultados →";
      }
      btnNext.classList.remove("hidden");
      btnNext.focus();
    }
  });
}
// ============================================================
//  gameEngine.js  —  PARTE 6 / 6
//  initCierre · Bootstrap (DOMContentLoaded)
// ============================================================

// ──────────────────────────────────────────────────────────
//  CIERRE  (cierre.html)
//  Muestra el resumen de la misión: tiempo, retos resueltos,
//  nivel de logro, lista de retos y botón de reinicio.
// ──────────────────────────────────────────────────────────
function initCierre() {
  if (!window.location.pathname.includes("cierre.html")) return;

  const resueltosN = Estado.resueltos.length;
  const total      = TOTAL_RETOS;

  // ── Tiempo total empleado ──
  const elapsedSec = Estado.startTime
    ? Math.min(
        Math.floor((Date.now() - Estado.startTime) / 1000),
        DURATION_SEC
      )
    : 0;
  const tiempoUsado = formatTime(elapsedSec);
  const remaining   = Math.max(0, DURATION_SEC - elapsedSec);
  const tiempoSobra = formatTime(remaining);

  // ── Penalización total aplicada ──
  const penalizTotal = formatTime(Estado.penalizacion || 0);

  // ── Nivel según desempeño ──
  let nivel, mensaje, iconoNivel;
  if (resueltosN === total) {
    nivel      = "LEYENDA DEL SISTEMA";
    iconoNivel = "🏆";
    mensaje    = "¡Completaste todos los retos! El sistema educativo fue restaurado totalmente. Eres un agente de élite.";
  } else if (resueltosN >= 4) {
    nivel      = "EXPERTO DIGITAL";
    iconoNivel = "⭐";
    mensaje    = `Lograste ${resueltosN} de ${total} retos. ¡Gran desempeño! Solo faltaron ${total - resueltosN} para la misión completa.`;
  } else if (resueltosN >= 2) {
    nivel      = "AGENTE EN FORMACIÓN";
    iconoNivel = "🔷";
    mensaje    = `Completaste ${resueltosN} de ${total} retos. Sigue entrenando tus habilidades algebraicas para la próxima misión.`;
  } else {
    nivel      = "RECIÉN INICIADO";
    iconoNivel = "🔰";
    mensaje    = `Completaste ${resueltosN} de ${total} retos. Revisa los productos notables y vuelve a intentarlo.`;
  }

  // ── Inyecta valores en el DOM ──
  const tiles = {
    "cierre-resueltos":  `${resueltosN} / ${total}`,
    "cierre-tiempo":     tiempoUsado,
    "cierre-sobrante":   tiempoSobra,
    "cierre-penalizacion": penalizTotal,
    "cierre-nivel":      `${iconoNivel} ${nivel}`,
    "cierre-mensaje":    mensaje,
    "cierre-icon-nivel": iconoNivel
  };

  Object.entries(tiles).forEach(([id, val]) => {
    const el = $id(id);
    if (el) el.innerHTML = val;
  });

  // ── Barra visual de progreso ──
  const barraEl = $id("cierre-barra");
  const porcEl  = $id("cierre-porcentaje");
  const pct     = Math.round((resueltosN / total) * 100);

  if (barraEl) {
    barraEl.style.width = pct + "%";
    barraEl.setAttribute("aria-valuenow", pct);
  }
  if (porcEl) porcEl.textContent = `${pct}%`;

  // ── Lista detallada de retos ──
  const listaEl = $id("cierre-lista-retos");
  if (listaEl) {
    listaEl.innerHTML = RETOS.map(r => {
      const done = Estado.resueltos.includes(r.id);
      return `
        <li class="cierre-reto-item ${done ? "done" : "pending"}">
          <span class="cierre-reto-icon" aria-hidden="true">
            ${done ? "✅" : "🔒"}
          </span>
          <span class="cierre-reto-titulo">
            Reto ${r.id}: ${r.titulo}
          </span>
        </li>
      `;
    }).join("");
  }

  // ── Botón reiniciar misión ──
  const btnReinicio = $id("btn-reiniciar");
  if (btnReinicio) {
    btnReinicio.addEventListener("click", () => {
      try { sessionStorage.removeItem("er-state"); } catch (_) {}
      Estado.startTime       = 0;
      Estado.resueltos       = [];
      Estado.penalizacion    = 0;
      Estado.intentosPorReto = {};
      window.location.href   = "index.html";
    });
  }
}

// ──────────────────────────────────────────────────────────
//  BOOTSTRAP
//  Punto de entrada único. Detecta la página actual y llama
//  a la función de inicialización correspondiente.
// ──────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {

  // 1. Carga el estado guardado entre páginas
  loadEstado();

  const path = window.location.pathname;

  // 2. Arranca el reloj en todas las páginas excepto index
  const esIndex = path.includes("index.html")
                  || path === "/"
                  || path === "";
  if (!esIndex) startClock();

  // 3. Inicializa la lógica específica de la página
  if (esIndex) {
    initVestibulo();
  } else if (path.includes("mapa.html")) {
    initMapa();
  } else if (path.includes("reto.html")) {
    initReto();
  } else if (path.includes("cierre.html")) {
    initCierre();
  }
});

// ============================================================
//  FIN DE gameEngine.js
//
//  Orden de concatenación del archivo final:
//    1. gameEngine-p1.js  →  RETOS[]
//    2. gameEngine-p2.js  →  Estado, penalizaciones, reloj
//    3. gameEngine-p3.js  →  initVestibulo, initMapa
//    4. gameEngine-p4.js  →  initReto, Tipo 1, 2, 3
//    5. gameEngine-p5.js  →  Tipo 5, 6, _attachValidar
//    6. gameEngine-p6.js  →  initCierre, Bootstrap
//
//  Una sola etiqueta en cada HTML:
//  <script src="gameEngine.js" defer></script>
// ============================================================
