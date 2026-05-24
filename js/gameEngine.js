// ============================================================
//  gameEngine.js  —  Escape Room Educativo · Matemáticas 8°
// ============================================================

// ──────────────────────────────────────────────────────────
//  BASE DE DATOS DE RETOS — Estructura y Retos Originales
// ──────────────────────────────────────────────────────────
const RETOS = [
  {
    id: 1,
    titulo: "El mural que nadie midió",
    eyebrow: "Nivel 1 · Cuadrado de binomio · (a+b)²",
    tags: [
      { label: "Nivel 1 — Básico",  cls: "rtag-green"  },
      { label: "(a+b)²",            cls: "rtag-purple" },
      { label: "Área",              cls: "rtag-gold"   }
    ],
    narrativa: `El sistema aprobó un presupuesto para un mural cuyo lado mide
    <strong>(3x + 5)</strong> metros. Calculó el área usando solo
    <em>9x² + 25</em>, ignorando el término central.
    El presupuesto quedó subvalorado. ¿Cuál es el área correcta del mural?`,
    enunciado: "Desarrolla correctamente: (3x + 5)²",
    opciones: [
      { id:"1a", texto:"9x² + 25",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> Olvidaste el término del <em>doble producto</em>.
        El cuadrado de un binomio <em>nunca</em> es solo la suma de cuadrados.
        Recuerda: <em>(a+b)² = a² + 2ab + b²</em>. Aquí
        <em>a = 3x</em> y <em>b = 5</em>, así que el doble producto es
        <em>2·(3x)·5 = 30x</em>.` },
      { id:"1b", texto:"9x² + 15x + 25",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> El coeficiente del término central está mal.
        El doble producto es <em>2·(3x)·5 = 30x</em>, no <em>15x</em>.
        Un error frecuente es multiplicar los términos sin aplicar el factor 2.` },
      { id:"1c", texto:"9x² + 30x + 25",
        correcta: true,
        feedback:`<strong>¡Correcto!</strong> <em>(3x+5)² = (3x)²+ 2·(3x)·5 + 5² = 9x²+30x+25</em>.
        El término <em>30x</em> representa el doble producto que el sistema ignoró.
        En contexto real, este término corresponde a los dos rectángulos de área
        <em>3x·5</em> que forman parte del cuadrado total.` },
      { id:"1d", texto:"6x² + 30x + 10",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> Parece que multiplicaste los coeficientes
        de forma lineal. Para elevar al cuadrado un binomio se aplica
        <em>(a+b)² = a²+2ab+b²</em>, no se distribuye la potencia sobre cada término
        sumando coeficientes.` }
    ]
  },
  {
    id: 2,
    titulo: "El terreno que se recortó",
    eyebrow: "Nivel 2 · Cuadrado de diferencia · (a−b)²",
    tags: [
      { label: "Nivel 2 — Fácil",  cls: "rtag-green"  },
      { label: "(a−b)²",           cls: "rtag-purple" },
      { label: "Factor común",     cls: "rtag-pink"   }
    ],
    narrativa: `El colegio redujo el terreno de su huerto restando <strong>4</strong> metros
    a cada lado. El nuevo lado mide <strong>(5x − 4)</strong>. El sistema calculó
    el área como <em>25x² + 16</em>, cambiando el signo del término central.
    Esto sobreestimó el espacio disponible y se compraron más semillas de las necesarias.
    ¿Cuál es el área correcta?`,
    enunciado: "Desarrolla correctamente: (5x − 4)²",
    opciones: [
      { id:"2a", texto:"25x² + 16",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> Falta completamente el término central.
        <em>(a−b)² = a²−2ab+b²</em>. Con <em>a=5x</em> y <em>b=4</em>,
        el doble producto es <em>2·5x·4 = 40x</em> y va <strong>restando</strong>.` },
      { id:"2b", texto:"25x² + 40x + 16",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> El término central tiene signo equivocado.
        En el cuadrado de una <em>diferencia</em> el término central es siempre
        <strong>negativo</strong>: <em>(a−b)² = a²−2ab+b²</em>.` },
      { id:"2c", texto:"25x² − 40x + 16",
        correcta: true,
        feedback:`<strong>¡Correcto!</strong> <em>(5x−4)² = 25x²−40x+16</em>.
        El signo negativo del término central <em>−40x</em> es clave: indica que
        al restar dimensión al terreno, el área disminuye más de lo que parece si
        solo se consideran los cuadrados extremos.` },
      { id:"2d", texto:"25x² − 20x + 16",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> El coeficiente del término central es errado.
        El doble producto es <em>2·(5x)·4 = 40x</em>, no <em>20x</em>.
        Recuerda que el coeficiente 2 multiplica el producto de los dos términos del binomio.` }
    ]
  },
  {
    id: 3,
    titulo: "El contenedor de doble cara",
    eyebrow: "Nivel 3 · Diferencia de cuadrados · (a+b)(a−b)",
    tags: [
      { label: "Nivel 3 — Medio",       cls: "rtag-gold"   },
      { label: "(a+b)(a−b) = a²−b²",    cls: "rtag-purple" },
      { label: "Diferencia cuadrados",  cls: "rtag-pink"   }
    ],
    narrativa: `El sistema debe calcular el área de una losa rectangular con lados
    <strong>(7x + 6)</strong> y <strong>(7x − 6)</strong>. El sistema desarrolló
    el producto como <em>49x² + 84x − 84x − 36</em> pero luego "simplificó"
    incorrectamente llegando a <em>49x² + 36</em>. Ese error hizo que se
    ordenara más material del necesario. ¿Cuál es el resultado correcto?`,
    enunciado: "Calcula correctamente: (7x + 6)(7x − 6)",
    opciones: [
      { id:"3a", texto:"49x² + 36",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> Este es el error del sistema: sumar los
        cuadrados en lugar de restarlos. El producto notable de una suma por una
        diferencia siempre produce <em>a²−b²</em>. Los términos cruzados se cancelan
        y el resultado es siempre una <strong>resta</strong>.` },
      { id:"3b", texto:"49x² − 36",
        correcta: true,
        feedback:`<strong>¡Correcto!</strong> <em>(7x+6)(7x−6) = (7x)²−6² = 49x²−36</em>.
        Los términos cruzados <em>+42x</em> y <em>−42x</em> se anulan exactamente.
        Esta identidad es muy eficiente: evita desarrollar cuatro términos y
        permite calcular áreas diferenciales con solo dos operaciones.` },
      { id:"3c", texto:"49x² − 84x − 36",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> Los términos cruzados <em>+42x</em> y
        <em>−42x</em> suman cero y deben desaparecer. Si aparece un término con <em>x</em>
        en el resultado de <em>(a+b)(a−b)</em>, es una señal de que el producto
        notable no fue aplicado correctamente.` },
      { id:"3d", texto:"49x² + 84x − 36",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> De nuevo aparece un término lineal que no
        debería existir. Recuerda: <em>(a+b)(a−b) = a²−b²</em> siempre.
        Los términos medios se cancelan por ser opuestos: <em>+ab</em> y <em>−ab</em>.` }
    ]
  },
  {
    id: 4,
    titulo: "El tanque de agua del colegio",
    eyebrow: "Nivel 4 · Cubo de binomio · (2x+3)³",
    tags: [
      { label: "Nivel 4 — Medio-alto", cls: "rtag-gold"   },
      { label: "(a+b)³",               cls: "rtag-purple" },
      { label: "Volumen cúbico",        cls: "rtag-pink"   }
    ],
    narrativa: `El colegio instaló un tanque cúbico de lado <strong>(2x + 3)</strong> dm.
    El sistema calculó el volumen como <em>8x³ + 27</em>, ignorando los
    términos interiores. El pedido de agua quedó 60% subestimado en ciertos
    valores de <em>x</em>. ¿Cuál es el volumen correcto del tanque?`,
    enunciado: "Desarrolla completamente: (2x + 3)³",
    opciones: [
      { id:"4a", texto:"8x³ + 27",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> Este es exactamente el error del sistema.
        <em>(a+b)³ ≠ a³+b³</em>. El desarrollo completo tiene <strong>4 términos</strong>
        con coeficientes 1-3-3-1. Los términos intermedios
        <em>3a²b</em> y <em>3ab²</em> representan volúmenes reales del cubo.` },
      { id:"4b", texto:"8x³ + 12x² + 18x + 27",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> Revisa los coeficientes de los términos
        intermedios. Con <em>a=2x</em> y <em>b=3</em>:
        <em>3a²b = 3·(2x)²·3 = 3·4x²·3 = 36x²</em> y
        <em>3ab² = 3·(2x)·9 = 54x</em>. Los coeficientes 12 y 18 no son correctos.` },
      { id:"4c", texto:"8x³ + 36x² + 54x + 27",
        correcta: true,
        feedback:`<strong>¡Correcto!</strong>
        <em>(2x+3)³ = (2x)³ + 3·(2x)²·3 + 3·(2x)·3² + 3³
        = 8x³ + 36x² + 54x + 27</em>.
        Los coeficientes 36 y 54 se obtienen aplicando correctamente
        <em>3a²b</em> y <em>3ab²</em>. Omitirlos subestima el volumen real del tanque.` },
      { id:"4d", texto:"6x³ + 36x² + 54x + 27",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> El primer término es <em>(2x)³ = 8x³</em>,
        no <em>6x³</em>. Al elevar al cubo un monomio con coeficiente se aplica
        <em>(ka)³ = k³·a³</em>, por lo que <em>(2x)³ = 2³·x³ = 8x³</em>.` }
    ]
  },
  {
    id: 5,
    titulo: "El festival de matemáticas",
    eyebrow: "Nivel 5 · Factorización compuesta · Factor común + diferencia de cuadrados",
    tags: [
      { label: "Nivel 5 — Alto",            cls: "rtag-pink"   },
      { label: "Factor común",              cls: "rtag-purple" },
      { label: "Diferencia de cuadrados",   cls: "rtag-gold"   }
    ],
    narrativa: `El presupuesto de tres proyectos escolares se modela con la expresión
    <strong>50x³ − 72x</strong>. El sistema dice que es irreducible y la usa
    directamente para distribuir fondos, generando montos inexactos.
    El equipo debe factorizar completamente para detectar la estructura real
    del presupuesto.`,
    enunciado: "Factoriza completamente: 50x³ − 72x",
    opciones: [
      { id:"5a", texto:"x(50x² − 72)",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> Se extracho el factor <em>x</em> pero no
        el numérico. El MCD de 50 y 72 es <em>2</em>, por lo tanto el factor común
        completo es <em>2x</em>. Además, la expresión <em>50x²−72</em> sigue siendo
        factorizable como diferencia de cuadrados tras extraer el 2.` },
      { id:"5b", texto:"2x(25x² − 36)",
        correcta: false,
        feedback:`<strong>Incorrecto — incompleto.</strong> Extrajiste correctamente el
        factor <em>2x</em>, pero <em>25x²−36</em> es una <strong>diferencia de cuadrados</strong>:
        <em>25x²−36 = (5x)²−6² = (5x+6)(5x−6)</em>.
        Una factorización completa no deja expresiones factorizables sin desarrollar.` },
      { id:"5c", texto:"2x(5x + 6)(5x − 6)",
        correcta: true,
        feedback:`<strong>¡Correcto!</strong>
        <em>50x³−72x = 2x(25x²−36) = 2x(5x+6)(5x−6)</em>.
        El proceso tiene dos etapas: primero extraer el factor común <em>2x</em>,
        luego identificar la diferencia de cuadrados <em>(5x)²−6²</em>.
        Esta estructura revela que el presupuesto tiene una distribución
        simétrica y factorizable de forma exacta.` },
      { id:"5d", texto:"2(25x³ − 36x)",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> Se extrajo el factor numérico 2 pero no
        el literal <em>x</em>. El MCD completo es <em>2x</em> porque todos los
        términos son divisibles tanto por 2 como por <em>x</em>. Siempre se debe
        extraer simultáneamente la parte numérica y literal del factor común.` }
    ]
  },
  {
    id: 6,
    titulo: "La fórmula justa del sistema",
    eyebrow: "Nivel 6 · Experto · Binomio con fracciones + simplificación",
    tags: [
      { label: "Nivel 6 — Experto",  cls: "rtag-pink"   },
      { label: "Misión final",       cls: "rtag-purple" },
      { label: "Bloom: Creación",    cls: "rtag-gold"   }
    ],
    narrativa: `La fórmula de bonificación del sistema usa la expresión
    <strong>(½x + 4)² − 16</strong>. El sistema la simplifica erróneamente
    como <em>¼x²</em>, ignorando todos los demás términos. Esto hace que
    estudiantes con baja participación reciban bonificación cero cuando en
    realidad les corresponde un valor positivo. El equipo debe corregir el
    desarrollo y simplificación completa de la expresión.`,
    enunciado: "Desarrolla y simplifica completamente: (½x + 4)² − 16",
    opciones: [
      { id:"6a", texto:"¼x²",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> Esta es exactamente la simplificación
        errónea del sistema. El desarrollo correcto es:
        <em>(½x+4)² = ¼x² + 4x + 16</em>, y al restar 16:
        <em>¼x² + 4x + 16 − 16 = ¼x² + 4x</em>.
        El término <em>4x</em> es el que garantiza bonificación positiva
        para participación mayor a cero.` },
      { id:"6b", texto:"¼x² + 4x + 16",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> Desarrollaste bien el cuadrado del
        binomio pero olvidaste restar el <em>−16</em> final.
        <em>(½x+4)²−16 = ¼x²+4x+16−16 = ¼x²+4x</em>.
        Los términos <em>+16</em> y <em>−16</em> se cancelan exactamente.` },
      { id:"6c", texto:"¼x² + 4x",
        correcta: true,
        feedback:`<strong>¡Correcto!</strong>
        <em>(½x+4)²−16 = (½x)²+2·(½x)·4+4²−16 = ¼x²+4x+16−16 = ¼x²+4x</em>.
        Esta expresión puede factorizarse como <em>x(¼x+4)</em>, mostrando que
        la bonificación es siempre proporcional a la participación <em>x</em>.
        Has dominado el álgebra con coeficientes fraccionarios y simplificación
        simultánea. <strong>¡El sistema queda completamente restaurado!</strong>` },
      { id:"6d", texto:"¼x² + 2x",
        correcta: false,
        feedback:`<strong>Incorrecto.</strong> El término central del cuadrado del
        binomio es <em>2·(½x)·4 = 4x</em>, no <em>2x</em>.
        Al calcular el doble producto con <em>a=½x</em> y <em>b=4</em>:
        <em>2ab = 2·½x·4 = 4x</em>. El factor <em>½</em> de <em>a</em> ya está
        incluido en el cálculo, no lo elimines antes de tiempo.` }
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
//  TEMPORIZADOR GLOBAL — CORREGIDO EL PROBLEMA DEL PARPADEO
// ──────────────────────────────────────────────────────────
let clockInterval = null;

function startClock() {
  const clockEl     = $id("clock");
  const progressBar = $id("progress-bar");
  const progressTxt = $id("progress-txt");
  const startTime   = loadStart();
  if (!startTime || !clockEl) return;

  // 🛠️ FIX: Limpiar cualquier intervalo previo activo para evitar solapamientos y parpadeos
  if (clockInterval) {
    clearInterval(clockInterval);
  }

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
    if (remaining <= 0) { 
      clearInterval(clockInterval); 
      window.location.href = "cierre.html"; 
    }
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
      const lbl = qs(".nodo-status-label", nodo);
      if (lbl) { lbl.className = "nodo-status-label status-active"; lbl.textContent = "🔓 Disponible"; }
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
  if (!window.location.pathname.includes("reto.html")) return;
  const id   = parseInt(getParam("id"));
  const reto = RETOS.find(r => r.id === id);
  if (!reto) { window.location.href = "mapa.html"; return; }

  const eyebrowEl = $id("reto-eyebrow");
  const tituloEl = $id("reto-titulo");
  const narrativaEl = $id("reto-narrativa");
  const enunciadoEl = $id("reto-enunciado");
  const tagsEl = $id("reto-tags");
  const opcionesEl = $id("reto-opciones");

  if (eyebrowEl) eyebrowEl.innerHTML = reto.eyebrow;
  if (tituloEl) tituloEl.innerHTML = reto.titulo;
  if (narrativaEl) narrativaEl.innerHTML = reto.narrativa;
  if (enunciadoEl) enunciadoEl.innerHTML = reto.enunciado;
  
  if (tagsEl) {
    tagsEl.innerHTML = "";
    reto.tags.forEach(t => {
      tagsEl.innerHTML += `<span class="rtag ${t.cls}">${t.label}</span>`;
    });
  }

  if (opcionesEl) {
    opcionesEl.innerHTML = "";
    reto.opciones.forEach(o => {
      opcionesEl.innerHTML += `
        <div class="opcion" data-id="${o.id}">
          <input type="radio" name="opcion_er" id="${o.id}" value="${o.id}">
          <label for="${o.id}">${o.texto}</label>
        </div>
      `;
    });
  }

  const btnValidar   = $id("btn-validar");
  const feedback     = $id("feedback");
  const fbIcon       = $id("fb-icon");
  const fbTitle      = $id("fb-title");
  const fbText       = $id("fb-text");
  const btnSiguiente = $id("btn-siguiente");
  let seleccionado   = null;
  let yaRespondio    = false;
  let erroresConsecutivos = 0;

  if (opcionesEl) {
    opcionesEl.addEventListener("change", (e) => {
      if (yaRespondio) return;
      seleccionado = e.target.value;
      if (btnValidar) btnValidar.disabled = false;
      document.querySelectorAll(".opcion").forEach(el =>
        el.classList.toggle("checked", el.dataset.id === seleccionado));
    });
  }

  if (btnValidar) {
    btnValidar.addEventListener("click", () => {
      if (!seleccionado || yaRespondio) return;

      const opcion   = reto.opciones.find(o => o.id === seleccionado);
      const correcta = opcion.correcta;

      if (correcta) {
        erroresConsecutivos = 0;
        mostrarFeedback(true, opcion.feedback);
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
        erroresConsecutivos++;

        // 🛠️ FIX: Descontar exactamente 5 minutos por cada error cometido en milisegundos
        const startTime = loadStart();
        if (startTime) {
          const nuevoStart = startTime - (5 * 60 * 1000); 
          saveStart(nuevoStart);
          startClock(); // Reinicia el intervalo limpio con la nueva hora recalculada
        }

        if (erroresConsecutivos === 1) {
          const pista1 = `Recuerda revisar el <strong>término central</strong> 
          y los <strong>coeficientes</strong> en el desarrollo del producto notable. 
          Verifica el signo y el valor de cada término.`;
          mostrarFeedback(false, pista1, true);

        } else if (erroresConsecutivos === 2) {
          const pista2 = `<strong>Enfoque directo:</strong> 
          Revisa el desarrollo de <em>(a+b)²</em> o <em>(a−b)²</em>. 
          Verifica que el signo y el coeficiente de cada término se correspondan 
          con la estructura correcta de la identidad.`;
          mostrarFeedback(false, pista2, true);

        } else if (erroresConsecutivos >= 3) {
          const opCorrecta = reto.opciones.find(o => o.correcta);
          const mensaje = `
            <strong>Respuesta correcta:</strong> ${opCorrecta.texto}<br><br>
            ${opCorrecta.feedback}
          `;
          mostrarFeedback(false, mensaje, false);
          yaRespondio = true;
        }
      }
    });
  }

  function mostrarFeedback(correcta, texto, ocultarCorrecta = false) {
    if (!feedback || !fbIcon || !fbTitle || !fbText) return;
    feedback.className = `feedback-card ${correcta ? "correct" : "incorrect"} visible`;
    fbIcon.textContent = correcta ? "✅" : "⚠️";
    fbTitle.textContent = correcta ? "¡Respuesta correcta!" : "Respuesta incorrecta";
    fbText.innerHTML = texto;
    yaRespondio = !ocultarCorrecta;
  }
}

// ──────────────────────────────────────────────────────────
//  CIERRE
// ──────────────────────────────────────────────────────────
function initCierre() {
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
//  INICIALIZACIÓN GLOBALS
// ──────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  const enIndex = path.endsWith("/")
    || path.endsWith("index.html")
    || path === ""
    || !path.includes(".html");

  const hasStart = !!loadStart();

  if (!hasStart && !enIndex) {
    window.location.href = "index.html";
    return;
  }

  if (!enIndex) startClock();

  initVestibulo();
  initMapa();
  initReto();
  initCierre();
});
