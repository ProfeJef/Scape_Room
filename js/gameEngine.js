// ============================================================
//  gameEngine.js  —  Escape Room Educativo · Matemáticas 8°
// ============================================================

const RETOS = [
  {
    id: 1,
    titulo: "El mural que nadie midió",
    eyebrow: "Productos notables · (a+b)²",
    tags: [
      { label: "Productos notables", cls: "rtag-purple" },
      { label: "(a+b)²",            cls: "rtag-pink"   },
      { label: "Área",              cls: "rtag-gold"   }
    ],
    narrativa: `El sistema <strong>SistemaEduAlgo</strong> aprobó un presupuesto para
    pintar un mural cuyo lado mide <strong>(a + b)</strong> metros. Para calcular
    el área usó la expresión <em>a² + b²</em>, ignorando el término central.
    El presupuesto resultó incorrecto y el dinero será mal invertido.
    ¿Cuál es el desarrollo correcto del área del mural?`,
    enunciado: "Selecciona la expresión que representa correctamente el área de un cuadrado de lado (a + b):",
    opciones: [
      { id:"1a", texto:"a² + b²", correcta:false,
        feedback:`<strong>Incorrecto.</strong> Este es el error más frecuente: olvidar el término del <em>doble producto</em>. La suma de cuadrados <em>no</em> es igual al cuadrado de una suma. Desde el constructivismo, comprender la diferencia requiere relacionar el símbolo con su representación geométrica: al elevar al cuadrado un binomio obtienes cuatro regiones, no dos.` },
      { id:"1b", texto:"2a + 2b", correcta:false,
        feedback:`<strong>Incorrecto.</strong> Esta expresión representa el <em>perímetro</em> del cuadrado, no su área. Confundir perímetro con área es un error conceptual que afecta la modelación de situaciones reales.` },
      { id:"1c", texto:"a² + 2ab + b²", correcta:true,
        feedback:`<strong>¡Correcto!</strong> El desarrollo de <em>(a+b)² = a² + 2ab + b²</em> incluye las dos áreas cuadradas y los dos rectángulos centrales <em>(2ab)</em>. Esta identidad conecta el álgebra con la geometría y permite calcular áreas de forma precisa.` },
      { id:"1d", texto:"a² − 2ab + b²", correcta:false,
        feedback:`<strong>Incorrecto.</strong> Esta expresión corresponde al desarrollo de <em>(a−b)²</em>, no de <em>(a+b)²</em>. La diferencia es el signo del término central.` }
    ]
  },
  {
    id: 2,
    titulo: "El terreno compartido",
    eyebrow: "Factor común · Distribución justa",
    tags: [
      { label: "Factor común",   cls: "rtag-purple" },
      { label: "Distribución",  cls: "rtag-pink"   },
      { label: "Contexto real", cls: "rtag-gold"   }
    ],
    narrativa: `El colegio quiere repartir un terreno para proyectos estudiantiles.
    El sistema propone la expresión <em>10x² + 20x + 30</em> pero dice que
    <strong>"no es posible simplificarla"</strong> y declara el reparto inviable.
    El equipo debe demostrar que el sistema está equivocado extrayendo el factor común.`,
    enunciado: "¿Cuál es la factorización correcta de 10x² + 20x + 30 usando factor común?",
    opciones: [
      { id:"2a", texto:"2(5x² + 10x + 15)", correcta:false,
        feedback:`<strong>Incorrecto.</strong> El factor extraído es 2, pero no es el <em>mayor</em> factor común. El MCD de 10, 20 y 30 es 10, no 2.` },
      { id:"2b", texto:"10(x² + 2x + 3)", correcta:true,
        feedback:`<strong>¡Correcto!</strong> El mayor factor común es <em>10</em>. La factorización <em>10(x²+2x+3)</em> revela que el terreno puede dividirse en 10 partes iguales. La factorización es una herramienta de justicia en la distribución de recursos.` },
      { id:"2c", texto:"10x(x + 2 + 3)", correcta:false,
        feedback:`<strong>Incorrecto.</strong> Al extraer <em>10x</em> el tercer término quedaría como <em>3/x</em>, que no es polinomial. El factor común solo puede extraerse si divide exactamente a todos los términos.` },
      { id:"2d", texto:"5(2x² + 4x + 6)", correcta:false,
        feedback:`<strong>Incorrecto.</strong> Aunque 5 divide los coeficientes, no es el <em>mayor</em> factor común. La expresión entre paréntesis aún puede simplificarse.` }
    ]
  },
  {
    id: 3,
    titulo: "El contenedor que guarda todo",
    eyebrow: "Binomio al cubo · Volumen",
    tags: [
      { label: "Binomio al cubo", cls: "rtag-purple" },
      { label: "(a+b)³",          cls: "rtag-pink"   },
      { label: "Volumen 3D",      cls: "rtag-gold"   }
    ],
    narrativa: `El colegio diseñó un contenedor cúbico para materiales reciclables
    cuyo lado mide <strong>(a+b)</strong>. El sistema calculó el volumen usando solo
    <em>a³+b³</em>, subestimando la capacidad real. El equipo debe corregir el modelo
    con el desarrollo completo del binomio al cubo.`,
    enunciado: "¿Cuál es el desarrollo correcto de (a + b)³?",
    opciones: [
      { id:"3a", texto:"a³ + b³", correcta:false,
        feedback:`<strong>Incorrecto.</strong> El cubo de una suma <em>no</em> es igual a la suma de los cubos. Un cubo de lado <em>(a+b)</em> contiene <strong>8 subvolúmenes</strong> que no pueden ignorarse.` },
      { id:"3b", texto:"a³ + 3a²b + 3ab² + b³", correcta:true,
        feedback:`<strong>¡Correcto!</strong> El desarrollo <em>(a+b)³ = a³+3a²b+3ab²+b³</em> incluye los dos cubos y los seis prismas rectangulares internos. Los términos <em>3a²b</em> y <em>3ab²</em> representan volúmenes reales que no pueden omitirse.` },
      { id:"3c", texto:"a³ + 2a²b + 2ab² + b³", correcta:false,
        feedback:`<strong>Incorrecto.</strong> Los coeficientes correctos son <em>3</em>, no 2. Hay exactamente tres prismas de cada tipo. Verifica con el triángulo de Pascal: la fila del cubo es 1-3-3-1.` },
      { id:"3d", texto:"3a³ + 3b³", correcta:false,
        feedback:`<strong>Incorrecto.</strong> El binomio al cubo siempre produce cuatro términos con coeficientes 1-3-3-1. Una expresión con solo dos términos no puede ser el cubo de un binomio.` }
    ]
  },
    {
    id: 4,
    titulo: "El algoritmo de las notas",
    eyebrow: "Productos notables · Análisis crítico",
    tags: [
      { label: "Análisis crítico",  cls: "rtag-purple" },
      { label: "Detección errores", cls: "rtag-pink"   }
    ],
    narrativa: `El sistema calcula la nota final con <em>(base+bono)²</em> pero la
    desarrolló como <em>base²+bono²</em>, omitiendo el término central. Esto genera
    notas más bajas de lo real para estudiantes con bono positivo.
    ¿Qué término falta en el desarrollo del sistema?`,
    enunciado: "Si la nota se modela con (base + bono)², ¿qué término omitió el sistema?",
    opciones: [
      { id:"4a", texto:"base × bono", correcta:false,
        feedback:`<strong>Incorrecto.</strong> El término faltante no es solo el producto, sino el <em>doble</em> del producto. En <em>(a+b)²</em> el coeficiente 2 es esencial.` },
      { id:"4b", texto:"2 × base × bono", correcta:true,
        feedback:`<strong>¡Correcto!</strong> El término faltante es <em>2·base·bono</em>. Al omitirlo, el sistema subestima la nota de cualquier estudiante con bono positivo. Un error algebraico pequeño puede generar <strong>consecuencias reales injustas</strong>.` },
      { id:"4c", texto:"2 × base²", correcta:false,
        feedback:`<strong>Incorrecto.</strong> El doble de base al cuadrado no forma parte de <em>(a+b)²</em>. Los términos siempre son: <em>a²</em>, <em>2ab</em> y <em>b²</em>.` },
      { id:"4d", texto:"bono²", correcta:false,
        feedback:`<strong>Incorrecto.</strong> El término <em>bono²</em> ya está en la expresión del sistema. Lo que falta es el doble producto <em>2·base·bono</em>.` }
    ]
  },
  {
    id: 5,
    titulo: "El festival de matemáticas",
    eyebrow: "Factor común · Reparto equitativo",
    tags: [
      { label: "Factor común",     cls: "rtag-purple" },
      { label: "Economía escolar", cls: "rtag-gold"   }
    ],
    narrativa: `Tres cursos recaudaron en total <em>12x³+18x²+6x</em> pesos.
    El sistema propone dividir extrayendo solo el factor <em>2x</em>, dejando
    una expresión aún simplificable. El equipo debe encontrar el mayor factor
    común para un reparto completamente simplificado.`,
    enunciado: "¿Cuál es la factorización completa de 12x³ + 18x² + 6x?",
    opciones: [
      { id:"5a", texto:"2x(6x² + 9x + 3)", correcta:false,
        feedback:`<strong>Incorrecto.</strong> Con factor <em>2x</em> la expresión entre paréntesis sigue siendo simplificable. Siempre se extrae el <em>mayor</em> factor común posible.` },
      { id:"5b", texto:"6x(2x² + 3x + 1)", correcta:true,
        feedback:`<strong>¡Correcto!</strong> El MCD de 12, 18 y 6 es <em>6</em> y todos los términos tienen factor <em>x</em>. La factorización <em>6x(2x²+3x+1)</em> permite repartir en 6x partes iguales de forma transparente y justa.` },
      { id:"5c", texto:"3(4x³ + 6x² + 2x)", correcta:false,
        feedback:`<strong>Incorrecto.</strong> Se extrajo el factor numérico 3 pero no el literal <em>x</em>. La factorización correcta debe considerar tanto la parte numérica como la literal del MCD.` },
      { id:"5d", texto:"x(12x² + 18x + 6)", correcta:false,
        feedback:`<strong>Incorrecto.</strong> Se extrajo el factor literal <em>x</em> pero se ignoró el factor numérico común 6. La expresión entre paréntesis sigue teniendo factor común 6.` }
    ]
  },
  {
    id: 6,
    titulo: "La fórmula justa del sistema",
    eyebrow: "Creación algebraica · Misión final",
    tags: [
      { label: "Nivel creación", cls: "rtag-purple" },
      { label: "Misión final",   cls: "rtag-pink"   },
      { label: "Bloom",          cls: "rtag-gold"   }
    ],
    narrativa: `La bonificación se modela con <em>(p+3)²−9</em> donde <em>p</em>
    es la participación. El sistema simplifica erróneamente esta expresión como solo
    <em>p²</em>. El equipo debe identificar el desarrollo correcto y completo
    para restaurar el sistema definitivamente.`,
    enunciado: "¿Cuál es el desarrollo correcto de (p + 3)² − 9?",
    opciones: [
      { id:"6a", texto:"p²", correcta:false,
        feedback:`<strong>Incorrecto.</strong> Esta es exactamente la simplificación errónea del sistema. Desarrollando: <em>(p+3)²−9 = p²+6p+9−9 = p²+6p</em>. El término <em>6p</em> omitido subestima la bonificación de todos los estudiantes con participación positiva.` },
      { id:"6b", texto:"p² + 6p + 9", correcta:false,
        feedback:`<strong>Incorrecto.</strong> Este es el desarrollo de <em>(p+3)²</em> sin restar el 9. La expresión completa incluye <em>−9</em>, así que: <em>p²+6p+9−9 = p²+6p</em>.` },
      { id:"6c", texto:"p² + 6p", correcta:true,
        feedback:`<strong>¡Correcto!</strong> Desarrollando: <em>(p+3)²−9 = p²+6p+9−9 = p²+6p</em>. Esta expresión se factoriza como <em>p(p+6)</em>, mostrando que la bonificación es proporcional a la participación. Has combinado productos notables, simplificación y factorización. <strong>¡El sistema ha sido restaurado!</strong>` },
      { id:"6d", texto:"p(p + 3)", correcta:false,
        feedback:`<strong>Incorrecto.</strong> Esta expresión equivale a <em>p²+3p</em>. El desarrollo de <em>(p+3)²</em> incluye el doble producto <em>2·p·3=6p</em>, no <em>3p</em>. El coeficiente 6 es clave.` }
    ]
  }
];
// ──────────────────────────────────────────────────────────
//  CONSTANTES Y UTILIDADES
// ──────────────────────────────────────────────────────────
const TOTAL_RETOS   = RETOS.length;
const DURATION_SEC  = 45 * 60;
const KEY_TIMER     = "er-startTime";
const KEY_RESUELTOS = "er-resueltos";

