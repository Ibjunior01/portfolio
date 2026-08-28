const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Abrir menu" : "Fechar menu");

    mainNav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
      document.body.classList.remove("menu-open");
    });
  });
}
