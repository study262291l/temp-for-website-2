const raceData = {
  "sr": {
    title: "Soul reapers",
    bannerImage: "assets/ichigoBanner.png",
    accentColor: "var(--accentRed)",
    welcomeText: `In Type Soul, Soul Reapers (Shinigami) are one of the primary playable races <i>relying on spiritual pressure and swordplay</i>. Players begin as Academy Students and advance by refining their combat skills, flash steps, and Zanpakuto mastery. <i>A Soul Reaper's power spikes significantly upon unlocking Shikai,</i> achieved by meditating and defeating their inner spirit to gain elemental powers. <i>True mastery culminates in unlocking Bankai,</i> granting immense area-of-effect damage, distinctive weapon forms, and devastating ultimate abilities. Balancing high-speed melee strikes, Kido spells, and versatile skill trees, Soul Reapers excel as <i>versatile, high-mobility combatants</i> in both competitive PvP and faction battles.`,
    registryTitle: "shikai<br>registry",
    registryQuote: "Every reiatsu takes a different shape once it's set free. Some crystallize into ice, some into flame and some refuse to take a shape at all.",
    newsQuote: "Type soul's soul reaper faction.",
    registryItems: [
      { name: "Snow", class: "registryMythicalSnow", desc: "Freezes enemies upon contact, reducing movement speed and trapping opponents in localized blizzards." },
      { name: "Blood", class: "registryLegendary", desc: "Uses health to siphon enemy life energy and deal high damage over time through blood projectiles." },
      { name: "Ice", class: "registryLegendary", desc: "Creates massive glacial pillars and AoE freezes to pin down entire groups during combat." },
      { name: "Fire", class: "registryRare", desc: "Applies heavy burning damage over time while inflicting massive area-of-effect blast explosions." },
      { name: "Ink", class: "registryLegendary", desc: "Seals enemy abilities temporary and renders target UI invisible with blinding ink splatters." },
      { name: "Kyōka Suigetsu", class: "registryMythicalAizen", desc: "Creates illusions, messing up enemy lock-on targets and inverting their directional controls." },
      { name: "Lightning", class: "", desc: "Delivers rapid movement bursts and chain-lightning stun attacks across multiple close targets." },
      { name: "Benihime", class: "registryMythicalBenihime", desc: "Fires red crimson energy waves and defensive shields that absorb incoming damage." },
      { name: "Wind", class: "", desc: "Launches high-velocity wind blasts that knock back foes and extend aerial juggling combos." },
      { name: "Shinso", class: "registryRare", desc: "Ultra-fast long-range thrusts that catch enemies off guard from safe distances." }
    ]
  },
  "arrancars": {
    title: "Arrancars",
    bannerImage: "assets/ulquiorraBanner.png",
    accentColor: "var(--arrancar)",
    welcomeText: `Arrancars are Hollows that have removed their masks to obtain Shinigami-like powers. <i>Utilizing Cero blasts and Hierro defense</i>, Arrancars start as Fishbone Hollows and evolve through Menos, Adjuchas, and Vasto Lorde stages. <i>Unlocking Resurrección unlocks their true hollow form</i>, drastically enhancing physical strength, speed, and unique animalistic traits. <i>Segunda Etapa provides an unmatched secondary transformation</i> for Vasto Lorde variants, offering immense oppressive power in extended combat engagements.`,
    registryTitle: "resurrección<br>registry",
    registryQuote: "Despair takes form when a Hollow tears away its mask. Pure instincts distilled into destructive power.",
    newsQuote: "Type soul's arrancar faction.",
    registryItems: [
      { name: "Stark", class: "registryLegendary", desc: "Grants hyper-speed claw attacks and ferocious dash thrusts that tear through block guards." },
      { name: "Vampire", class: "registryLegendaryVampire", desc: "Rains down destructive green spirit spears (Lanza del Relámpago) with massive explosion radiuses." },
      { name: "Slash", class: "", desc: "Sprouts multiple arms for relentless multi-blade flurry attacks that overwhelm defense." },
      { name: "Storm", class: "", desc: "Summons pack wolves made of spirit energy to chase targets down and detonate on hit." },
      { name: "Light", class: "registryMythicalLight", desc: "Drains life energy from targets on hit, restoring health during prolonged close-quarters brawls." },
      { name: "Pantera", class: "registryRare", desc: "Erupts magma blasts from shoulder ports to deal massive knockback and lingering fire damage." },
      { name: "Arrogante", class: "registryLegendary", desc: "Fires rapid-fire dual gun Cero streams from range to melt enemy hyper armor." },
      { name: "Snake", class: "registryMythicalSnake", desc: "Devours enemy attacks and converts absorbed damage into temporary temporary shields." }
    ]
  },
  "quincy": {
    title: "Quincy",
    bannerImage: "assets/yhwachBanner.png",
    accentColor: "var(--accentBlue)",
    welcomeText: `The Quincy are human mediums capable of absorbing and manipulating Reishi from their environment. <i>Specializing in bow-play and defensive Blut techniques</i>, Quincy combatants fight with surgical precision from long range. <i>Unlocking Vollständig unleashes their full angelic wing form</i>, boosting projectile speed, flight mobility, and offensive Reishi weapons. <i>Blut Vene and Blut Arterie management</i> allows Quincy to switch seamlessly between impenetrable defense and devastating ranged damage.`,
    registryTitle: "vollständig<br>registry",
    registryQuote: "Reishi bends to the bow of the pure-blooded. Destruction served with holy precision.",
    newsQuote: "Type soul's quincy faction.",
    registryItems: [
      { name: "Death Dealing", class: "registryMythicalDeathDealing", desc: "Grows larger and stronger as damage is taken, converting lethal hits into stat buffs." },
      { name: "Miracle", class: "registryLegendary", desc: "Redirects bad luck and received damage back onto the attacker via the Shield of Governance." },
      { name: "Heat", class: "", desc: "Hardens the body to completely negate incoming stun effects and physical slash damage." },
      { name: "Balance", class: "registryMythicalBalance", desc: "Shoots fiery Searing Arrows that burn through enemy posture and ignite surroundings." },
      { name: "Visionary", class: "registryLegendary", desc: "Manipulates air currents to deflect incoming arrows and create sudden displacement gusts." },
      { name: "Iron", class: "", desc: "Inflicts paranoia effects on enemies, blurring their vision and slowing reaction speed." },
      { name: "Glutton", class: "registryLegendary", desc: "Extends Reishi mouths to swallow enemy projectiles and fire them back with boosted power." },
      { name: "Fear", class: "registryRare", desc: "Fear." }
    ]
  },
  "fullbringers": {
    title: "Fullbringers",
    bannerImage: "assets/tsukishimaBanner.png",
    accentColor: "var(--fullbringer)",
    welcomeText: `Fullbringers are spiritual humans who possess Hollow energy from birth, allowing them to <i>manipulate the soul of physical matter</i>. By focusing on an object of personal affection, Fullbringers manifest unique specialized weapons with distinct passive traits. <i>Fullbringer progression culminates in complete item transformation</i>, providing versatile melee capabilities, high-speed movement maneuvers, and dynamic utility that catches opponents completely unprepared.`,
    registryTitle: "fullbring<br>registry",
    registryQuote: "Every object holds a memory. In the hands of a Fullbringer, that memory becomes a weapon.",
    newsQuote: "Type soul's fullbringer faction.",
    registryItems: [
      { name: "Book of End", class: "registryMythicalBookOfTheEnd", desc: "Inserts the user into the target's past, learning their weaknesses and bypassing block defenses." },
      { name: "Time Tells No Lies", class: "registryLegendary", desc: "Increases attack power and movement speed the dirtier and longer the combat goes on." },
      { name: "Devil's Arm", class: "", desc: "Traps opponents inside a digital pocket dimension with customizable combat rules." },
      { name: "Chess", class: "registryMythicalChess", desc: "Shrinks targets and traps them inside small containers to disable them temporarily." },
      { name: "Dollhouse", class: "registryRare", desc: "Transforms a small pendant into a massive longsword with high-damage cleave attacks." },
      { name: "Zangetsu", class: "registryLegendary", desc: "Imposes strict timer conditions on combatants; failing conditions causes heavy damage." }
    ]
  }
};

