/* ---------- Data configuration ---------- */
const MICRO_PROOF_MESSAGES = [
  'Maria reservo en 62 segundos ayer.',
  'Mas de 1,200 rutas creadas este mes.',
  '8 de cada 10 usuarios encuentran plan en menos de 90s.',
  'Tu mesa ideal esta a 6 respuestas de distancia.'
];

const QUESTIONNAIRE = [
  {
    id: 'intencion',
    prompt: '¿Qué buscas hoy?',
    tag: 'Intención',
    options: [
      {
        id: 'novedad',
        label: 'Sorpréndeme con algo distinto',
        helper: 'Propuestas nuevas, chefs creativos',
        tags: ['novedad', 'curioso'],
        image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=240&q=80',
        imageAlt: 'Platillo creativo con presentación moderna'
      },
      {
        id: 'seguro',
        label: 'Quiero algo que ya sé que funciona',
        helper: 'Favoritos probados, cero sorpresas',
        tags: ['seguro', 'comfort'],
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=240&q=80',
        imageAlt: 'Mesa con platos reconfortantes compartidos'
      }
    ]
  },
  {
    id: 'compania',
    prompt: '¿Con quién vienes?',
    tag: 'Compañía',
    options: [
      {
        id: 'pareja',
        label: 'Solo o con una persona',
        helper: 'Plan íntimo, conversación tranquila',
        tags: ['pareja', 'tranquilo'],
        image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=240&q=80',
        imageAlt: 'Brindis íntimo para dos personas'
      },
      {
        id: 'grupo',
        label: 'Con familia o amigos',
        helper: 'Necesitamos mesa amplia',
        tags: ['grupo'],
        image: 'https://images.unsplash.com/photo-1543353071-087092ec393e?auto=format&fit=crop&w=240&q=80',
        imageAlt: 'Mesa larga con grupo de amigos compartiendo comida'
      }
    ]
  },
  {
    id: 'ambiente',
    prompt: 'Elige el ambiente.',
    tag: 'Ambiente',
    options: [
      {
        id: 'tranquilo',
        label: 'Calmado para platicar',
        helper: 'Música suave, espacio cómodo',
        tags: ['tranquilo', 'quedarse'],
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=240&q=80',
        imageAlt: 'Mesa tranquila junto a ventana con café y flores'
      },
      {
        id: 'animado',
        label: 'Con energía y música',
        helper: 'Ambiente vivo, playlist arriba',
        tags: ['animado'],
        image: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=240&q=80',
        imageAlt: 'Bar animado con luces cálidas y gente socializando'
      }
    ]
  },
  {
    id: 'presupuesto',
    prompt: '¿Cómo quieres gastar?',
    tag: 'Presupuesto',
    options: [
      {
        id: 'economico',
        label: 'Cuidar el bolsillo',
        helper: 'Promedio menor a 220 MXN',
        tags: ['economico'],
        image: 'https://images.unsplash.com/photo-1546069901-d5bfd8403a7d?auto=format&fit=crop&w=240&q=80',
        imageAlt: 'Comida callejera colorida servida rápidamente'
      },
      {
        id: 'premium',
        label: 'Me doy un gusto',
        helper: 'Estoy listo para invertir más',
        tags: ['premium'],
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=240&q=80',
        imageAlt: 'Mesa elegante con servicio de alta gama'
      }
    ]
  },
  {
    id: 'antojo',
    prompt: '¿Qué se te antoja más?',
    tag: 'Antojo',
    options: [
      {
        id: 'comfort',
        label: 'Sabores reconfortantes',
        helper: 'Tacos, caldos, parrilla',
        tags: ['comfort', 'seguro'],
        image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=240&q=80',
        imageAlt: 'Comida reconfortante servida en platos abundantes'
      },
      {
        id: 'creativo',
        label: 'Algo diferente o creativo',
        helper: 'Sushi, ramen, fusiones',
        tags: ['novedad', 'curioso'],
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=240&q=80',
        imageAlt: 'Plato creativo con ingredientes frescos y coloridos'
      }
    ]
  },
  {
    id: 'logistica',
    prompt: '¿Qué necesitas para hoy?',
    tag: 'Logística',
    options: [
      {
        id: 'practico',
        label: 'Salir rápido o estacionar fácil',
        helper: 'Servicio ágil, acceso sencillo',
        tags: ['rapido', 'estacionamiento'],
        image: 'https://images.unsplash.com/photo-1523473827534-86c5ad6cb394?auto=format&fit=crop&w=240&q=80',
        imageAlt: 'Comida para llevar lista para salir rápido'
      },
      {
        id: 'relajado',
        label: 'Quedarme un buen rato',
        helper: 'Sillones, sobremesa larga',
        tags: ['quedarse'],
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=240&q=80',
        imageAlt: 'Personas relajadas conversando en sillones amplios'
      }
    ]
  }
];

