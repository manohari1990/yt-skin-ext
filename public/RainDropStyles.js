const EFFECT_ID = "youtube-skin-background-effect";
const EFFECT_STYLE_ID = "youtube-skin-effect-styles";
function createRainEffect() {
  removeBackgroundEffect();
  addRainEffectStyles();

  const container = document.createElement("div");
  container.id = EFFECT_ID;

  const dropletCount = 55;

  for (let i = 0; i < dropletCount; i++) {
    const droplet = document.createElement("span");

    droplet.className = "youtube-skin-rain-drop";

    const size = Math.random() < 0.7
        ? 4 + Math.random() * 15
        : 18 + Math.random() * 35;
    const left = Math.random() * 100;
    const top = Math.random() * 100;

    const duration = 4 + Math.random() * 8;
    const delay = Math.random() * -8;

    const opacity = 0.25 + Math.random() * 0.5;
    const rotation = -15 + Math.random() * 30;
    const blur = Math.random() * 1.5;

    droplet.style.left = `${left}%`;
    droplet.style.top = `${top}%`;

    droplet.style.width = `${size}px`;
    droplet.style.height = `${size * 1.25}px`;

    droplet.style.opacity = opacity;

    droplet.style.animationDuration = `${duration}s`;
    droplet.style.animationDelay = `${delay}s`;

    droplet.style.transform = `rotate(${rotation}deg)`;
    droplet.style.filter = `blur(${blur}px)`;

    container.appendChild(droplet);
  }

  document.body.appendChild(container);
}

function addRainEffectStyles() {
  if (document.getElementById(EFFECT_STYLE_ID)) {
    return;
  }

  const style = document.createElement("style");
  style.id = EFFECT_STYLE_ID;

  style.textContent = `
    #${EFFECT_ID} {
      position: fixed;
      inset: 0;

      width: 100%;
      height: 100%;

      pointer-events: none;

      overflow: hidden;

      z-index: 9999;
    }

    .youtube-skin-rain-drop {
      position: absolute;

      border-radius: 50% 50% 55% 45%;

      background:
        radial-gradient(
          circle at 30% 25%,
          rgba(255, 255, 255, 0.95) 0%,
          rgba(255, 255, 255, 0.65) 8%,
          rgba(255, 255, 255, 0.12) 25%,
          rgba(255, 255, 255, 0.02) 55%,
          transparent 70%
        );

      border: 1px solid rgba(255, 255, 255, 0.35);

      box-shadow:
        inset 2px 2px 4px rgba(255, 255, 255, 0.35),
        inset -2px -3px 5px rgba(0, 0, 0, 0.15),
        0 0 4px rgba(255, 255, 255, 0.12);

      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(1px);

      opacity: 0.45;

      animation:
        youtube-skin-droplet-float
        linear infinite;
    }

    @keyframes youtube-skin-droplet-float {
      0% {
        transform:
          translate3d(0, 0, 0)
          rotate(0deg);
      }

      50% {
        transform:
          translate3d(8px, 10px, 0)
          rotate(3deg);
      }

      100% {
        transform:
          translate3d(-5px, 20px, 0)
          rotate(-3deg);
      }
    }
  `;

  document.head.appendChild(style);
}

function removeBackgroundEffect() {
  document.getElementById(EFFECT_ID)?.remove();
}

function randomizeRainDrops(container) {
  const drops = container.querySelectorAll(
    ".youtube-skin-rain-drop"
  );

  drops.forEach((drop) => {
    const left = Math.random() * 1000;
    const duration = 0.5 + Math.random() * 1;
    const delay = Math.random() * 2;
    const height = 100 + Math.random() * 25;
    const opacity = 0.15 + Math.random() * 0.4;

    drop.style.left = `${left}%`;
    drop.style.height = `${height}px`;
    drop.style.opacity = opacity;
    drop.style.animationDuration = `${duration}s`;
    drop.style.animationDelay = `${delay}s`;
  });
}