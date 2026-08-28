const themeToggle = document.querySelector("#theme-toggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme") || "light";
}

function updateThemeButton(theme) {
  if (!themeToggle) return;

  const isDark = theme === "dark";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Ativar tema claro" : "Ativar tema escuro"
  );

  themeToggle.setAttribute(
    "title",
    isDark ? "Ativar tema claro" : "Ativar tema escuro"
  );
}

function updateBrowserThemeColor(theme) {
  if (!themeColorMeta) return;

  themeColorMeta.setAttribute(
    "content",
    theme === "dark" ? "#0b1120" : "#f8fafc"
  );
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  localStorage.setItem("portfolio-theme", theme);

  updateThemeButton(theme);
  updateBrowserThemeColor(theme);
}

if (themeToggle) {
  const initialTheme = getCurrentTheme();

  updateThemeButton(initialTheme);
  updateBrowserThemeColor(initialTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = getCurrentTheme();

    const nextTheme =
      currentTheme === "dark"
        ? "light"
        : "dark";

    setTheme(nextTheme);
  });
}


/* Links ainda não configurados */

document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (!href || href === "#") {
      event.preventDefault();

      console.info(
        "Link profissional ainda não configurado."
      );
    }
  });
});