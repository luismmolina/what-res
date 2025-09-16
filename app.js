/* ---------- Data configuration ---------- */
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
        tags: ['novedad', 'curioso']
      },
      {
        id: 'seguro',
        label: 'Quiero algo que ya sé que funciona',
        helper: 'Favoritos probados, cero sorpresas',
        tags: ['seguro', 'comfort']
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
        tags: ['pareja', 'tranquilo']
      },
      {
        id: 'grupo',
        label: 'Con familia o amigos',
        helper: 'Necesitamos mesa amplia',
        tags: ['grupo']
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
        tags: ['tranquilo', 'quedarse']
      },
      {
        id: 'animado',
        label: 'Con energía y música',
        helper: 'Ambiente vivo, playlist arriba',
        tags: ['animado']
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
        tags: ['economico']
      },
      {
        id: 'premium',
        label: 'Me doy un gusto',
        helper: 'Estoy listo para invertir más',
        tags: ['premium']
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
        tags: ['comfort', 'seguro']
      },
      {
        id: 'creativo',
        label: 'Algo diferente o creativo',
        helper: 'Sushi, ramen, fusiones',
        tags: ['novedad', 'curioso']
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
        tags: ['rapido', 'estacionamiento']
      },
      {
        id: 'relajado',
        label: 'Quedarme un buen rato',
        helper: 'Sillones, sobremesa larga',
        tags: ['quedarse']
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
    progressShell: document.querySelector('.progress-shell')
  };

  const state = {
    stepIndex: 0,
    responses: []
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
        button.innerHTML = `<div><strong>${option.label}</strong><span>${option.helper}</span></div><div class="option-chevron">›</div>`;
        button.addEventListener('click', () => actions.handleAnswer(option));
        ui.options.appendChild(button);
      });
    },

    results(matches, chips) {
      const heroChips = chips.length
        ? `<div class="chip-row">${chips.map((chip) => `<span class="chip">${chip}</span>`).join('')}</div>`
        : '';

      let html = `
        <div class="result-hero">
          <p class="eyebrow">Tu ruta personalizada</p>
          <h2>Listo para salir</h2>
          <p>Te recomendamos espacios abiertos, con la vibra que pediste y pasos claros para llegar sin estrés.</p>
          ${heroChips}
        </div>
      `;

      if (!matches.length) {
        html += '<p>No encontramos coincidencias claras. Ajusta tus respuestas y vuelve a intentar.</p>';
      } else {
        html += '<div class="venue-list">';
        matches.slice(0, 3).forEach((venue, index) => {
          const reasonList = venue.reasons
            .map((reason) => `<li>${reason.label}</li>`)
            .join('');

          const highlights = venue.destacados
            .map((item) => `<li>${item}</li>`)
            .join('');

          html += `
            <article class="venue-card">
              <div class="venue-rank">#${index + 1} · Match ideal</div>
              <h3>${venue.nombre}</h3>
              <p class="venue-meta">${venue.barrio} · ${venue.horario}</p>
              <p class="venue-desc">${venue.descripcion}</p>
              <p class="venue-meta">${venue.precioEstimado}</p>
              ${reasonList ? `<ul class="reasons">${reasonList}</ul>` : ''}
              ${highlights ? `<ul class="highlights">${highlights}</ul>` : ''}
              <div class="cta-group">
                <a class="cta-primary" href="${venue.enlaces.maps}" target="_blank" rel="noopener">Abrir en Maps</a>
                <a class="cta-secondary" href="${venue.enlaces.whatsapp}" target="_blank" rel="noopener">Reservar por WhatsApp</a>
              </div>
            </article>
          `;
        });
        html += '</div>';
      }

      ui.results.innerHTML = html;
    }
  };

  const calculations = {
    updateProgress() {
      const percent = Math.min((state.stepIndex / QUESTIONNAIRE.length) * 100, 100);
      ui.progressThumb.style.width = `${percent}%`;
      ui.progressTrack.setAttribute('aria-valuenow', percent.toFixed(0));
      const humanStep = Math.min(state.stepIndex + 1, QUESTIONNAIRE.length);
      ui.legendStep.textContent = `Paso ${humanStep} de ${QUESTIONNAIRE.length}`;
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

    topChips(totals) {
      return Object.entries(totals)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([tag]) => TAG_LABELS[tag] || tag);
    }
  };

  const actions = {
    handleAnswer(option) {
      const question = QUESTIONNAIRE[state.stepIndex];
      state.responses.push({ questionId: question.id, option });

      if (state.stepIndex < QUESTIONNAIRE.length - 1) {
        state.stepIndex += 1;
        renderers.question(QUESTIONNAIRE[state.stepIndex]);
        calculations.updateProgress();
      } else {
        state.stepIndex += 1;
        calculations.updateProgress();
        actions.showResults();
      }
    },

    showResults() {
      const totals = calculations.selectionsTotals();
      const chips = calculations.topChips(totals);
      const matches = calculations.rankedVenues(totals);

      ui.questionCard.classList.add('hidden');
      ui.progressShell.classList.add('hidden');
      renderers.results(matches, chips);
      ui.results.classList.remove('hidden');
      ui.restart.classList.remove('hidden');
    },

    reset() {
      state.stepIndex = 0;
      state.responses = [];
      ui.results.classList.add('hidden');
      ui.restart.classList.add('hidden');
      ui.questionCard.classList.remove('hidden');
      ui.progressShell.classList.remove('hidden');
      renderers.question(QUESTIONNAIRE[state.stepIndex]);
      calculations.updateProgress();
    }
  };

  ui.restart.addEventListener('click', actions.reset);

  renderers.question(QUESTIONNAIRE[state.stepIndex]);
  calculations.updateProgress();
});
