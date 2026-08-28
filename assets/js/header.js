(() => {
  const header = document.querySelector("#site-header");

  if (!header) return;

  /*
   * O próprio caminho do header.js é usado para localizar
   * automaticamente a raiz do portfólio.
   *
   * Funciona tanto:
   * - localmente com Live Server
   * - quanto depois do deploy
   */
  const scriptUrl = document.currentScript.src;
  const rootUrl = new URL("../../", scriptUrl);

  const routes = {
    home: new URL("index.html", rootUrl).href,
    projects: new URL("projetos/index.html", rootUrl).href,
    specialties: new URL("index.html#especialidades", rootUrl).href,
    solutions: new URL("solucoes/index.html", rootUrl).href,
    about: new URL("sobre/index.html", rootUrl).href,
    contact: new URL("index.html#contato", rootUrl).href,
  };

  const pathname = window.location.pathname;

  const currentSection =
    pathname.includes("/projetos/")
      ? "projects"
      : pathname.includes("/solucoes/")
        ? "solutions"
        : pathname.includes("/sobre/")
          ? "about"
          : "home";

  function activeAttributes(section) {
    if (currentSection !== section) {
      return "";
    }

    return 'class="is-active" aria-current="page"';
  }

  header.innerHTML = `
    <div class="container header-inner">

      <a
        class="brand"
        href="${routes.home}"
        aria-label="Página inicial"
      >
        <span
          class="brand-mark"
          aria-hidden="true"
        >
          ●
        </span>

        <span class="brand-text">
          Portfólio
        </span>
      </a>


      <nav
        class="main-nav"
        id="menu-principal"
        aria-label="Navegação principal"
      >

        <a
          href="${routes.projects}"
          ${activeAttributes("projects")}
        >
          Projetos
        </a>

        <a href="${routes.specialties}">
          Especialidades
        </a>

        <a
          href="${routes.solutions}"
          ${activeAttributes("solutions")}
        >
          Soluções
        </a>

        <a
          href="${routes.about}"
          ${activeAttributes("about")}
        >
          Sobre
        </a>

        <a
          class="nav-cta"
          href="${routes.contact}"
        >
          Contato
        </a>

      </nav>


      <div class="header-actions">

        <button
          class="theme-toggle"
          id="theme-toggle"
          type="button"
          aria-label="Ativar tema escuro"
          title="Alternar tema"
        >

          <span
            class="theme-icon theme-icon-sun"
            aria-hidden="true"
          >
            ☀
          </span>

          <span
            class="theme-icon theme-icon-moon"
            aria-hidden="true"
          >
            ☾
          </span>

        </button>


        <button
          class="menu-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="menu-principal"
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </div>
  `;
})();