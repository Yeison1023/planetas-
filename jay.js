// informacion de los planetas que al poner el value=sol etc se mostrara la informacion de cada planeta en la pagina
const celestialData = {
  sol: {
    name: "EL SOL",
    englishName: "THE SUN",
    sector: "SECTOR: CENTRO HELIOS-00",
    subtitle: "CORONA DE ENERGÍA INFINITA",
    gravity: 274.0,
    gravityRel: "27.930G",
    color: "#ff5500",
    code: "EXP-SUN-1974",
    sizeVal: "696,340 KM",
    sizeDesc: "Aprox. 109 veces el diámetro de la Tierra.",
    compVal: "PLASMA DE HIDRÓGENO (~73%) Y HELIO (~25%)",
    compDesc: "Horno termonuclear que sustenta todo el sistema planetario.",
    moonsVal: "8 PLANETAS MAYORES + MILLONES DE ASTEROIDES",
    moonsDesc: "Gobierna gravitacionalmente todo el sistema solar.",
    distVal: "0 KM (CENTRO DEL SISTEMA)",
    distDesc: "La radiación tarda aprox. 100,000 años en emerger de su núcleo."
  },
  mercurio: {
    name: "MERCURIO",
    englishName: "MERCURY",
    sector: "SECTOR: INTERIOR CERCANO",
    subtitle: "EL CORREDOR VELOZ",
    gravity: 3.70,
    gravityRel: "0.377G",
    color: "#8b949e",
    code: "EXP-MERC-1974",
    sizeVal: "2,439 KM",
    sizeDesc: "38% del radio terrestre.",
    compVal: "NÚCLEO METÁLICO GIGANTE Y CORTEZA DE SILICATOS",
    compDesc: "Superficie repleta de cráteres de impacto.",
    moonsVal: "SIN LUNAS CONOCIDAS",
    moonsDesc: "Su cercanía al Sol impide capturar satélites.",
    distVal: "57.9 M KM (0.39 UA)",
    distDesc: "Un año dura solo 88 días terrestres."
  },
  tierra: {
    name: "LA TIERRA",
    englishName: "EARTH",
    sector: "SECTOR: ZONA HABITABLE",
    subtitle: "CUNA TERRESTRE",
    gravity: 9.81,
    gravityRel: "1.000G",
    color: "#40a058",
    code: "EXP-EARTH-1974",
    sizeVal: "6,371 KM",
    sizeDesc: "Punto de referencia de escala planetaria.",
    compVal: "AGUA LÍQUIDA (71%), NITRÓGENO Y OXÍGENO",
    compDesc: "El único mundo conocido con vida biológica.",
    moonsVal: "1 LUNA (LA LUNA)",
    moonsDesc: "Estabiliza la inclinación axial del planeta.",
    distVal: "149.6 M KM (1.0 UA)",
    distDesc: "La luz del Sol tarda 8 minutos y 20 segundos en llegar."
  },
  marte: {
    name: "MARTE",
    englishName: "MARS",
    sector: "SECTOR: FRONTERA ROJA",
    subtitle: "EL PLANETA CARMESÍ",
    gravity: 3.72,
    gravityRel: "0.379G",
    color: "#d94e2b",
    code: "EXP-MARS-1974",
    sizeVal: "3,389 KM",
    sizeDesc: "53% del radio terrestre.",
    compVal: "ÓXIDO DE HIERRO, ROCAS DE BASALTO Y CO2",
    compDesc: "Hogar del volcán más grande del sistema solar (Monte Olimpo).",
    moonsVal: "2 LUNAS (FOBOS Y DEIMOS)",
    moonsDesc: "Asteroides capturados de forma irregular.",
    distVal: "227.9 M KM (1.52 UA)",
    distDesc: "Posee la atmósfera más tenue del grupo rocoso."
  },
  venus: {
    name: "VENUS",
    englishName: "VENUS",
    sector: "SECTOR: VAPOR INTENSO",
    subtitle: "EL OBSERVATORIO NUBOSO",
    gravity: 8.87,
    gravityRel: "0.904G",
    color: "#e39d3b",
    code: "EXP-VENUS-1974",
    sizeVal: "6,051 KM",
    sizeDesc: "95% del radio de la Tierra.",
    compVal: "DIÓXIDO DE CARBONO Y NUBES DE ÁCIDO SULFÚRICO",
    compDesc: "Efecto invernadero extremo con temperaturas de 465°C.",
    moonsVal: "SIN LUNAS CONOCIDAS",
    moonsDesc: "Rotación retrógrada extremadamente lenta.",
    distVal: "108.2 M KM (0.72 UA)",
    distDesc: "El objeto más brillante en el cielo nocturno tras la Luna."
  },
  urano: {
    name: "URANO",
    englishName: "URANUS",
    sector: "SECTOR: CRÍO-SISTEMA SOLAR",
    subtitle: "EL RETRATO TURQUESA",
    gravity: 8.69,
    gravityRel: "0.886G",
    color: "#2b9ed9",
    code: "EXP-URAN-1974",
    sizeVal: "25,362 KM",
    sizeDesc: "4.0 veces el radio de la Tierra.",
    compVal: "GIGANTE HELADO: FLUIDOS DE AGUA, AMONÍACO Y METANO",
    compDesc: "El metano en su atmósfera absorbe la luz roja otorgándole su tono cian.",
    moonsVal: "28 LUNAS REGISTRADAS",
    moonsDesc: "Titania, Oberón y Miranda (con el acantilado Verona Rupes).",
    distVal: "2,871 M KM (19.2 UA)",
    distDesc: "La luz solar tarda 2 horas y 40 minutos en iluminar sus nubes."
  },
  neptuno: {
    name: "NEPTUNO",
    englishName: "NEPTUNE",
    sector: "SECTOR: FRONTERA EXTERIOR",
    subtitle: "VIENTOS SUPERSÓNICOS",
    gravity: 11.15,
    gravityRel: "1.137G",
    color: "#4d52d9",
    code: "EXP-NEPT-1974",
    sizeVal: "24,622 KM",
    sizeDesc: "3.9 veces el radio terrestre.",
    compVal: "MANTO FLUIDO DENSO DE AGUA CALIENTE, AMONÍACO Y METANO",
    compDesc: "La atmósfera más turbulenta con tempestades y vientos de 2,100 km/h.",
    moonsVal: "16 LUNAS RECONOCIDAS",
    moonsDesc: "Tritón, poseedor de géiseres activos de nitrógeno líquido.",
    distVal: "4,495 M KM (30.0 UA)",
    distDesc: "Los fotones solares viajan más de 4 horas para tocar sus nubes."
  },
  saturno: {
    name: "SATURNO",
    englishName: "SATURN",
    sector: "SECTOR: ANILLOS DENSOS",
    subtitle: "LA CORONA ANILLADA",
    gravity: 10.44,
    gravityRel: "1.064G",
    color: "#d9b873",
    code: "EXP-SAT-1974",
    sizeVal: "58,232 KM",
    sizeDesc: "9.1 veces el radio de la Tierra.",
    compVal: "HIDRÓGENO Y HELIO CON NÚCLEO ROCOSO",
    compDesc: "Famoso por su extenso e intrincado sistema de anillos de hielo.",
    moonsVal: "146 LUNAS CONFIRMADAS",
    moonsDesc: "Titán posee atmósfera densa y mares de metano líquido.",
    distVal: "1496 M KM (9.58 UA)",
    distDesc: "Su densidad es menor que la del agua."
  },
  jupiter: {
    name: "JÚPITER",
    englishName: "JUPITER",
    sector: "SECTOR: GIGANTES GASEOSOS",
    subtitle: "EL COLOSO GASEOSO",
    gravity: 24.79,
    gravityRel: "2.527G",
    color: "#cca662",
    code: "EXP-JUP-1974",
    sizeVal: "69,911 KM",
    sizeDesc: "11 veces el radio terrestre.",
    compVal: "HIDRÓGENO Y HELIO EN FASE LÍQUIDA METÁLICA",
    compDesc: "Alberga la Gran Mancha Roja, una tormenta más grande que la Tierra.",
    moonsVal: "95 LUNAS OFICIALES",
    moonsDesc: "Ío, Europa, Ganímedes y Calisto (Lunas Galileanas).",
    distVal: "778.5 M KM (5.20 UA)",
    distDesc: "Posee el campo magnético más potente de todos los planetas."
  },
  pluton: {
    name: "PLUTÓN",
    englishName: "PLUTO",
    sector: "SECTOR: CINTURÓN DE KUIPER",
    subtitle: "EL CENTINELA DE KUIPER",
    gravity: 0.62,
    gravityRel: "0.063G",
    color: "#586069",
    code: "EXP-PLUTO-1974",
    sizeVal: "1,188 KM",
    sizeDesc: "18% del radio terrestre.",
    compVal: "CORTEZA DE HIELO DE NITRÓGENO Y NÚCLEO ROCOSO",
    compDesc: "Planeta enano con glaciar de nitrógeno con forma de corazón.",
    moonsVal: "5 LUNAS CONOCIDAS",
    moonsDesc: "Caronte es tan grande que forman un sistema binario.",
    distVal: "5,906 M KM (39.5 UA)",
    distDesc: "Completa una órbita alrededor del Sol cada 248 años."
  }
};

