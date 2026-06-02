// ============================================================
//  gameEngine.js  —  Escape Room Educativo · Matemáticas 8°
// ============================================================

// ──────────────────────────────────────────────────────────
//  BASE DE DATOS DE RETOS COMPLETA · ESCAPE ROOM ALGEBRAICO
// ──────────────────────────────────────────────────────────

const RETOS = [
  {
    id: 1,
    tipo: 1, // Selección Múltiple (Clásico)
    titulo: "El mural que nadie midió",
    eyebrow: "Nivel 1 · Cuadrado de binomio · (a+b)¹",
    tags: [
      { label: "Nivel 1 — Básico", cls: "rtag-green" },
      { label: "(a+b)²", cls: "rtag-purple" },
      { label: "Área", cls: "rtag-gold" }
    ],
    narrativa: `El software de infraestructura aprobó el presupuesto para un mural artístico en el patio principal cuyo lado mide <strong>(3x + 5)</strong> metros. Sin embargo, el algoritmo calculó el área usando la expresión simplista <em>9x² + 25</em>, ignorando por completo la existencia de la zona central de la superficie. Como el presupuesto quedó subvalorado debido a este vacío geométrico, los materials no alcanzarán. ¿Cuál es el área matemática real que el sistema debió procesar?`,
    enunciado: "Desarrolla correctamente el producto notable: (3x + 5)²",
    opciones: [
      {
        id: "1a",
        texto: "9x² + 25",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> El algoritmo cometió el error clásico: asumir que el cuadrado de un binomio es solo la suma de los cuadrados individuales. Olvidaste el <em>doble producto</em>. Recuerda: <em>(a+b)² = a² + 2ab + b²</em>. Al ser <em>a = 3x</em> y <em>b = 5</em>, el término central indispensable es <em>2 · (3x) · 5 = 30x</em>.`
      },
      {
        id: "1b",
        texto: "9x² + 15x + 25",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> El coeficiente del término central está mal calculado. Multiplicaste los términos del binomio (3x · 5 = 15x), pero olvidaste aplicar el factor doble de la regla. El producto central real es <em>2 · (3x) · 5 = 30x</em>.`
      },
      {
        id: "1c",
        texto: "9x² + 30x + 25",
        correcta: true,
        feedback: `<strong>¡Correcto!</strong> Aplicaste perfectamente la estructura de la identidad: <em>(3x+5)² = (3x)² + 2·(3x)·5 + 5² = 9x² + 30x + 25</em>. El término <em>30x</em> representa el área combinada de las secciones intermedias del mural que el sistema había borrado de la planificación.`
      },
      {
        id: "1d",
        texto: "6x² + 30x + 10",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> Confundiste la operación de elevar al cuadrado con multiplicar por dos de forma lineal (asumiste que 3x al cuadrado es 6x y 5 al cuadrado es 10). Recuerda que una potencia implica multiplicar un término por sí mismo: <em>(3x) · (3x) = 9x²</em> y <em>5 · 5 = 25</em>.`
      }
    ]
  },
  {
    id: 2,
    tipo: 2, // Arrastrar y Soltar (Drag & Drop)
    titulo: "El terreno que se recortó",
    eyebrow: "Nivel 2 · Cuadrado de diferencia · (a−b)²",
    tags: [
      { label: "Nivel 2 — Fácil", cls: "rtag-green" },
      { label: "(a−b)²", cls: "rtag-purple" },
      { label: "Distribución espacial", cls: "rtag-pink" }
    ],
    narrativa: `Para ampliar los pasillos externos, el sistema automatizado redujo las dimensiones del huerto escolar restando 4 metros a cada lado. El nuevo terreno quedó cuadrado con un lado equivalente a <strong>(5x − 4)</strong> metros. No obstante, el procesador registró el área final como <em>25x² + 16</em>, alterando por completo la naturaleza de la reducción. Esta lectura errónea sobreestimó el espacio real, provocando que se comprara un exceso inútil de semillas agrícolas. ¿Qué expresión matemática restablece el cálculo correcto?`,
    enunciado: "Arrastra el desarrollo correcto para la reducción del área: (5x − 4)²",
    opciones: [
      {
        id: "2a",
        texto: "25x² + 16",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> Al omitir el término central, el sistema actúa como si restarle dimensiones a un terreno no afectara su área de forma escalonada. Falta el término <em>-2ab</em> de la estructura <em>(a-b)² = a² - 2ab + b²</em>.`
      },
      {
        id: "2b",
        texto: "25x² + 40x + 16",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> Calculaste la magnitud del término central correctamente, pero fallaste en la operación del signo. Si estamos restando dimensiones en el binomio original, el término central del trinomio resultante debe ser estrictamente <strong>negativo</strong>.`
      },
      {
        id: "2c",
        texto: "25x² − 40x + 16",
        correcta: true,
        feedback: `<strong>¡Correcto!</strong> El desarrollo geométrico exacto es <em>(5x−4)² = 25x² − 40x + 16</em>. El signo negativo en el término <em>-40x</em> es el indicador crítico que demuestra cómo el área disminuye progresivamente al contraer los límites de la zona de cultivo.`
      },
      {
        id: "2d",
        texto: "25x² − 20x + 16",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> Omitiste el multiplicador constante de la regla matemática. Determinaste el producto simple de los términos (5x · 4 = 20x), pero la ecuación del cambio exige el doble de dicho valor: <em>2 · (5x) · 4 = 40x</em>.`
      }
    ]
  },
  {
    id: 3,
    tipo: 3, // Escribir "correcto" al frente
    titulo: "El contenedor de doble cara",
    eyebrow: "Nivel 3 · Diferencia de cuadrados · (a+b)(a−b)",
    tags: [
      { label: "Nivel 3 — Medio", cls: "rtag-gold" },
      { label: "(a+b)(a−b)", cls: "rtag-purple" },
      { label: "Diferencia cuadrados", cls: "rtag-pink" }
    ],
    narrativa: `El departamento de logística requiere recubrir una losa industrial de almacenamiento con dimensiones asimétricas: un largo de <strong>(7x + 6)</strong> metros y un ancho de <strong>(7x − 6)</strong> metros. El microcontrolador expandió el producto de las dimensiones como <em>49x² + 84x − 84x − 36</em>, pero su base de datos simplificó de forma errónea los signos internos guardando la expresión final como <em>49x² + 36</em>. De no corregirse, este error en los planos generará un desfase en el presupuesto de compra del material. ¿Cuál es el producto neto real?`,
    enunciado: "Analiza las opciones y escribe la palabra <strong>correcto</strong> frente a la simplificación válida de: (7x + 6)(7x − 6)",
    opciones: [
      {
        id: "3a",
        texto: "49x² + 36",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> Este es exactamente el bug del sistema de almacenamiento: transformar un producto de binomios conjugados en una suma de cuadrados. Al multiplicar términos con signos opuestos, el último término (+6 · -6) debe ser obligatoriamente una <strong>resta</strong>.`
      },
      {
        id: "3b",
        texto: "49x² − 36",
        correcta: true,
        feedback: `<strong>¡Correcto!</strong> Identificaste la diferencia de cuadrados perfecta: <em>(7x+6)(7x−6) = (7x)² − 6² = 49x² − 36</em>. Los términos lineales opuestos (+42x y -42x) se anulan de manera exacta, optimizando la expresión a solo dos componentes.`
      },
      {
        id: "3c",
        texto: "49x² − 84x − 36",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> Agrupaste erróneamente los productos cruzados asumiendo que ambos tenían signos negativos. En una estructura conjugada, un término sumado y otro restado de igual magnitud producen cero, eliminando cualquier rastro de la variable lineal x.`
      },
      {
        id: "3d",
        texto: "49x² + 84x − 36",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> Conservaste un término lineal positivo que no tiene justificación algebraica. Recuerda que los productos internos intermedios (+42x y -42x) se cancelan mutuamente de forma total.`
      }
    ]
  },
  {
    id: 4,
    tipo: 2, // Arrastrar y Soltar (Se evalúa igual que el Tipo 2)
    titulo: "El tanque de agua del colegio",
    eyebrow: "Nivel 4 · Cubo de binomio · (2x+3)³",
    tags: [
      { label: "Nivel 4 — Medio-alto", cls: "rtag-gold" },
      { label: "(2x+3)³", cls: "rtag-purple" },
      { label: "Volumen cúbico", cls: "rtag-pink" }
    ],
    narrativa: `Como parte del plan de contingencia hídrica, la escuela instaló un tanque de reserva cúbico cuya arista mide <strong>(2x + 3)</strong> decímetros. El procesador centralizado estimó la capacidad total usando la fórmula lineal errónea <em>8x³ + 27</em>, omitiendo las zonas de expansión volumétrica interna. En un escenario de alta demanda, este error de cálculo causará que el suministro se agote un 60% antes de lo previsto por falta de volumen real registrado. ¿Qué polinomio describe la capacidad cúbica verdadera?`,
    enunciado: "Arrastra la opción con el polinomio tridimensional exacto que representa el volumen: (2x + 3)³",
    opciones: [
      {
        id: "4a",
        texto: "8x³ + 27",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> El sistema ignoró por completo la tridimensionalidad espacial. Un cubo de binomio no se reduce a elevar sus extremos. Requiere un desarrollo detallado de 4 términos bajo el patrón clásico de coeficientes algebraicos 1-3-3-1.`
      },
      {
        id: "4b",
        texto: "8x³ + 12x² + 18x + 27",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> Los coeficientes intermedios calculados se quedaron cortos. Al aplicar la regla del triple del primero al cuadrado por el segundo <em>3a²b</em> y el triple del primero por el segundo al cuadrado <em>3ab²</em>, debes procesar las potencias internas antes de multiplicar por 3.`
      },
      {
        id: "4c",
        texto: "8x³ + 36x² + 54x + 27",
        correcta: true,
        feedback: `<strong>¡Correcto!</strong> Desarrollaste el volumen completo de forma impecable: <em>(2x)³ + 3·(2x)²·3 + 3·(2x)·3² + 3³ = 8x³ + 36x² + 54x + 27</em>. Estos términos centrales representan la capacidad real de almacenamiento que evitará el desabastecimiento hídrico.`
      },
      {
        id: "4d",
        texto: "6x³ + 36x² + 54x + 27",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> El primer término presenta una falla operativa grave. Al elevar al cubo el monomio inicial <em>(2x)³</em>, debes aplicar el exponente tanto a la variable como al coeficiente numérico: <em>2³ = 8</em>, no <em>2 · 3 = 6</em>.`
      }
    ]
  },
  {
    id: 5,
    tipo: 5, // Escribir la respuesta exacta
    titulo: "El festival de matemáticas",
    eyebrow: "Nivel 5 · Factorización compuesta · Factor común + diferencia de cuadrados",
    tags: [
      { label: "Nivel 5 — Alto", cls: "rtag-pink" },
      { label: "Factor común", cls: "rtag-purple" },
      { label: "Diferencia de cuadrados", cls: "rtag-gold" }
    ],
    narrativa: `El fondo monetario asignado para los proyectos estudiantiles del festival se rige bajo la expresión polinómica <strong>50x³ − 72x</strong>. El sistema informático de auditoría bloqueó los desembolsos tras catalogar esta expresión como "irreducible", distribuyendo fondos fijos arbitrarios que perjudican la compra de materiales para los prototipos. Para disolver el bloqueo y revelar la verdadera estructura de costos, debes descomponer la expresión en sus factores algebraicos primos absolutos.`,
    enunciado: "Factoriza la expresión completamente para destrabar los fondos: 50x³ − 72x",
    instruccionExtra: "Escribe la respuesta factorizada sin usar ningún espacio en blanco. El orden estricto debe ser: primero el factor común monomio, seguido de los binomios ordenados (de mayor a menor grado en las x). Ejemplo exacto de formato: 2x(5x+6)(5x-6)",
    respuestaExacta: "2x(5x+6)(5x-6)",
    opciones: [
      {
        id: "5a",
        texto: "x(50x² − 72)",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> Extrajiste con éxito el factor común literal (x), pero pasaste por alto que tanto 50 como 72 comparten un Máximo Común Divisor numérico igual a 2. Además, el binomio interno resultante aún se puede seguir factorizando.`
      },
      {
        id: "5b",
        texto: "2x(25x² − 36)",
        correcta: false,
        feedback: `<strong>Incorrecto — Factorización incompleta.</strong> El paso inicial es correcto al extraer el factor común <em>2x</em>, pero el sistema rechaza la solución porque el binomio interior es una <strong>diferencia de cuadrados perfectos</strong> elemental que debe ser descompuesta en binomios conjugados.`
      },
      {
        id: "5c",
        texto: "2x(5x + 6)(5x − 6)",
        correcta: true,
        feedback: `<strong>¡Correcto!</strong> Ejecutaste la auditoría de forma impecable. Primero aislaste el factor común general <em>2x</em> y luego desarmaste la diferencia de cuadrados restante <em>(5x)² − 6²</em> en sus componentes conjugados. El presupuesto ahora es completamente transparente.`
      },
      {
        id: "5d",
        texto: "2(25x³ − 36x)",
        correcta: false,
        feedback: `<strong>Incorrecto.</strong> Realizaste la extracción numérica pero dejaste la variable x dentro de los términos del polinomio, impidiendo que se revele la verdadera estructura cuadrática interna. Ambos términos compartían la variable x con exponente común.`
      }
    ]
  },
  {
    id: 6,
    tipo: 6, // Código Final + Animación
    titulo: "La fórmula justa del sistema",
    eyebrow: "Nivel 6 · Experto · Binomio con fracciones + simplificación",
    tags: [
      { label: "Nivel 6 — Experto", cls: "rtag-pink" },
      { label: "Misión final", cls: "rtag-purple" },
      { label: "Criterio analítico", cls: "rtag-gold" }
    ],
    narrativa: `El núcleo lógico del sistema evalúa la asignación de becas de transporte utilizando la compleja ecuación de rendimiento <strong>(½x + 4)² − 16</strong>. Debido a una simplificación de código descuidada en los servidores centrales, el software redujo el algoritmo simplemente a <em>¼x²</em>, eliminando el componente de asistencia semanal representado por la variable lineal. Esto ha provocado que decenas de estudiantes con un excelente proceso de mejora queden excluidos. Resuelve el desarrollo y deduce la simplificación definitiva para generar el código de acceso que restaurará los derechos de la comunidad estudiantil.`,
    enunciado: "Desarrolla y simplifica al máximo la ecuación de asignación: (½x + 4)² − 16",
    opciones: [
      {
        id: "6a",
        texto: "¼x²",
        codigo: "ALFA-00",
        correcta: false,
        feedback: `<strong>Código Denegado.</strong> Ese es precisamente el error técnico del software central. Al desarrollar el binomio al cuadrado, se omitió por completo el doble producto del primer término por el segundo, borrando el beneficio lineal real de los estudiantes.`
      },
      {
        id: "6b",
        texto: "¼x² + 4x + 16",
        codigo: "DELTA-44",
        correcta: false,
        feedback: `<strong>Código Denegado.</strong> Lograste expandir la potencia del binomio correctamente en sus tres términos independientes, pero olvidaste procesar el operador externo de cancelación de la ecuación original (el término <em>-16</em> final).`
      },
      {
        id: "6c",
        texto: "¼x² + 4x",
        codigo: "EAP-2026",
        correcta: true,
        feedback: `<strong>¡CÓDIGO CORRECTO! SISTEMA RESTAURADO CON ÉXITO.</strong> El desarrollo analítico es perfecto: <em>¼x² + 4x + 16 − 16 = ¼x² + 4x</em>. Al cancelar de forma exacta las constantes numéricas, el término lineal <em>4x</em> sobrevive, garantizando que cada estudiante reciba su valoración con total equidad social y matemática. ¡Has completado la misión educativa!`
      },
      {
        id: "6d",
        texto: "¼x² + 2x",
        codigo: "SIGMA-88",
        correcta: false,
        feedback: `<strong>Código Denegado.</strong> El término central lineal quedó mal simplificado. Recuerda calcular el doble producto de forma estricta: <em>2 · (½x) · 4</em>. El coeficiente 2 se cancela con la fracción ½, dejando únicamente el multiplicador de la segunda constante, que es 4x, no 2x.`
      }
    ]
  }
];

// ──────────────────────────────────────────────────────────
//  CONSTANTES Y UTILIDADES
// ──────────────────────────────────────────────────────────
const TOTAL_RETOS = RETOS.length;
const DURATION_SEC = 45 * 60;
const KEY_TIMER = "er-startTime";
const KEY_RESUELTOS = "er-resueltos";

const $id = (id) => document.getElementById(id);
const qs = (sel, ctx = document) => ctx.querySelector(sel);
const getParam = (key) => new URLSearchParams(window.location.search).get(key);

const saveResueltos = (arr) => localStorage.setItem(KEY_RESUELTOS, JSON.stringify(arr));
const loadResueltos = () => JSON.parse(localStorage.getItem(KEY_RESUELTOS) || "[]");
const saveStart = (ts) => localStorage.setItem(KEY_TIMER, String(ts));
const loadStart = () => parseInt(localStorage.getItem(KEY_TIMER) || "0", 10);

const formatTime = (sec) => {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

// ──────────────────────────────────────────────────────────
//  TEMPORIZADOR GLOBAL
// ──────────────────────────────────────────────────────────
let clockInterval = null;

function startClock() {
  const clockEl = $id("clock");
  const progressBar = $id("progress-bar");
  const progressTxt = $id("progress-txt");

  if (!clockEl) return;
  if (clockInterval) clearInterval(clockInterval);

  const tick = () => {
    const currentStartTime = loadStart();
    if (!currentStartTime) return;

    const elapsed = Math.floor((Date.now() - currentStartTime) / 1000);
    const remaining = Math.max(0, DURATION_SEC - elapsed);

    clockEl.textContent = formatTime(remaining);
    clockEl.classList.remove("warning", "danger");

    if (remaining <= 60) clockEl.classList.add("danger");
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

  const resueltos = loadResueltos();
  const desbloqueado = resueltos.length + 1;

  RETOS.forEach((reto) => {
    const nodo = $id(`nodo-${reto.id}`);
    if (!nodo) return;

    nodo.classList.remove("completed", "active-node", "locked");

    if (resueltos.includes(reto.id)) {
      nodo.classList.add("completed");
      nodo.href = `reto.html?id=${reto.id}`;
      const lbl = qs(".nodo-status-label", nodo);
      if (lbl) {
        lbl.className = "nodo-status-label status-completed";
        lbl.textContent = "✓ Completado";
      }
    } else if (reto.id === desbloqueado) {
      nodo.classList.add("active-node");
      nodo.href = `reto.html?id=${reto.id}`;
      const lbl = qs(".nodo-status-label", nodo);
      if (lbl) {
        lbl.className = "nodo-status-label status-active";
        lbl.textContent = "🔓 Disponible";
      }
    } else {
      nodo.classList.add("locked");
      nodo.href = "#";
      nodo.addEventListener("click", (e) => e.preventDefault());
    }
  });

  if (resueltos.length >= TOTAL_RETOS) {
    window.location.href = "cierre.html";
  }
}

// ──────────────────────────────────────────────────────────
//  RETO
// ──────────────────────────────────────────────────────────
function initReto() {
  if (!window.location.pathname.includes("reto.html")) return;

  const id = parseInt(getParam("id"), 10);
  const reto = RETOS.find((r) => r.id === id);
  if (!reto) {
    window.location.href = "mapa.html";
    return;
  }

  const eyebrowEl = $id("reto-eyebrow");
  const tituloEl = $id("reto-titulo");
  const narrativaEl = $id("reto-narrativa");
  const enunciadoEl = $id("reto-enunciado");
  const tagsEl = $id("reto-tags");
  const opcionesEl = $id("reto-opciones");
  const btnValidar = $id("btn-validar");
  const feedback = $id("feedback");
  const fbIcon = $id("fb-icon");
  const fbTitle = $id("fb-title");
  const fbText = $id("fb-text");
  const btnSiguiente = $id("btn-siguiente");

  let yaRespondio = false;
  let erroresConsecutivos = 0;

  if (eyebrowEl) eyebrowEl.innerHTML = reto.eyebrow;
  if (tituloEl) tituloEl.innerHTML = reto.titulo;
  if (narrativaEl) narrativaEl.innerHTML = reto.narrativa;
  
  let textoEnunciado = reto.enunciado;
  if (reto.instruccionExtra) {
      textoEnunciado += `<br><small style="color:#ffd700; display:block; margin-top:10px;">👉 ${reto.instruccionExtra}</small>`;
  }
  if (enunciadoEl) enunciadoEl.innerHTML = textoEnunciado;

  if (tagsEl) {
    tagsEl.innerHTML = "";
    reto.tags.forEach((t) => {
      tagsEl.innerHTML += `<span class="rtag ${t.cls}">${t.label}</span>`;
    });
  }

  // ==========================================
  // RENDERIZADO DINÁMICO SEGÚN EL TIPO DE RETO
  // ==========================================
  if (opcionesEl) {
    opcionesEl.innerHTML = "";
    const letras = ["A", "B", "C", "D", "E"];
    
    // TIPO 1: Selección Múltiple (Radio Buttons)
    if (reto.tipo === 1) {
      reto.opciones.forEach((o, idx) => {
        opcionesEl.innerHTML += `
          <label class="opcion-pro" for="${o.id}">
            <input type="radio" name="opcion_er" id="${o.id}" value="${o.id}" class="radio-oculto">
            <div class="opcion-pro-inner">
              <div class="opcion-letra">${letras[idx]}</div>
              <div class="opcion-texto">${o.texto}</div>
            </div>
          </label>`;
      });
      opcionesEl.addEventListener("change", (e) => {
        if (!yaRespondio && e.target.matches('input[type="radio"]')) btnValidar.disabled = false;
      });
    }
    
    // TIPO 2: Arrastrar y Soltar
    else if (reto.tipo === 2) {
      let dragHTML = `<div class="drop-area" id="zona-drop" style="border: 2px dashed #ccc; padding: 30px; text-align: center; margin-bottom: 20px; border-radius: 8px;">Arrastra la opción correcta AQUÍ</div>`;
      dragHTML += `<div class="drag-items-container" style="display:flex; flex-direction:column; gap:10px;">`;
      
      reto.opciones.forEach((o, idx) => {
        dragHTML += `
          <div class="drag-item opcion-pro-inner" draggable="true" data-id="${o.id}" style="cursor: grab; border:1px solid #555; padding: 10px; border-radius:5px; background:rgba(0,0,0,0.5);">
            <div class="opcion-letra">${letras[idx]}</div>
            <div class="opcion-texto">${o.texto}</div>
          </div>`;
      });
      dragHTML += `</div>`;
      opcionesEl.innerHTML = dragHTML;

      const zonaDrop = $id("zona-drop");
      const dragItems = document.querySelectorAll(".drag-item");

      dragItems.forEach(item => {
        item.addEventListener("dragstart", (e) => {
          if (yaRespondio) return;
          e.dataTransfer.setData("text/plain", e.target.dataset.id);
        });
      });

      zonaDrop.addEventListener("dragover", (e) => e.preventDefault());
      zonaDrop.addEventListener("drop", (e) => {
        e.preventDefault();
        if (yaRespondio) return;
        const droppedId = e.dataTransfer.getData("text/plain");
        const draggedElement = document.querySelector(`.drag-item[data-id="${droppedId}"]`);
        if (!draggedElement) return;
        
        // CORRECCIÓN: Si ya hay una opción en el drop, la devolvemos al contenedor original en vez de borrarla
        const elementoExistente = zonaDrop.querySelector(".drag-item");
        const containerItems = opcionesEl.querySelector(".drag-items-container");
        if (elementoExistente && containerItems) {
          containerItems.appendChild(elementoExistente);
        }
        
        zonaDrop.innerHTML = "";
        zonaDrop.appendChild(draggedElement);
        zonaDrop.dataset.seleccionado = droppedId;
        btnValidar.disabled = false;
      });
    }

    // TIPO 3: Escribir "correcto" al frente de la opción
    else if (reto.tipo === 3) {
      reto.opciones.forEach((o, idx) => {
        opcionesEl.innerHTML += `
          <div class="opcion-pro type-3" style="display:flex; align-items:center; gap: 10px; margin-bottom:10px;">
            <div class="opcion-pro-inner" style="flex-grow: 1;">
              <div class="opcion-letra">${letras[idx]}</div>
              <div class="opcion-texto">${o.texto}</div>
            </div>
            <input type="text" class="input-correcto" data-id="${o.id}" placeholder="Escribe 'correcto' aquí..." style="padding: 10px; border-radius: 5px; width: 180px;">
          </div>`;
      });
      
      opcionesEl.addEventListener("input", (e) => {
        if (!yaRespondio && e.target.matches(".input-correcto")) {
           btnValidar.disabled = false;
        }
      });
    }

    // TIPO 5: Escribir la respuesta libremente
    else if (reto.tipo === 5) {
      opcionesEl.innerHTML = `
        <div style="text-align: center; margin-top: 20px;">
          <input type="text" id="input-respuesta-abierta" placeholder="Ej: 2x(5x+6)(5x-6)" style="padding: 15px; font-size: 1.2rem; width: 80%; border-radius: 8px; border: 2px solid #555; background: #222; color: #fff; text-align: center;">
        </div>`;
        
      $id("input-respuesta-abierta").addEventListener("input", (e) => {
        if (!yaRespondio && e.target.value.trim().length > 0) btnValidar.disabled = false;
      });
    }

    // TIPO 6: Códigos + Animación Final
    else if (reto.tipo === 6) {
      let htmlCodigos = `<div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom: 20px;">`;
      reto.opciones.forEach((o) => {
        htmlCodigos += `
          <div style="background: #111; padding: 15px; border-radius: 8px; border: 1px solid #444; text-align:center;">
             <p style="margin:0 0 10px 0; font-family: monospace;">Opción: ${o.texto}</p>
             <span style="background: #ffd700; color: #000; padding: 5px 10px; font-weight: bold; border-radius: 3px;">CÓDIGO: ${o.codigo}</span>
          </div>`;
      });
      htmlCodigos += `</div>`;
      
      htmlCodigos += `
        <div class="terminal-box" style="text-align:center; background:#000; padding:20px; border-radius:8px; border: 2px solid #0f0;">
          <h3 style="color:#0f0; margin-top:0; font-family:monospace;">>_ INGRESE CÓDIGO DE DESBLOQUEO FINAL</h3>
          <input type="text" id="input-codigo-final" placeholder="..." style="padding: 10px; font-size: 1.5rem; text-align: center; text-transform: uppercase; font-family: monospace; width: 60%;">
        </div>
      `;
      opcionesEl.innerHTML = htmlCodigos;

      $id("input-codigo-final").addEventListener("input", (e) => {
        if (!yaRespondio && e.target.value.trim().length > 0) btnValidar.disabled = false;
      });
    }
  }

  // ==========================================
  // LÓGICA DE VALIDACIÓN CENTRAL
  // ==========================================
  if (btnValidar) {
    btnValidar.disabled = true;

    btnValidar.addEventListener("click", () => {
      if (yaRespondio) return;

      let esCorrecto = false;
      let feedbackTexto = "";
      let opcionExitosa = reto.opciones.find(o => o.correcta); 

      switch(reto.tipo) {
        case 1:
          const radioSel = document.querySelector('input[name="opcion_er"]:checked');
          if(radioSel) {
            const op = reto.opciones.find(o => o.id === radioSel.value);
            esCorrecto = op.correcta;
            feedbackTexto = op.feedback;
          }
          break;
          
        case 2:
          const dropZone = $id("zona-drop");
          if(dropZone && dropZone.dataset.seleccionado) {
            const op = reto.opciones.find(o => o.id === dropZone.dataset.seleccionado);
            esCorrecto = op.correcta;
            feedbackTexto = op.feedback;
          }
          break;
          
        case 3:
          const inputs = document.querySelectorAll(".input-correcto");
          let correctaMarcada = false;
          let falsaMarcada = false;

          inputs.forEach(input => {
            const val = input.value.trim().toLowerCase();
            const esLaOpcionCorrecta = reto.opciones.find(o => o.id === input.dataset.id).correcta;
            if (val === "correcto" || val === "correcta") {
                if (esLaOpcionCorrecta) correctaMarcada = true;
                else falsaMarcada = true;
            }
          });

          esCorrecto = (correctaMarcada && !falsaMarcada);
          if (esCorrecto) {
            feedbackTexto = opcionExitosa.feedback;
          } else {
            feedbackTexto = `<strong>Incorrecto.</strong> Debes escribir "correcto" SOLO en la opción verdadera.`;
          }
          break;
          
        case 5:
          // CORRECCIÓN: Limpieza profunda de espacios y estandarización de guiones de resta (- y −)
          const inputRespuesta = $id("input-respuesta-abierta").value.trim().replace(/\s+/g, '').toLowerCase().replace(/−/g, '-');
          const pos1 = "2x(5x+6)(5x-6)".toLowerCase();
          const pos2 = "2x(5x-6)(5x+6)".toLowerCase(); // Admite con mutabilidad el orden de factores conjugados

          if (inputRespuesta === pos1 || inputRespuesta === pos2) {
            esCorrecto = true;
            feedbackTexto = opcionExitosa.feedback;
          } else {
            feedbackTexto = "<strong>Incorrecto.</strong> Revisa tus signos, factores y asegúrate de no usar espacios.";
          }
          break;

        case 6:
          const inputCodigo = $id("input-codigo-final").value.trim().toUpperCase();
          if (inputCodigo === opcionExitosa.codigo) {
            esCorrecto = true;
            feedbackTexto = opcionExitosa.feedback;
            lanzarAnimacionFinal();
          } else {
            feedbackTexto = "<strong>CÓDIGO DENEGADO.</strong> El código ingresado no corresponde a la solución correcta.";
          }
          break;
      }

      if (esCorrecto) {
        erroresConsecutivos = 0;
        mostrarFeedback(true, feedbackTexto, false);

        const res = loadResueltos();
        if (!res.includes(id)) {
          res.push(id);
          saveResueltos(res);
        }

        if (btnSiguiente) {
          btnSiguiente.classList.add("visible");
          const nextId = id + 1;
          if (nextId > TOTAL_RETOS) {
            btnSiguiente.textContent = "Ver resultados →";
            btnSiguiente.onclick = () => window.location.href = "cierre.html";
          } else {
            btnSiguiente.textContent = "Siguiente misión →";
            btnSiguiente.onclick = () => window.location.href = `reto.html?id=${nextId}`;
          }
        }
        yaRespondio = true;
        bloquearOpciones();
        btnValidar.disabled = true;

      } else {
        erroresConsecutivos++;
        descontarCincoMinutos();

        if (erroresConsecutivos === 1) {
          const pista = construirPista(reto);
          mostrarFeedback(false, pista, true);
        } else {
          marcarRespuestaCorrecta(opcionExitosa?.id);
          const mensaje = `
            <strong>Respuesta correcta:</strong> ${opcionExitosa ? opcionExitosa.texto : ""}<br><br>
            ${opcionExitosa ? opcionExitosa.feedback : "Revisa el procedimiento."}
          `;
          mostrarFeedback(false, mensaje, false);

          yaRespondio = true;
          bloquearOpciones();
          btnValidar.disabled = true;

          if (btnSiguiente) {
            btnSiguiente.classList.add("visible");
            const nextId = id + 1;
            if (nextId > TOTAL_RETOS) {
              btnSiguiente.textContent = "Ver resultados →";
              btnSiguiente.onclick = () => window.location.href = "cierre.html";
            } else {
              btnSiguiente.textContent = "Continuar →";
              btnSiguiente.onclick = () => window.location.href = `reto.html?id=${nextId}`;
            }
          }
        }
      }
    });
  }

  function descontarCincoMinutos() {
    const currentStart = loadStart();
    if (!currentStart) return;
    saveStart(currentStart - (5 * 60 * 1000));
  }

  // CORRECCIÓN: Pistas dinámicas personalizadas pedagógicamente según el reto
  function construirPista(retoActual) {
    switch (retoActual.id) {
      case 1:
        return `<strong>Pista:</strong> Recuerda la estructura del cuadrado de un binomio: <em>(a + b)² = a² + 2ab + b²</em>. No olvides calcular el doble producto del primer término por el segundo: <em>2 · (3x) · 5</em>.`;
      case 2:
        return `<strong>Pista:</strong> Al elevar un binomio con resta al cuadrado: <em>(a - b)² = a² - 2ab + b²</em>. El término central debe ser obligatoriamente negativo y recuerda elevar el coeficiente numérico: <em>(5x)² = 25x²</em>.`;
      case 3:
        return `<strong>Pista:</strong> Estás ante una diferencia de cuadrados (binomios conjugados): <em>(a + b)(a - b) = a² - b²</em>. Los términos intermedios (+42x y -42x) se anulan por completo.`;
      case 4:
        return `<strong>Pista:</strong> Desarrolla el cubo de un binomio siguiendo la regla: <em>(a + b)³ = a³ + 3a²b + 3ab² + b³</em>. Eleva con cuidado cada término y procesa las potencias internas antes de multiplicar por 3.`;
      case 5:
        return `<strong>Pista:</strong> Primero extrae el Máximo Común Divisor numérico y la variable común: <em>2x</em>. Luego, el binomio restante <em>(25x² - 36)</em> es una diferencia de cuadrados que debes descomponer en binomios conjugados.`;
      case 6:
        return `<strong>Pista:</strong> Desarrolla la potencia del binomio al cuadrado <em>(½x + 4)²</em> en sus tres términos independientes. Luego, cancela la constante resultante restando el <em>16</em> exterior.`;
      default:
        return `<strong>Pista:</strong> Revisa el patrón del producto notable, el signo y el coeficiente del ejercicio.`;
    }
  }

  function mostrarFeedback(correcta, texto, permitirReintento = false) {
    if (!feedback || !fbIcon || !fbTitle || !fbText) return;
    feedback.className = `feedback-card ${correcta ? "correct" : "incorrect"} visible`;
    fbIcon.textContent = correcta ? "✅" : "⚠️";
    fbTitle.textContent = correcta ? "¡Respuesta correcta!" : "Respuesta incorrecta";
    fbText.innerHTML = texto;
    yaRespondio = !permitirReintento;
  }

  function bloquearOpciones() {
    if (!opcionesEl) return;
    const inputs = opcionesEl.querySelectorAll('input');
    inputs.forEach(input => input.disabled = true);
    const dragItems = opcionesEl.querySelectorAll('.drag-item');
    dragItems.forEach(item => item.draggable = false);
  }

  function marcarRespuestaCorrecta(idCorrecta) {
    if (!opcionesEl || !idCorrecta) return;
    let elementoCorrecto = null;
    
    if (reto.tipo === 1 || reto.tipo === 3) {
      elementoCorrecto = opcionesEl.querySelector(`[data-id="${idCorrecta}"], input[value="${idCorrecta}"]`);
      if (elementoCorrecto) {
        const label = elementoCorrecto.closest(".opcion-pro");
        if (label) label.classList.add("correcta");
      }
    } 
    // CORRECCIÓN: Resaltado visual para opciones arrastrables cuando se agotan los intentos
    else if (reto.tipo === 2) {
      elementoCorrecto = opcionesEl.querySelector(`.drag-item[data-id="${idCorrecta}"]`);
      if (elementoCorrecto) {
        elementoCorrecto.style.border = "2px solid #28a745";
        elementoCorrecto.style.backgroundColor = "rgba(40, 167, 69, 0.2)";
      }
      const zonaDrop = $id("zona-drop");
      if (zonaDrop) zonaDrop.style.borderColor = "#28a745";
    }
  }

  function lanzarAnimacionFinal() {
    const confeti = document.createElement("div");
    confeti.innerHTML = "🎉 SISTEMA DESBLOQUEADO 🎉";
    confeti.style.position = "fixed";
    confeti.style.top = "50%";
    confeti.style.left = "50%";
    confeti.style.transform = "translate(-50%, -50%)";
    confeti.style.fontSize = "4rem";
    confeti.style.color = "#0f0";
    confeti.style.textShadow = "0 0 20px #0f0";
    confeti.style.zIndex = "9999";
    confeti.style.animation = "latido 1s infinite";
    document.body.appendChild(confeti);
    
    if (!document.getElementById("animacion-css")) {
        const style = document.createElement("style");
        style.id = "animacion-css";
        style.innerHTML = `@keyframes latido { 0% {transform: translate(-50%, -50%) scale(1);} 50% {transform: translate(-50%, -50%) scale(1.2);} 100% {transform: translate(-50%, -50%) scale(1);} }`;
        document.head.appendChild(style);
    }
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
  const elapsed = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
  const timeUsed = Math.min(elapsed, DURATION_SEC);
  const exito = resueltos.length >= TOTAL_RETOS;

  const medalla = $id("medalla");
  if (medalla) medalla.textContent = exito ? "🏆" : "⏱";

  const badge = $id("state-badge");
  if (badge) {
    badge.className = `state-badge ${exito ? "success" : "timeout"}`;
    badge.textContent = exito ? "✦ Sistema restaurado" : "✦ Tiempo agotado";
  }

  const title = $id("main-title");
  if (title) {
    title.className = `main-title ${exito ? "success" : "timeout"}`;
    title.textContent = exito ? "¡Misión cumplida!" : "El tiempo se agotó";
  }

  const msg = $id("mensaje-texto");
  if (msg && !exito) {
    msg.innerHTML = `No alcanzó el tiempo para restaurar todas las decisiones del sistema.
    Pero cada reto resuelto fue un acto de <strong>pensamiento algebraico crítico</strong>.
    <strong>Reinicia la misión</strong> y usa lo aprendido para mejorar tu tiempo.`;
  }

  const statRetos = $id("stat-retos");
  const statTiempo = $id("stat-tiempo");
  const statPct = $id("stat-pct");

  if (statRetos) statRetos.textContent = `${resueltos.length}/${TOTAL_RETOS}`;
  if (statTiempo) statTiempo.textContent = formatTime(timeUsed);
  if (statPct) statPct.textContent = `${Math.round((resueltos.length / TOTAL_RETOS) * 100)}%`;

  const btnReset = $id("btn-reset");
  const btnMapa = $id("btn-mapa");

  if (btnReset) {
    btnReset.addEventListener("click", () => {
      localStorage.removeItem(KEY_TIMER);
      localStorage.removeItem(KEY_RESUELTOS);
      window.location.href = "index.html";
    });
  }

  if (btnMapa) {
    btnMapa.addEventListener("click", () => {
      window.location.href = "mapa.html";
    });
  }
}

// ──────────────────────────────────────────────────────────
//  INICIALIZACIÓN GLOBAL
// ──────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  const enIndex =
    path.endsWith("/") ||
    path.endsWith("index.html") ||
    path === "" ||
    !path.includes(".html");

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
