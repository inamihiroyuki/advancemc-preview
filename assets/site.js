const heroSlides = document.querySelectorAll(".hero-slide");
let heroSlideIndex = 0;

if (heroSlides.length > 1) {
  setInterval(() => {
    heroSlides[heroSlideIndex].classList.remove("is-active");
    heroSlideIndex = (heroSlideIndex + 1) % heroSlides.length;
    heroSlides[heroSlideIndex].classList.add("is-active");
  }, 6000);
}

const partnershipButtons = document.querySelectorAll(".partnership-card[aria-controls]");
const partnershipMobileQuery = window.matchMedia("(max-width: 920px)");

const placePartnershipPanel = (button, panel) => {
  const item = button.closest(".partnership-item");
  const container = button.closest(".partnership-link");

  if (!item || !container) {
    return;
  }

  if (partnershipMobileQuery.matches) {
    item.insertAdjacentElement("afterend", panel);
    return;
  }

  container.appendChild(panel);
};

const closePartnershipPanel = (button, panel) => {
  button.setAttribute("aria-expanded", "false");
  panel.style.maxHeight = `${panel.scrollHeight}px`;

  requestAnimationFrame(() => {
    panel.classList.remove("is-open");
    panel.style.maxHeight = "0px";
  });
};

const openPartnershipPanel = (button, panel) => {
  placePartnershipPanel(button, panel);
  button.setAttribute("aria-expanded", "true");
  panel.hidden = false;
  panel.style.maxHeight = "0px";
  panel.classList.add("is-open");

  requestAnimationFrame(() => {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  });
};

partnershipButtons.forEach((button) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));

  if (!panel) {
    return;
  }

  button.addEventListener("click", () => {
    const willOpen = button.getAttribute("aria-expanded") !== "true";

    if (willOpen) {
      partnershipButtons.forEach((otherButton) => {
        if (otherButton === button || otherButton.getAttribute("aria-expanded") !== "true") {
          return;
        }

        const otherPanel = document.getElementById(otherButton.getAttribute("aria-controls"));

        if (otherPanel) {
          closePartnershipPanel(otherButton, otherPanel);
        }
      });

      openPartnershipPanel(button, panel);
      return;
    }

    closePartnershipPanel(button, panel);
  });

  panel.addEventListener("transitionend", (event) => {
    if (event.propertyName !== "max-height") {
      return;
    }

    const isOpen = button.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      panel.style.maxHeight = "none";
      return;
    }

    panel.hidden = true;
  });
});

const repositionOpenPartnershipPanel = () => {
  const openButton = [...partnershipButtons].find((button) => button.getAttribute("aria-expanded") === "true");

  if (!openButton) {
    return;
  }

  const panel = document.getElementById(openButton.getAttribute("aria-controls"));

  if (!panel) {
    return;
  }

  placePartnershipPanel(openButton, panel);
};

partnershipMobileQuery.addEventListener("change", repositionOpenPartnershipPanel);