// Función auxiliar para actualizar texto de forma segura sin romper el código
function setSafeText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}


// Función principal de actualización
function updateTelemetry() {
  const planetSelect = document.querySelector('.custom-select'); // selecciona el planeta con la clase custom.select del index
  const massInput = document.querySelector('.custom-input'); // lo mismo pero con el peso
  
  if (!planetSelect) return;

  const planetKey = planetSelect.value; // planeta selecionado 
  const data = celestialData[planetKey];  //selecciona de la lista de arriba 
  const earthMass = parseFloat(massInput ? massInput.value : 70) || 70;

  if (!data) return;

  // 1. Cambiar variable de color del tema
  document.documentElement.style.setProperty('--theme-color', data.color);
  document.documentElement.style.setProperty('--theme-color-glow', `${data.color}33`); //css de los planetas y del index

  // 2. Cálculos Físicos
  const calculatedWeight = earthMass * (data.gravity / 9.81);
  const percentDiff = ((data.gravity - 9.81) / 9.81) * 100;
  const jumpFactor = 9.81 / data.gravity; // selecciona la gravedad de un planeta 
  const jumpMeters = 0.50 * jumpFactor; // muestra en la pagina cuanto seria un salto de o.50cm en otro planeta

  // 3. AFICHE IZQUIERDO
  setSafeText('poster-planet-name', data.name);
  setSafeText('poster-sector', data.sector);
  setSafeText('poster-title', data.englishName);
  setSafeText('poster-subtitle', data.subtitle);
  setSafeText('poster-gravity', data.gravityRel);
  setSafeText('poster-exp-id', data.code);

  // 4. MEDIDOR DE INERCIA
  const relPercent = ((data.gravity / 9.81) * 100).toFixed(1); // topfixed para redondear a 1 
  setSafeText('inertia-percentage', `${relPercent}% DE LA TIERRA`);
  setSafeText('inertia-earth-mass', `${earthMass.toFixed(1)} KG`);
  setSafeText('inertia-local-label', `${data.name} (LOCAL)`);
  setSafeText('inertia-local-mass', `${calculatedWeight.toFixed(2)} KG`);

  const maxBarWidth = Math.min(Math.max((data.gravity / 9.81) * 30, 5), 100);
  const localBar = document.getElementById('inertia-local-bar');
  if (localBar) {
    localBar.style.width = `${maxBarWidth}%`;
  }

  // 5. RESULTADOS DERECHA
  setSafeText('res-planet-name', data.name);
  setSafeText('res-weight-value', calculatedWeight.toFixed(1));

  const diffSign = percentDiff >= 0 ? '+' : '';
  const diffWord = percentDiff >= 0 ? 'MÁS PESADO' : 'MÁS LIGERO';
  setSafeText('metric-diff-value', `${diffSign}${percentDiff.toFixed(1)}% ${diffWord}`);

  setSafeText('metric-jump-value', `${jumpFactor.toFixed(2)}× MÁS ALTO`);
  setSafeText('metric-jump-desc', `Un salto vertical de 0.50 m en la Tierra aquí ascendería a ${jumpMeters.toFixed(2)} metros.`);

  // 6. FICHA TÉCNICA
  setSafeText('tech-size-val', data.sizeVal);
  setSafeText('tech-size-desc', data.sizeDesc);
  setSafeText('tech-comp-val', data.compVal);
  setSafeText('tech-comp-desc', data.compDesc);
  setSafeText('tech-moons-val', data.moonsVal);
  setSafeText('tech-moons-desc', data.moonsDesc);
  setSafeText('tech-dist-val', data.distVal);
  setSafeText('tech-dist-desc', data.distDesc);

  // 7. TABLA DE TRANSMISIÓN SIMULTÁNEA INFERIOR
  setSafeText('comp-mass-ref', `CÁLCULO BASADO EN MASA DE ${earthMass.toFixed(1)} KG`);

  Object.keys(celestialData).forEach(key => {   
    const itemData = celestialData[key];
    const itemWeight = (earthMass * (itemData.gravity / 9.81)).toFixed(1);
    setSafeText(`comp-val-${key}`, itemWeight); 
  });  
  

  // Resaltar elemento activo en la tabla
  document.querySelectorAll('.comp-item').forEach(card => {
    card.classList.toggle('active', card.getAttribute('data-planet') === planetKey);
  });

  // Resaltar elemento activo en los botones de colores/paletas
  document.querySelectorAll('.palette-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-planet') === planetKey);
  });
}

