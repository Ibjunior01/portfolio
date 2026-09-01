const projectsCatalog =
  document.querySelector("#projects-catalog");

const filterButtons =
  document.querySelectorAll("[data-project-filter]");


function renderProjectsCatalog(filter = "todos") {
  if (!projectsCatalog) return;

  const filteredProjects =
    filter === "todos"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) =>
            project.statusKey === filter
        );

  projectsCatalog.innerHTML =
    filteredProjects
      .map(
        (project) =>
          createCatalogCard(project)
      )
      .join("");

  updateProjectCounter(filteredProjects.length);
}


function createCatalogCard(project) {
  const unavailableCaseLabel =
    project.statusKey === "desenvolvimento"
      ? "Case em desenvolvimento"
      : "Case em planejamento";

  const action = project.slug
    ? `
      <a
        class="text-link"
        href="${project.slug}"
        aria-label="Ver case do projeto ${project.name}"
      >
        Ver case
        <span aria-hidden="true">→</span>
      </a>
    `
    : `
      <span class="project-roadmap-label">
        ${unavailableCaseLabel}
      </span>
    `;

  return `
    <article class="project-card">

      <div class="project-card-top">

        <span class="project-category">
          ${project.type}
        </span>

        <span
          class="status-badge ${project.statusClass}"
        >
          ${project.status}
        </span>

      </div>


      <h2>
        ${project.name}
      </h2>


      <div class="project-problem">

        <span class="project-label">
          Problema
        </span>

        <p>
          ${project.problem}
        </p>

      </div>


      <ul class="project-stack">

        ${project.stack
          .map(
            (technology) =>
              `<li>${technology}</li>`
          )
          .join("")}

      </ul>


      <div class="project-footer">
        ${action}
      </div>

    </article>
  `;
}


function updateProjectCounter(total) {
  const counter =
    document.querySelector("#project-counter");

  if (!counter) return;

  counter.textContent =
    `${total} ${
      total === 1
        ? "projeto"
        : "projetos"
    }`;
}


filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    filterButtons.forEach(
      (item) =>
        item.classList.remove("is-active")
    );

    button.classList.add("is-active");

    const filter =
      button.dataset.projectFilter;

    renderProjectsCatalog(filter);

  });

});


document.addEventListener(
  "DOMContentLoaded",
  () => renderProjectsCatalog()
);