const TAG_WEIGHTS = {
  novedad: 3,
  curioso: 2,
  seguro: 3,
  comfort: 2,
  pareja: 3,
  grupo: 3,
  tranquilo: 3,
  animado: 3,
  economico: 3,
  premium: 3,
  estacionamiento: 2,
  rapido: 2,
  quedarse: 2
};

const TAG_LABELS = {
  novedad: 'Plan curioso',
  curioso: 'Propuestas creativas',
  seguro: 'Plan seguro',
  comfort: 'Comida reconfortante',
  pareja: 'Plan íntimo',
  grupo: 'Vienes en grupo',
  tranquilo: 'Ambiente para conversar',
  animado: 'Ambiente con energía',
  economico: 'Cuidar presupuesto',
  premium: 'Listo para invertir',
  estacionamiento: 'Estacionamiento fácil',
  rapido: 'Servicio ágil',
  quedarse: 'Quedarte más tiempo'
};

const VENUES = [
  {
    id: 'casa-caldito',
    nombre: 'Casa Caldito Moderna',
    barrio: 'Centro Histórico',
    descripcion: 'Fondita contemporánea con caldos michoacanos y guisos reconfortantes servidos con un toque moderno.',
    precioEstimado: 'Cuenta promedio: 180 MXN por persona',
    horario: 'Mar-Dom 13:00-22:00',
    image: {
      src: 'https://images.unsplash.com/photo-1604908177522-4026dc32fdc9?auto=format&fit=crop&w=900&q=80',
      alt: 'Cazo de caldo michoacano sobre mesa rústica'
    },
    tags: { seguro: 3, comfort: 3, economico: 2, grupo: 2, tranquilo: 2, rapido: 2 },
    destacados: [
      'Caldo de corunda con setas y nixtamal propio',
      'Menú del día que cambia según mercado',
      'Estacionamiento conveniado a una cuadra'
    ],
    enlaces: {
      maps: 'https://maps.google.com/?q=Casa+Caldito+Moderna+Morelia',
      whatsapp: 'https://wa.me/5214435550101?text=Hola%20Casa%20Caldito%2C%20quiero%20reservar%20para%20hoy'
    }
  },
  {
    id: 'terraza-brisa',
    nombre: 'Terraza Brisa Nocturna',
    barrio: 'Chapultepec',
    descripcion: 'Terraza con mixología de autor, música en vivo ligera y menú de platillos para compartir.',
    precioEstimado: 'Cuenta promedio: 340 MXN por persona',
    horario: 'Mié-Dom 18:00-01:00',
    image: {
      src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
      alt: 'Coctel de autor en terraza nocturna con luces'
    },
    tags: { novedad: 2, premium: 3, animado: 3, pareja: 2, quedarse: 2 },
    destacados: [
      'Cócteles con destilados michoacanos',
      'Playlist curada por DJs locales',
      'Reservados semi-privados con vista a la ciudad'
    ],
    enlaces: {
      maps: 'https://maps.google.com/?q=Terraza+Brisa+Nocturna+Morelia',
      whatsapp: 'https://wa.me/5214435550202?text=Hola%20Terraza%20Brisa%2C%20busco%20mesa%20para%20hoy'
    }
  },
  {
    id: 'neko-ramen',
    nombre: 'Neko Ramen Lab',
    barrio: 'Nueva España',
    descripcion: 'Barra de ramen y baos con productos locales, menús colaborativos y cocina a la vista.',
    precioEstimado: 'Cuenta promedio: 260 MXN por persona',
    horario: 'Lun-Sáb 14:00-23:00',
    image: {
      src: 'https://images.unsplash.com/photo-1585238342028-4c07e92d237c?auto=format&fit=crop&w=900&q=80',
      alt: 'Tazón de ramen con palillos descansando al borde'
    },
    tags: { novedad: 3, curioso: 3, premium: 2, pareja: 2, animado: 1 },
    destacados: [
      'Caldo de hueso rostizado 18 horas',
      'Opciones veganas creativas',
      'Degustación mensual con chefs invitados'
    ],
    enlaces: {
      maps: 'https://maps.google.com/?q=Neko+Ramen+Lab+Morelia',
      whatsapp: 'https://wa.me/5214435550303?text=Hola%20Neko%20Ramen%2C%20me%20anoto%20a%20la%20barra'
    }
  },
  {
    id: 'mercado-azotea',
    nombre: 'Mercado Social Azotea',
    barrio: 'Centro Sur',
    descripcion: 'Azotea compartida con estaciones de comida urbana, cerveza artesanal y mesas comunitarias.',
    precioEstimado: 'Cuenta promedio: 210 MXN por persona',
    horario: 'Jue-Dom 15:00-00:00',
    image: {
      src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80',
      alt: 'Estaciones de comida urbana en azotea iluminada'
    },
    tags: { grupo: 3, animado: 3, novedad: 2, economico: 2, rapido: 1 },
    destacados: [
      'Once proyectos de cocina rotativa',
      'Música en vivo jueves a sábado',
      'Vista panorámica a Catedral'
    ],
    enlaces: {
      maps: 'https://maps.google.com/?q=Mercado+Social+Azotea+Morelia',
      whatsapp: 'https://wa.me/5214435550404?text=Hola%20Mercado%20Azotea%2C%20somos%20un%20grupo'
    }
  },
  {
    id: 'parrilla-bosque',
    nombre: 'Parrilla del Bosque',
    barrio: 'Tres Marías',
    descripcion: 'Asador campestre con cortes añejados, barra de ensaladas y terraza rodeada de pinos.',
    precioEstimado: 'Cuenta promedio: 380 MXN por persona',
    horario: 'Vie-Dom 13:00-23:00',
    image: {
      src: 'https://images.unsplash.com/photo-1553163147-622ab57e7c8e?auto=format&fit=crop&w=900&q=80',
      alt: 'Cortes de carne a la parrilla sobre tabla de madera'
    },
    tags: { seguro: 3, premium: 2, grupo: 2, estacionamiento: 3, comfort: 2, quedarse: 2 },
    destacados: [
      'Cortes dry-aged de 28 días',
      'Jardín para niñas y niños con monitoreo',
      'Valet parking incluido'
    ],
    enlaces: {
      maps: 'https://maps.google.com/?q=Parrilla+del+Bosque+Morelia',
      whatsapp: 'https://wa.me/5214435550505?text=Hola%20Parrilla%20del%20Bosque%2C%20quiero%20reservar'
    }
  },
  {
    id: 'ruta-72',
    nombre: 'Taquería Ruta 72',
    barrio: 'Chapultepec Sur',
    descripcion: 'Taquería nocturna con trompo al carbón, salsas de temporada y servicio exprés.',
    precioEstimado: 'Cuenta promedio: 120 MXN por persona',
    horario: 'Todos los días 19:00-03:00',
    image: {
      src: 'https://images.unsplash.com/photo-1601924582971-b564cfe08c07?auto=format&fit=crop&w=900&q=80',
      alt: 'Tacos al pastor servidos con piña fresca'
    },
    tags: { economico: 3, rapido: 3, grupo: 2, animado: 2, comfort: 1 },
    destacados: [
      'Pastor al cuádruple sellado',
      'Salsa de piña rostizada con chile manzano',
      'Auto-servicio de bebidas y refill gratuito'
    ],
    enlaces: {
      maps: 'https://maps.google.com/?q=Taqueria+Ruta+72+Morelia',
      whatsapp: 'https://wa.me/5214435550606?text=Hola%20Ruta%2072%2C%20voy%20de%20camino'
    }
  },
  {
    id: 'cafe-luz',
    nombre: 'Café Luz y Sombra',
    barrio: 'Centro Histórico',
    descripcion: 'Café de especialidad y vinito natural en casona del siglo XIX con rincones íntimos.',
    precioEstimado: 'Cuenta promedio: 230 MXN por persona',
    horario: 'Mar-Dom 09:00-22:00',
    image: {
      src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
      alt: 'Cafetería acogedora con luz cálida y libros'
    },
    tags: { pareja: 3, tranquilo: 3, quedarse: 3, premium: 2, novedad: 1 },
    destacados: [
      'Carta de cafés de origen michoacano',
      'Brunch de temporada con productos locales',
      'Sala de lectura y vinilos'
    ],
    enlaces: {
      maps: 'https://maps.google.com/?q=Cafe+Luz+y+Sombra+Morelia',
      whatsapp: 'https://wa.me/5214435550707?text=Hola%20Café%20Luz%2C%20quiero%20una%20mesa'
    }
  },
  {
    id: 'ola-verde',
    nombre: 'Mariscos La Ola Verde',
    barrio: 'Camelinas',
    descripcion: 'Marisquería fresca con ceviches creativos, barra de aguachiles y opciones saludables.',
    precioEstimado: 'Cuenta promedio: 290 MXN por persona',
    horario: 'Mié-Lun 12:00-21:00',
    image: {
      src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
      alt: 'Aguachile verde con camarones y rodajas de limón'
    },
    tags: { novedad: 2, grupo: 2, premium: 2, tranquilo: 1, estacionamiento: 2, curioso: 1 },
    destacados: [
      'Aguachile verde con cítricos locales',
      'Opciones sin gluten y veg-friendly',
      'Servicio de valet y zona techada'
    ],
    enlaces: {
      maps: 'https://maps.google.com/?q=Mariscos+La+Ola+Verde+Morelia',
      whatsapp: 'https://wa.me/5214435550808?text=Hola%20Ola%20Verde%2C%20necesito%20mesa'
    }
  }
];

