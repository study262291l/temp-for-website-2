const raceData = {
      sr: {
        title: "SOUL REAPER",
        subtitle: "SHIKAI & BANKAI BUILDS",
        color: "var(--accentRed)",
        builds: [
          { number: "01", name: "Kendo / Speed Hybrid", detail: "50 Kendo • 15 Speed", stats: "Shikai: Fire, Ice, Lightning" },
          { number: "02", name: "Hakuda Shunpo", detail: "40 Hakuda • 25 Speed", stats: "Shikai: Ink, Wind" },
          { number: "03", name: "Full Kendo", detail: "65 Kendo", stats: "Shikai: Snow, Shinso" },
          { number: "04", name: "Soul Reaper Kido / Speed Hybrid", detail: "45 Kido • 20 Speed", stats: "Shikai: Benihime, Kyōka Suigetsu, Wind" }
        ]
      },

      arrancar: {
        title: "ARRANCAR",
        subtitle: "RESURRECCIÓN BUILDS",
        color: "var(--arrancar)",
        builds: [
          { number: "01", name: "Arrancar Kido Hakuda", detail: "30 Hakuda • 35 Kido", stats: "Resurrección: Light, Snake, Pantera" },
          { number: "02", name: "Speed / Kendo Kybrid", detail: "45 Speed • 20 Kendo", stats: "Resurrección: Vampire, Storm, Slash, Stark" },
          { number: "03", name: "Hakuda / Speed Hybrid", detail: "50 Hakuda • 15 Speed", stats: "Resurrección: Pantera, Snake, Vampire" },
          { number: "04", name: "Arrancar Full Kido", detail: "65 Kido", stats: "Resurrección: Vampire, Stark, Light" }
        ]
      },

      quincy: {
        title: "QUINCY",
        subtitle: "VOLLSTÄNDIG BUILDS",
        color: "var(--accentBlue)",
        builds: [
          { number: "01", name: "Quincy Kido / Speed Hybrid", detail: "50 Kido • 15 Speed", stats: "Vollständig: Death Dealing, Miracle, Glutton, Visionary" },
          { number: "02", name: "Full Speed", detail: "65 Speed", stats: "Vollständig: Death Dealing, Heat, Iron, Fear" },
          { number: "03", name: "Speed / Kendo Hybrid", detail: "50 Speed • 15 Kendo", stats: "Vollständig: Miracle, Balance, Heat" },
          { number: "04", name: "Hakuda / Speed Hybrid", detail: "50 Hakuda • 15 Speed", stats: "Vollständig: Death Dealing, Iron, Heat, Fear" }
        ]
      },

      fullbringer: {
        title: "FULLBRINGER",
        subtitle: "FULLBRINGER BUILDS",
        color: "var(--fullbringer)",
        builds: [
          { number: "01", name: "Hakuda / Speed Hybrid", detail: "50 Hakuda • 15 Speed", stats: "Form: Zangetsu, Devil's Arm" },
          { number: "02", name: "Kido / Speed Hybrid", detail: "40 Kido • 25 Speed", stats: "Form: Book Of The End, Dollhouse, Chess" },
          { number: "03", name: "Full Speed", detail: "65 Speed", stats: "Form: Time Tells No Lies, Chess, Zangetsu" },
        ]
      }
    };

    function selectRace(raceKey, event) {
      const data = raceData[raceKey];
      const root = document.documentElement;
      
      // Update background gradient color
      root.style.setProperty('--current-accent', data.color);

      // Update Active Card Class
      const cards = document.querySelectorAll('.race-card');
      cards.forEach(card => card.classList.remove('active'));

      if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
      } else {
        cards[0].classList.add('active');
      }

      // Animate Titles
      const titleEl = document.getElementById('display-title');
      const subEl = document.getElementById('display-subtitle');
      
      titleEl.classList.remove('fade-in');
      subEl.classList.remove('fade-in');
      
      void titleEl.offsetWidth; // Trigger Reflow

      titleEl.innerText = data.title;
      subEl.innerText = data.subtitle;

      titleEl.classList.add('fade-in');
      subEl.classList.add('fade-in');

      const buildsContainer = document.getElementById('builds-list');
      buildsContainer.innerHTML = '';

      data.builds.forEach(build => {
        const item = document.createElement('div');
        item.className = 'build-card fade-in';
        item.innerHTML = `
          <div class="build-left">
            <span class="build-num">${build.number}</span>
            <div>
              <div class="build-name">${build.name}</div>
              <div class="build-detail">${build.detail}</div>
            </div>
          </div>
          <div class="build-right">
            <span class="build-tag">${build.stats}</span>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        `;
        buildsContainer.appendChild(item);
      });
    }

    window.addEventListener('DOMContentLoaded', () => {
      selectRace('sr');
    });