// ==========================================
// DOM SELECTION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const raceButtons = document.querySelectorAll(".developerBannerButtons a");
  const heroLeft = document.querySelector(".heroLeft");

  // DOM Elements to Update
  const root = document.documentElement; 
  const characterImg = document.querySelector('.bannerCharacterImage .characterRender');
  const titleEl = document.querySelector(".heroLeftTitle");
  const welcomeTextEl = document.querySelector(".heroLeftWelcomeText");
  const regTitleEl = document.querySelector(".registryTitle");
  const regQuoteEl = document.querySelector(".registryQuote");
  const newsQuoteEl = document.querySelector(".heroLeftNewsQuote");
  const registryGrid = document.querySelector(".registryGrid");

  // 1. Race Selection Handler
  raceButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // Active state button highlight
      raceButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Normalize race key from button text
      const rawText = btn.textContent.trim().toLowerCase();
      let raceKey = "sr";
      if (rawText.includes("arrancar")) raceKey = "arrancars";
      if (rawText.includes("quincy")) raceKey = "quincy";
      if (rawText.includes("fullbringer")) raceKey = "fullbringers";

      const data = raceData[raceKey];
      if (!data) return;

      // Smooth Fade Animation
      heroLeft.style.opacity = "0";
      heroLeft.style.transition = "opacity 0.25s ease";

      characterImg.style.opacity = "0";
      characterImg.style.transition = "opacity 0.25s ease";

      setTimeout(() => {
        // Update Left Hero Content
        if (root) root.style.setProperty("--currentAccent", data.accentColor)
        if (characterImg) characterImg.src = data.bannerImage;
        if (titleEl) titleEl.textContent = data.title;
        if (welcomeTextEl) welcomeTextEl.innerHTML = data.welcomeText;
        if (regTitleEl) regTitleEl.innerHTML = data.registryTitle;
        if (regQuoteEl) regQuoteEl.textContent = data.registryQuote;
        if (newsQuoteEl) newsQuoteEl.textContent = data.newsQuote;

        // Rebuild Registry Chips
        buildRegistryGrid(data.registryItems, registryGrid);

        // Fade Back In
        heroLeft.style.opacity = "1";
        characterImg.style.opacity = "1";
      }, 250);
    });
  });

  // Helper function to create registry chips and set up Accordion behavior
  function buildRegistryGrid(items, container) {
    if (!container) return;
    container.innerHTML = "";

    items.forEach((item) => {
      // Create Outer Wrapper
      const wrapper = document.createElement("div");
      wrapper.className = "registryItemWrapper";

      // Create Chip
      const chip = document.createElement("div");
      chip.className = `registryChip ${item.class}`.trim();
      chip.innerHTML = `
        <span class="registryChipName">${item.name}</span>
        <span class="registryChipDots"></span>
        <span class="registryChipPlus">＋</span>
      `;

      // Create Accordion Dropdown Details Box
      const dropdown = document.createElement("div");
      dropdown.className = "registryDropdown";
      dropdown.innerHTML = `<p>${item.desc}</p>`;

      // Click event for dropdown
      chip.addEventListener("click", () => {
        const isOpen = dropdown.classList.contains("active");

        // Close all existing open dropdowns in registry
        document.querySelectorAll(".registryDropdown").forEach((d) => d.classList.remove("active"));
        document.querySelectorAll(".registryChipPlus").forEach((p) => (p.textContent = "＋"));

        if (!isOpen) {
          dropdown.classList.contains("active");
          dropdown.classList.add("active");
          chip.querySelector(".registryChipPlus").textContent = "－";
        }
      });

      wrapper.appendChild(chip);
      wrapper.appendChild(dropdown);
      container.appendChild(wrapper);
    });
  }

  // Initial setup for default Soul Reapers grid on page load
  if (registryGrid && raceData["sr"]) {
    buildRegistryGrid(raceData["sr"].registryItems, registryGrid);
  }
});