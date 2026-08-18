/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu after clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navigationLinks.forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();

/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
  ".experience-card, " +
    ".platform-item, " +
    ".business-item, " +
    ".skill-column, " +
    ".availability-card, " +
    ".education-card, " +
    ".contact-item",
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  },
);

revealElements.forEach((element) => {
  element.classList.add("reveal");

  revealObserver.observe(element);
});

/* =========================================================
   SMOOTH ANCHOR SCROLLING
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear = document.querySelector(".footer-copy");

if (currentYear) {
  currentYear.textContent = `© ${new Date().getFullYear()} Yossif Raslan. All rights reserved.`;
}

/* =========================================================
   EXTERNAL LINKS
========================================================= */

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.setAttribute("rel", "noopener noreferrer");
});

/* =========================================================
   DISABLE REVEAL ANIMATION IF REDUCED MOTION IS ENABLED
========================================================= */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

if (prefersReducedMotion.matches) {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("revealed");
  });
}

/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log("Yossif Raslan — Aspiring Artist Manager Portfolio");

/* =========================================================
   HERO CARD ROTATION
========================================================= */

const heroCard = document.querySelector(".hero-card");
const heroCardNumber = document.querySelector("#heroCardNumber");
const heroCardText = document.querySelector("#heroCardText");

const heroMessages = [
  {
    number: "01",
    text: "Turning opportunities into long-term value for artists.",
  },
  {
    number: "02",
    text: "Building relationships that create new opportunities.",
  },
  {
    number: "03",
    text: "Protecting an artist's interests through smart negotiation.",
  },
  {
    number: "04",
    text: "Managing the business so artists can focus on their craft.",
  },
];

let heroMessageIndex = 0;

function changeHeroMessage() {
  if (!heroCard || !heroCardNumber || !heroCardText) {
    return;
  }

  heroCard.classList.add("changing");

  setTimeout(() => {
    heroMessageIndex++;

    if (heroMessageIndex >= heroMessages.length) {
      heroMessageIndex = 0;
    }

    const message = heroMessages[heroMessageIndex];

    heroCardNumber.textContent = message.number;
    heroCardText.textContent = message.text;

    heroCard.classList.remove("changing");
  }, 800);
}

setInterval(changeHeroMessage, 3000);