const $id      = (id)  => document.getElementById(id);
const qs       = (sel, ctx = document) => ctx.querySelector(sel);
const getParam = (key) => new URLSearchParams(window.location.search).get(key);

const saveResueltos = (arr) => localStorage.setItem(KEY_RESUELTOS, JSON.stringify(arr));
const loadResueltos = ()    => JSON.parse(localStorage.getItem(KEY_RESUELTOS) || "[]");
const saveStart     = (ts)  => localStorage.setItem(KEY_TIMER, String(ts));
const loadStart     = ()    => parseInt(localStorage.getItem(KEY_TIMER) || "0");

const formatTime = (sec) => {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
};

// ──────────────────────────────────────────────────────────
//  TEMPORIZADOR GLOBAL
// ──────────────────────────────────────────────────────────
let clockInterval = null;

function startClock() {
  const clockEl     = $id("clock");
  const progressBar = $id("progress-bar");
  const progressTxt = $id("progress-txt");
  const startTime   = loadStart();
  if (!startTime || !clockEl) return;

  const tick = () => {
    const elapsed   = Math.floor((Date.now() - startTime) / 1000);
    const remaining = Math.max(0, DURATION_SEC - elapsed);
    clockEl.textContent = formatTime(remaining);
    clockEl.classList.remove("warning","danger");
    if (remaining <= 60)       clockEl.classList.add("danger");
    else if (remaining <= 300) clockEl.classList.add("warning");
    if (progressBar) {
      const res = loadResueltos();
      const pct = Math.round((res.length / TOTAL_RETOS) * 100);
      progressBar.style.width = pct + "%";
      if (progressTxt) progressTxt.textContent = `${res.length} / ${TOTAL_RETOS}`;
    }
    if (remaining <= 0) { clearInterval(clockInterval); window.location.href = "cierre.html"; }
  };
  tick();
  clockInterval = setInterval(tick, 1000);
}

