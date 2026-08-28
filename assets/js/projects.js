function createProjectCard(project, basePath = "projetos/") {
  const projectAction = project.slug
    ? `
      <a
        class="text-link"
        href="${basePath}${project.slug}"
      >
        Ver case
        <span aria-hidden="true">→</span>
      </a>
    `
    : `
      <span class="project-roadmap-label">
        Case em planejamento
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


      <h3>
        ${project.name}
      </h3>


      <div class="project-problem">

        <span class="project-label">
          Problema
        </span>

        <p>
          ${project.problem}
        </p>

      </div>


      <ul
        class="project-stack"
        aria-label="Tecnologias utilizadas ou planejadas"
      >

        ${project.stack
          .map(
            (technology) =>
              `<li>${technology}</li>`
          )
          .join("")}

      </ul>


      <div class="project-footer">

        ${projectAction}

      </div>

    </article>
  `;
}


function renderFeaturedProjects() {
  const grid =
    document.querySelector("#projects-grid");

  if (!grid) return;

  const featuredProjects =
    portfolioProjects.filter(
      (project) => project.featured
    );

  grid.innerHTML =
    featuredProjects
      .map(
        (project) =>
          createProjectCard(
            project,
            "projetos/"
          )
      )
      .join("");
}


document.addEventListener(
  "DOMContentLoaded",
  renderFeaturedProjects
);