// Escuchadores de eventos para que la página sea interactiva
document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('.custom-select');
  const input = document.querySelector('.custom-input');
  const calcBtn = document.querySelector('.btn-calculate');

  // Evento al cambiar la opción del menú SELECT
  if (select) {
    select.addEventListener('change', updateTelemetry);
  }

  // Evento al escribir una masa en el INPUT
  if (input) {
    input.addEventListener('input', updateTelemetry);
  }

  // Evento al hacer clic en el BOTÓN "CALCULAR TELEMETRÍA"
  if (calcBtn) {
    calcBtn.addEventListener('click', updateTelemetry);
  }

  // Evento al hacer clic en las Paletas Litográficas (Botones de colores)
  document.querySelectorAll('.palette-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const planetKey = btn.getAttribute('data-planet');
      if (planetKey && select) {
        select.value = planetKey;
        updateTelemetry();
      }
    });
  });

  // Evento al hacer clic en las tarjetas de la Tabla Comparativa inferior
  document.querySelectorAll('.comp-item').forEach(card => {
    card.addEventListener('click', () => {
      const planetKey = card.getAttribute('data-planet');
      if (planetKey && select) {
        select.value = planetKey;
        updateTelemetry();
      }
    });
  });

  // Ejecución inicial al cargar la página
  updateTelemetry();
});