// ──────────────────────────────────────────────────────────
//  VESTÍBULO
// ──────────────────────────────────────────────────────────
function initVestibulo() {
  const btn = $id("btn-iniciar-mision");
  if (!btn) return;
  btn.addEventListener("click", () => {
    localStorage.removeItem(KEY_TIMER);
    localStorage.removeItem(KEY_RESUELTOS);
    saveStart(Date.now());
    saveResueltos([]);
    window.location.href = "mapa.html";
  });
}

// ──────────────────────────────────────────────────────────
//  MAPA
// ──────────────────────────────────────────────────────────
function initMapa() {
  // ✅ Después
const enMapa = window.location.pathname.includes("mapa.html");
if (!enMapa) return;
  const resueltos    = loadResueltos();
  const desbloqueado = resueltos.length + 1;
  RETOS.forEach(reto => {
    const nodo = $id(`nodo-${reto.id}`);
    if (!nodo) return;
    nodo.classList.remove("completed","active-node","locked");
    if (resueltos.includes(reto.id)) {
      nodo.classList.add("completed");
      nodo.href = `reto.html?id=${reto.id}`;
      const lbl = qs(".nodo-status-label", nodo);
      if (lbl) { lbl.className = "nodo-status-label status-completed"; lbl.textContent = "✓ Completado"; }
    } else if (reto.id === desbloqueado) {
      nodo.classList.add("active-node");
      nodo.href = `reto.html?id=${reto.id}`;
    } else {
      nodo.classList.add("locked");
      nodo.href = "#";
      nodo.addEventListener("click", e => e.preventDefault());
    }
  });
  if (resueltos.length >= TOTAL_RETOS) window.location.href = "cierre.html";
}