/* ---------- Application ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const ui = {
    introScreen: document.getElementById('intro-screen'),
    startButton: document.getElementById('start'),
    progressTrack: document.querySelector('.progress-track'),
    progressThumb: document.getElementById('progress-thumb'),
    legendStep: document.getElementById('legend-step'),
    legendTag: document.getElementById('legend-tag'),
    questionCard: document.getElementById('question-card'),
    questionPrompt: document.getElementById('question-prompt'),
    questionEyebrow: document.getElementById('question-eyebrow'),
    options: document.getElementById('options'),
    results: document.getElementById('results'),
    restart: document.getElementById('restart'),
    progressShell: document.querySelector('.progress-shell'),
    howItWorks: document.querySelector('.how-it-works'),
    microProof: document.getElementById('micro-proof'),
    microProofCopy: document.querySelector('.micro-proof-copy')
  };

  const state = {
    stepIndex: 0,
    responses: []
  };

  const microProof = {
    timer: null,
    index: 0,
    show() {
      if (ui.microProof) ui.microProof.classList.remove('hidden');
    },
    hide() {
      if (ui.microProof) ui.microProof.classList.add('hidden');
    },
    setMessage(message) {
      if (ui.microProofCopy) ui.microProofCopy.textContent = message;
    },
    start() {
      if (!ui.microProof || !ui.microProofCopy || !MICRO_PROOF_MESSAGES.length) return;
      this.stop();
      this.index = 0;
      this.setMessage(MICRO_PROOF_MESSAGES[this.index]);
      this.show();
      if (MICRO_PROOF_MESSAGES.length > 1) {
        this.timer = window.setInterval(() => {
          this.advance();
        }, 6000);
      }
    },
    advance() {
      if (!ui.microProofCopy || MICRO_PROOF_MESSAGES.length <= 1) return;
      this.index = (this.index + 1) % MICRO_PROOF_MESSAGES.length;
      this.setMessage(MICRO_PROOF_MESSAGES[this.index]);
    },
    stop(hide = false) {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      if (hide) {
        this.hide();
      }
    }
  };

  const renderers = {
    question(question) {
      ui.questionPrompt.textContent = question.prompt;
      ui.questionEyebrow.textContent = question.tag;
      ui.legendTag.textContent = question.tag;
      ui.options.innerHTML = '';

      question.options.forEach((option) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.type = 'button';
        const mediaHtml = option.image
          ? `<div class="option-media"><img src="${option.image}" alt="${option.imageAlt || ''}" loading="lazy"></div>`
          : '';
        button.innerHTML = `
          ${mediaHtml}
          <div class="option-copy">
            <strong>${option.label}</strong>
            <span>${option.helper}</span>
          </div>
          <div class="option-chevron">></div>
        `.trim();
        button.addEventListener('click', (e) => actions.handleAnswer(option, e.currentTarget));
        ui.options.appendChild(button);
      });
    },

    results(matches) {
      if (!matches.length) {
        ui.results.innerHTML = '<div class="empty-results">No encontramos coincidencias claras. Ajusta tus respuestas y vuelve a intentar.</div>';
      } else {
        const cards = matches.slice(0, 3).map((venue, index) => {
          const highlights = Array.isArray(venue.destacados) && venue.destacados.length
            ? `<ul class="highlights">${venue.destacados.map((item) => `<li>${item}</li>`).join('')}</ul>`
            : '';
          const cover = venue.image
            ? `<figure class="venue-media"><img src="${venue.image.src}" alt="${venue.image.alt}" loading="lazy"></figure>`
            : '<div class="venue-media fallback"></div>';

          return `
            <article class="venue-card">
              ${cover}
              <div class="venue-info">
                <div class="venue-head">
                  <div class="venue-rank">#${index + 1} - Match ideal</div>
                  <h3>${venue.nombre}</h3>
                  <p class="venue-meta">${venue.barrio} - ${venue.horario}</p>
                </div>
                <p class="venue-desc">${venue.descripcion}</p>
                <p class="venue-meta">${venue.precioEstimado}</p>
                ${highlights}
                <div class="cta-group">
                  <a class="cta-primary" href="${venue.enlaces.maps}" target="_blank" rel="noopener">Abrir en Maps</a>
                  <a class="cta-secondary" href="${venue.enlaces.whatsapp}" target="_blank" rel="noopener">Reservar por WhatsApp</a>
                </div>
              </div>
            </article>
          `;
        }).join('');

        ui.results.innerHTML = `<div class="venue-list">${cards}</div>`;
        const images = ui.results.querySelectorAll('.venue-media img');
        images.forEach((img) => {
          img.addEventListener('error', () => {
            const media = img.closest('.venue-media');
            if (media) media.classList.add('fallback');
            img.remove();
          }, { once: true });
        });
      }
    }
  };

  const calculations = {
    updateProgress() {
      const percent = Math.min((state.stepIndex / QUESTIONNAIRE.length) * 100, 100);
      ui.progressThumb.style.width = `${percent}%`;
      ui.progressTrack.setAttribute('aria-valuenow', percent.toFixed(0));
      const humanStep = Math.min(state.stepIndex + 1, QUESTIONNAIRE.length);
      ui.legendStep.textContent = `Paso ${humanStep} de ${QUESTIONNAIRE.length}`;
      // Micro-interaction: pulse progress and flip legend text
      ui.progressThumb.classList.remove('pulse');
      void ui.progressThumb.offsetWidth; // reflow to restart animation
      ui.progressThumb.classList.add('pulse');
      ui.legendStep.classList.remove('flip');
      void ui.legendStep.offsetWidth;
      ui.legendStep.classList.add('flip');
    },

    selectionsTotals() {
      return state.responses.reduce((totals, response) => {
        response.option.tags.forEach((tag) => {
          const weight = TAG_WEIGHTS[tag] || 1;
          totals[tag] = (totals[tag] || 0) + weight;
        });
        return totals;
      }, {});
    },

    rankedVenues(totals) {
      return VENUES
        .map((venue) => {
          let score = 0;
          const reasons = [];

          for (const [tag, value] of Object.entries(totals)) {
            const venueWeight = venue.tags[tag];
            if (!venueWeight) continue;
            const contribution = value * venueWeight;
            score += contribution;
            reasons.push({ label: TAG_LABELS[tag] || tag, contribution });
          }

          if (!score) return null;
          reasons.sort((a, b) => b.contribution - a.contribution);
          return { ...venue, score, reasons: reasons.slice(0, 3) };
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score);
    },
  };

  const actions = {
    begin() {
      if (!QUESTIONNAIRE.length) return;

      state.stepIndex = 0;
      state.responses = [];

      if (ui.introScreen) {
        ui.introScreen.classList.add('hidden');
      }

      ui.results.classList.add('hidden');
      ui.results.classList.remove('entering');
      ui.restart.classList.add('hidden');

      ui.progressShell.classList.remove('hidden');
      if (ui.howItWorks) ui.howItWorks.classList.add('hidden');
      ui.questionCard.classList.remove('hidden', 'leaving', 'entering');

      renderers.question(QUESTIONNAIRE[state.stepIndex]);
      calculations.updateProgress();
      microProof.start();

      ui.questionCard.classList.add('entering');
      setTimeout(() => ui.questionCard.classList.remove('entering'), 220);

      const firstOption = ui.options.querySelector('.option-btn');
      if (firstOption) firstOption.focus();
    },

    handleAnswer(option, btnEl) {
      const question = QUESTIONNAIRE[state.stepIndex];
      state.responses.push({ questionId: question.id, option });
      microProof.advance();

      // Selection feedback on the pressed option
      if (btnEl) {
        try {
          btnEl.classList.add('selected');
          const chev = btnEl.querySelector('.option-chevron');
          if (chev) chev.textContent = '>';
        } catch (_) {}
      }

      // Animate current card out, then advance
      ui.questionCard.classList.add('leaving');

      const goNext = () => {
        if (state.stepIndex < QUESTIONNAIRE.length - 1) {
          state.stepIndex += 1;
          renderers.question(QUESTIONNAIRE[state.stepIndex]);
          calculations.updateProgress();
          ui.questionCard.classList.remove('leaving');
          ui.questionCard.classList.add('entering');
          setTimeout(() => ui.questionCard.classList.remove('entering'), 220);
        } else {
          state.stepIndex += 1;
          calculations.updateProgress();
          actions.showResults();
        }
      };

      setTimeout(goNext, 160);
    },

    showResults() {
      if (ui.introScreen) {
        ui.introScreen.classList.add('hidden');
      }
      const totals = calculations.selectionsTotals();
      const matches = calculations.rankedVenues(totals);

      ui.questionCard.classList.add('hidden');
      ui.progressShell.classList.add('hidden');
      if (ui.howItWorks) ui.howItWorks.classList.add('hidden');
      microProof.stop(true);
      renderers.results(matches);
      ui.results.classList.remove('hidden');
      ui.results.classList.add('entering');
      setTimeout(() => ui.results.classList.remove('entering'), 260);
      ui.restart.classList.remove('hidden');
    },

    reset() {
      state.stepIndex = 0;
      state.responses = [];
      microProof.stop(true);
      ui.results.classList.add('hidden');
      ui.results.classList.remove('entering');
      ui.results.innerHTML = '';
      ui.restart.classList.add('hidden');

      ui.questionCard.classList.add('hidden');
      ui.questionCard.classList.remove('leaving', 'entering');

      ui.progressShell.classList.add('hidden');
      ui.progressThumb.style.width = '0%';
      ui.progressTrack.setAttribute('aria-valuenow', '0');

      if (QUESTIONNAIRE.length) {
        ui.legendStep.textContent = `Paso 1 de ${QUESTIONNAIRE.length}`;
        ui.legendTag.textContent = QUESTIONNAIRE[0].tag;
        ui.questionEyebrow.textContent = QUESTIONNAIRE[0].tag;
      } else {
        ui.legendStep.textContent = 'Sin pasos disponibles';
        ui.legendTag.textContent = '';
        ui.questionEyebrow.textContent = '';
      }

      ui.questionPrompt.textContent = 'Tu cuestionario inicia cuando presiones Comenzar cuestionario.';
      ui.options.innerHTML = '';

      if (ui.introScreen) {
        ui.introScreen.classList.remove('hidden');
      }
      if (ui.howItWorks) {
        ui.howItWorks.classList.remove('hidden');
      }

      if (ui.startButton) {
        ui.startButton.focus();
      }
    }
  };

  if (ui.startButton) {
    ui.startButton.addEventListener('click', actions.begin);
  }
  ui.restart.addEventListener('click', actions.reset);

  // Keyboard shortcuts: 1..9 selects option; Up/Down: move focus
  document.addEventListener('keydown', (e) => {
    const buttons = Array.from(ui.options.querySelectorAll('.option-btn'));
    if (!buttons.length) return;

    if (/^[1-9]$/.test(e.key)) {
      const idx = parseInt(e.key, 10) - 1;
      if (buttons[idx]) {
        buttons[idx].click();
        e.preventDefault();
      }
      return;
    }

    const currentIndex = buttons.findIndex((b) => b === document.activeElement);
    if (e.key === 'ArrowDown') {
      const next = buttons[(currentIndex + 1) % buttons.length];
      next.focus();
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      const prev = buttons[(currentIndex - 1 + buttons.length) % buttons.length];
      prev.focus();
      e.preventDefault();
    }
  });

  actions.reset();
});
