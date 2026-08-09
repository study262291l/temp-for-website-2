const raceData = {
      sr: {
        title: "SOUL REAPER",
        subtitle: "SHIKAI & BANKAI BUILDS",
        color: "var(--accentRed)",
        builds: [
          { number: "01", name: "Kendo / Speed Hybrid", detail: "50 Kendo • 15 Speed", stats: "High Skill" },
          { number: "02", name: "Hakuda Shunpo", detail: "40 Hakuda • 25 Speed", stats: "Close Ranged" },
          // { number: "03", name: "Full Kendo Ink", detail: "65 Kendo • Ink Shikai", stats: "Burst Damage" },
          { number: "03", name: "Soul Reaper Kido / Speed Hybrid", detail: "45 Kido • 20 Speed", stats: "Ranged" }
        ]
      },
      quincy: {
        title: "QUINCY",
        subtitle: "VOLLSTÄNDIG BUILDS",
        color: "var(--accentBlue)",
        builds: [
          { number: "01", name: "Quincy Kido / Speed Hybrid", detail: "50 Kido • 15 Speed", stats: "Ranged" },
          { number: "02", name: "Full Speed Death Dealing Burst", detail: "65 Speed", stats: "Cheese" },
          { number: "03", name: "Speed / Kendo Hybrid", detail: "50 Speed • 15 Kendo", stats: "Fast Combos" }
        ]
      },
      arrancar: {
        title: "ARRANCAR",
        subtitle: "RESURRECCIÓN BUILDS",
        color: "var(--arrancar)",
        builds: [
          { number: "01", name: "Arrancar Kido Hakuda", detail: "30 Hakuda • 35 Kido", stats: "No Skill Burst" },
          { number: "02", name: "Speed / Kendo Kybrid", detail: "45 Speed • 20 Kendo", stats: "Fast Combos" },
          { number: "03", name: "Hakuda / Speed Hybrid", detail: "50 Hakuda • 15 Speed", stats: "Aggressive Combos" }
        ]
      },
      fullbringer: {
        title: "FULLBRINGER",
        subtitle: "FULLBRINGER BUILDS",
        color: "var(--fullbringer)",
        builds: [
          { number: "01", name: "Cheese", detail: "65 Speed", stats: "Cheese" },
          { number: "02", name: "Cheese2", detail: "65 Speed • 65 Speed", stats: "Cheese2" }
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