// ──────────────────────────────────────────────────────────
//  RETO
// ──────────────────────────────────────────────────────────
function initReto() {
 // ✅ Después
const enReto = window.location.pathname.includes("reto.html");
if (!enReto) return;
  const id   = parseInt(getParam("id"));
  const reto = RETOS.find(r => r.id === id);
  if (!reto) { window.location.href = "mapa.html"; return; }
  const resueltos    = loadResueltos();
  const desbloqueado = resueltos.length + 1;
  if (id > desbloqueado) { window.location.href = "mapa.html"; return; }

  // Rellenar cabecera
  const numBadge  = $id("reto-num-badge");
  const eyebrow   = $id("reto-eyebrow-label");
  const titulo    = $id("reto-titulo");
  const tagsEl    = $id("reto-tags");
  const narrativa = $id("reto-narrativa");
  if (numBadge)  numBadge.textContent = `Reto ${String(id).padStart(2,"0")}`;
  if (eyebrow)   eyebrow.textContent  = reto.eyebrow;
  if (titulo)    titulo.textContent   = reto.titulo;
  if (narrativa) narrativa.innerHTML  = reto.narrativa;
  if (tagsEl)    tagsEl.innerHTML     = reto.tags.map(t => `<span class="rtag ${t.cls}">${t.label}</span>`).join("");

  // Opciones
  const opcionesEl = $id("reto-opciones");
  if (opcionesEl) {
    opcionesEl.innerHTML = reto.opciones.map(op => `
      <label class="opcion-item" data-id="${op.id}">
        <input type="radio" name="opcion" value="${op.id}" />
        <div class="opcion-radio"><div class="opcion-radio-dot"></div></div>
        <span class="opcion-text">${op.texto}</span>
      </label>`).join("");
  }

  const btnValidar   = $id("btn-validar");
  const feedback     = $id("feedback");
  const fbIcon       = $id("fb-icon");
  const fbTitle      = $id("fb-title");
  const fbText       = $id("fb-text");
  const btnSiguiente = $id("btn-siguiente");
  let seleccionado   = null;
  let yaRespondio    = false;

  opcionesEl.addEventListener("change", (e) => {
    if (yaRespondio) return;
    seleccionado = e.target.value;
    btnValidar.disabled = false;
    document.querySelectorAll(".opcion-item").forEach(el =>
      el.classList.toggle("selected", el.dataset.id === seleccionado));
  });

  btnValidar.addEventListener("click", () => {
    if (!seleccionado || yaRespondio) return;
    yaRespondio = true;
    btnValidar.disabled = true;
    const opcion   = reto.opciones.find(o => o.id === seleccionado);
    const correcta = opcion.correcta;
    document.querySelectorAll(".opcion-item").forEach(el => {
      el.classList.remove("selected");
      if (el.dataset.id === seleccionado) el.classList.add(correcta ? "correct" : "incorrect");
      if (!correcta) {
        const opCorrecta = reto.opciones.find(o => o.correcta);
        if (el.dataset.id === opCorrecta.id) el.classList.add("correct");
      }
    });
    feedback.className  = `feedback-card ${correcta ? "correct" : "incorrect"} visible`;
    fbIcon.textContent  = correcta ? "✅" : "⚠️";
    fbTitle.textContent = correcta ? "¡Respuesta correcta!" : "Respuesta incorrecta";
    fbText.innerHTML    = opcion.feedback;
    setTimeout(() => feedback.scrollIntoView({ behavior:"smooth", block:"nearest" }), 100);
    if (correcta) {
      const res = loadResueltos();
      if (!res.includes(id)) { res.push(id); saveResueltos(res); }
      if (btnSiguiente) {
        btnSiguiente.classList.add("visible");
        const nextId = id + 1;
        if (nextId > TOTAL_RETOS) {
          btnSiguiente.textContent = "Ver resultados →";
          btnSiguiente.onclick = () => { window.location.href = "cierre.html"; };
        } else {
          btnSiguiente.textContent = "Siguiente misión →";
          btnSiguiente.onclick = () => { window.location.href = `reto.html?id=${nextId}`; };
        }
      }
    } else {
      setTimeout(() => {
        yaRespondio = false; seleccionado = null; btnValidar.disabled = true;
        document.querySelectorAll(".opcion-item").forEach(el =>
          el.classList.remove("correct","incorrect","selected"));
        feedback.classList.remove("visible");
      }, 4000);
    }
  });
}

