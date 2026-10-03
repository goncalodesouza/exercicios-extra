/* =========================================================
   ELEMENTOS
========================================================= */

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const header = document.querySelector(".header");

/* =========================================================
   MENU MOBILE
========================================================= */

menuButton.addEventListener("click", () => {
  const menuIsOpen = nav.classList.toggle("active");

  menuButton.classList.toggle("active");

  document.body.classList.toggle("menu-open");

  menuButton.setAttribute("aria-expanded", menuIsOpen);
});

/* =========================================================
   FECHAR MENU AO CLICAR NUM LINK
========================================================= */

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");

    menuButton.classList.remove("active");

    document.body.classList.remove("menu-open");

    menuButton.setAttribute("aria-expanded", "false");
  });
});

/* =========================================================
   HEADER AO FAZER SCROLL
========================================================= */

function updateHeader() {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeader);

updateHeader();

/* =========================================================
   ANIMAÇÕES DE ENTRADA
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