// ──────────────────────────────────────────────────────────
//  CIERRE
// ──────────────────────────────────────────────────────────
function initCierre() {
  // ✅ Después
const enCierre = window.location.pathname.includes("cierre.html");
if (!enCierre) return;
  const resueltos = loadResueltos();
  const startTime = loadStart();
  const elapsed   = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
  const timeUsed  = Math.min(elapsed, DURATION_SEC);
  const exito     = resueltos.length >= TOTAL_RETOS;

  const medalla = $id("medalla");
  if (medalla) medalla.textContent = exito ? "🏆" : "⏱";
  const badge = $id("state-badge");
  if (badge) { badge.className = `state-badge ${exito ? "success" : "timeout"}`; badge.textContent = exito ? "✦ Sistema restaurado" : "✦ Tiempo agotado"; }
  const title = $id("main-title");
  if (title) { title.className = `main-title ${exito ? "success" : "timeout"}`; title.textContent = exito ? "¡Misión cumplida!" : "El tiempo se agotó"; }
  const msg = $id("mensaje-texto");
  if (msg && !exito) msg.innerHTML = `No alcanzó el tiempo para restaurar todas las decisiones del sistema. Pero cada reto resuelto fue un acto de <strong>pensamiento algebraico crítico</strong>. <strong>Reinicia la misión</strong> y usa lo aprendido para mejorar tu tiempo.`;
  const statRetos  = $id("stat-retos");
  const statTiempo = $id("stat-tiempo");
  const statPct    = $id("stat-pct");
  if (statRetos)  statRetos.textContent  = `${resueltos.length}/${TOTAL_RETOS}`;
  if (statTiempo) statTiempo.textContent = formatTime(timeUsed);
  if (statPct)    statPct.textContent    = `${Math.round((resueltos.length/TOTAL_RETOS)*100)}%`;

  const btnReset = $id("btn-reset");
  const btnMapa  = $id("btn-mapa");
  if (btnReset) btnReset.addEventListener("click", () => {
    localStorage.removeItem(KEY_TIMER); localStorage.removeItem(KEY_RESUELTOS);
    window.location.href = "index.html";
  });
  if (btnMapa) btnMapa.addEventListener("click", () => { window.location.href = "mapa.html"; });
}

// ──────────────────────────────────────────────────────────
//  INICIALIZACIÓN
// ──────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  // ✅ Detectar si estamos en index de forma robusta
  const enIndex = path.endsWith("/")
    || path.endsWith("index.html")
    || path === ""
    || !path.includes(".html");

  const hasStart = !!loadStart();

  // Solo redirigir si NO estamos en index y no hay sesión activa
  if (!hasStart && !enIndex) {
    window.location.href = "index.html";
    return;
  }

  // Iniciar reloj en todas las pantallas excepto index
  if (!enIndex) startClock();

  // Inicializar pantalla correspondiente
  initVestibulo();
  initMapa();
  initReto();
  initCierre();
});
